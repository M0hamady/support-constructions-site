import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Define the types for Project, Section, Image, and Comment
type Image = {
  id: number;
  image: string;
  description: string;
};

type Comment = {
  id: number;
  number: number;
  message: string;
};

type Section = {
  id: number;
  name: string;
  images: Image[];
  comments: Comment[];
};

type Project = {
  id: number;
  name: string;
  description: string;
  country: string;
  city: string;
  agent: string;
  image: string;
  sections: Section[];
};

type ProjectContextType = {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (projectId: number, updatedProject: Project) => void;
  deleteProject: (projectId: number) => void;
  fetchProjects: () => void;
  addCommentToSection: (projectId: number, sectionId: number, comment: Omit<Comment, 'id'>) => void;
  updateComment: (projectId: number, sectionId: number, commentId: number, updatedComment: Omit<Comment, 'id'>) => void;
  deleteComment: (projectId: number, sectionId: number, commentId: number) => void;
  loading: boolean;
  error: string | null;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const PROJECTS_STORAGE_KEY = 'projects';

const saveProjectsToLocalStorage = (projects: Project[]) => {
  sessionStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
};

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Project[]>('https://supportconstruction.pythonanywhere.com/api/projects/');
      setProjects(response.data);
      saveProjectsToLocalStorage(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch projects initially and then every minute
  useEffect(() => {
    const storedProjects = localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      fetchProjects();
    }

    // Fetch projects every minute (60000 milliseconds)
    const interval = setInterval(fetchProjects, 60000); 

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const addProject = (project: Project) => {
    const newProjects = [...projects, project];
    setProjects(newProjects);
    saveProjectsToLocalStorage(newProjects);
  };

  const updateProject = (projectId: number, updatedProject: Project) => {
    const updatedProjects = projects.map((project) =>
      project.id === projectId ? updatedProject : project
    );
    setProjects(updatedProjects);
    saveProjectsToLocalStorage(updatedProjects);
  };

  const deleteProject = (projectId: number) => {
    const filteredProjects = projects.filter((project) => project.id !== projectId);
    setProjects(filteredProjects);
    saveProjectsToLocalStorage(filteredProjects);
  };

  const addCommentToSection = async (projectId: number, sectionId: number, comment: Omit<Comment, 'id'>) => {
    try {
      const commentData = {
        message: comment.message,
        section: sectionId,
        number: Date.now(),
      };

      const response = await axios.post<Comment>(
        `https://supportconstruction.pythonanywhere.com/api/comments/`,
        commentData
      );

      const updatedProjects = projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              sections: project.sections.map((section) =>
                section.id === sectionId
                  ? { ...section, comments: [...section.comments, response.data] }
                  : section
              ),
            }
          : project
      );

      setProjects(updatedProjects);
      saveProjectsToLocalStorage(updatedProjects);
    } catch (error) {
      console.error('Failed to add comment', error);
    }
  };

  const updateComment = async (projectId: number, sectionId: number, commentId: number, updatedComment: Omit<Comment, 'id'>) => {
    try {
      const response = await axios.put<Comment>(
        `https://supportconstruction.pythonanywhere.com/api/comments/${commentId}/`,
        updatedComment
      );

      const updatedProjects = projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              sections: project.sections.map((section) =>
                section.id === sectionId
                  ? {
                      ...section,
                      comments: section.comments.map((comment) =>
                        comment.id === commentId ? response.data : comment
                      ),
                    }
                  : section
              ),
            }
          : project
      );

      setProjects(updatedProjects);
      saveProjectsToLocalStorage(updatedProjects);
    } catch (error) {
      console.error('Failed to update comment', error);
    }
  };

  const deleteComment = async (projectId: number, sectionId: number, commentId: number) => {
    try {
      await axios.delete(
        `https://supportconstruction.pythonanywhere.com/api/projects/${projectId}/sections/${sectionId}/comments/${commentId}/`
      );

      const updatedProjects = projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              sections: project.sections.map((section) =>
                section.id === sectionId
                  ? { ...section, comments: section.comments.filter((comment) => comment.id !== commentId) }
                  : section
              ),
            }
          : project
      );

      setProjects(updatedProjects);
      saveProjectsToLocalStorage(updatedProjects);
    } catch (error) {
      console.error('Failed to delete comment', error);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        fetchProjects,
        addCommentToSection,
        updateComment,
        deleteComment,
        loading,
        error,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};
