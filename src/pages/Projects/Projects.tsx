import React, { useState, useEffect } from 'react';
import { useProjectContext } from '../../context/ProjectContext';

const Projects: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useProjectContext();

  const [newProject, setNewProject] = useState({ id: 0, name: '', description: '', image: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (!isEditing) {
      setNewProject({ id: 0, name: '', description: '', image: '' });
      setImagePreview(null);
    } else if (newProject.image) {
      setImagePreview(newProject.image);
    }
  }, [isEditing]);

  const handleAddProject = () => {
    if (newProject.name && newProject.description && newProject.image) {
      addProject({ ...newProject, id: Date.now() });
      setNewProject({ id: 0, name: '', description: '', image: '' });
      setImagePreview(null);
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
    if (newProject.name && newProject.description && newProject.image) {
      updateProject(newProject.id, newProject);
      setNewProject({ id: 0, name: '', description: '', image: '' });
      setIsEditing(false);
      setImagePreview(null);
    }
  };

  const handleDeleteProject = (projectId: number) => {
    deleteProject(projectId);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setNewProject({ ...newProject, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      <div className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Project Name</label>
          <input
            id="name"
            type="text"
            placeholder="Project Name"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Project Description</label>
          <input
            id="description"
            type="text"
            placeholder="Project Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium">Project Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 w-full"
          />
          {imagePreview && <img src={imagePreview} alt="Project Preview" className="mt-4 w-40 h-40 object-cover" />}
        </div>

        <div>
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
      </div>

      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-4 p-4 border rounded">
            {project.image && <img src={project.image} alt={project.name} className="mb-4 w-full h-[200px] object-cover rounded" />}
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
            <div className="mt-2">
              <button onClick={() => handleEditProject(project.id)} className="bg-blue-500 text-white px-2 py-1 mr-2">
                Edit
              </button>
              <button onClick={() => handleDeleteProject(project.id)} className="bg-red-500 text-white px-2 py-1">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
