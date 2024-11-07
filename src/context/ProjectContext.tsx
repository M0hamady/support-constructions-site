import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the project type with an image property
type Project = {
  id: number;
  name: string;
  description: string;
  image: string; // URL or path to the image
};

// Define the context type
type ProjectContextType = {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (projectId: number, updatedProject: Project) => void;
  deleteProject: (projectId: number) => void;
};

const PROJECTS_STORAGE_KEY = 'projects';

// Helper function to load projects from localStorage
const loadProjectsFromLocalStorage = (): Project[] => {
  const storedProjects = localStorage.getItem(PROJECTS_STORAGE_KEY);
  return storedProjects ? JSON.parse(storedProjects) : [];
};

// Helper function to save projects to localStorage
const saveProjectsToLocalStorage = (projects: Project[]): void => {
  localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
};

// Create the context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Create a provider component
export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(loadProjectsFromLocalStorage());

  // Add a new project
  const addProject = (project: Project) => {
    const newProjects = [...projects, project];
    setProjects(newProjects);
    saveProjectsToLocalStorage(newProjects); // Save to localStorage
  };

  // Update an existing project
  const updateProject = (projectId: number, updatedProject: Project) => {
    const updatedProjects = projects.map((project) =>
      project.id === projectId ? updatedProject : project
    );
    setProjects(updatedProjects);
    saveProjectsToLocalStorage(updatedProjects); // Save to localStorage
  };

  // Delete a project
  const deleteProject = (projectId: number) => {
    const filteredProjects = projects.filter((project) => project.id !== projectId);
    setProjects(filteredProjects);
    saveProjectsToLocalStorage(filteredProjects); // Save to localStorage
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook to use the ProjectContext
export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};
