import React, { useState } from 'react';
import { useProjectContext } from '../../context/ProjectContext';

const Projects: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useProjectContext();
  
  // Local state for adding or editing a project
  const [newProject, setNewProject] = useState({ id: 0, name: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleAddProject = () => {
    if (newProject.name && newProject.description) {
      addProject({ ...newProject, id: Date.now() });
      setNewProject({ id: 0, name: '', description: '' });
    }
  };

  const handleEditProject = (projectId: number) => {
    const projectToEdit = projects.find((project) => project.id === projectId);
    if (projectToEdit) {
      setNewProject(projectToEdit);
      setIsEditing(true);
    }
  };

  const handleUpdateProject = () => {
    if (newProject.name && newProject.description) {
      updateProject(newProject.id, newProject);
      setNewProject({ id: 0, name: '', description: '' });
      setIsEditing(false);
    }
  };

  const handleDeleteProject = (projectId: number) => {
    deleteProject(projectId);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          className="border p-2 mr-2"
        />
        {isEditing ? (
          <button onClick={handleUpdateProject} className="bg-blue-500 text-white px-4 py-2">
            Update Project
          </button>
        ) : (
          <button onClick={handleAddProject} className="bg-green-500 text-white px-4 py-2">
            Add Project
          </button>
        )}
      </div>

      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
            <button
              onClick={() => handleEditProject(project.id)}
              className="bg-yellow-500 text-white px-4 py-2 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProject(project.id)}
              className="bg-red-500 text-white px-4 py-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
