import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the project type
type Project = {
  id: number;
  name: string;
  description: string;
  // Add any other properties as needed, like `status` or `createdAt`
};

// Define the context type
type ProjectContextType = {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (projectId: number, updatedProject: Project) => void;
  deleteProject: (projectId: number) => void;
};

// Create the context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Create a provider component
export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  const updateProject = (projectId: number, updatedProject: Project) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => (project.id === projectId ? updatedProject : project))
    );
  };

  const deleteProject = (projectId: number) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
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
