import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Define the project type with sections and comments
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
  fetchProjects: () => void; // New method for fetching projects
  loading: boolean;
  error: string | null;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const PROJECTS_STORAGE_KEY = 'projects';

const saveProjectsToLocalStorage = (projects: Project[]) => {
  localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
};

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Project[]>('https://supportconstruction.pythonanywhere.com/api/projects/');
      console.log(response)
      setProjects(response.data);
      saveProjectsToLocalStorage(response.data); // Optional: Save to localStorage
      setError(null);
    } catch (err) {
      setError('Failed to fetch projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedProjects = localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      fetchProjects();
    }
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

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, updateProject, deleteProject, fetchProjects, loading, error }}
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
