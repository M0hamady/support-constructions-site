import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useProjectContext } from '../../context/ProjectContext';
import ShareButtons from '../../components/common/ShareButtons';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjectContext();
  const project = projects.find((proj) => proj.id === parseInt(id || '', 10));

  if (!project) {
    return <p>Project not found</p>;
  }

  const projectUrl = `${window.location.origin}/projects/${project.id}`;
  
  return (
    <div className="container mx-auto py-8">
      <Helmet>
        <title>{project.name} - Project Details</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta property="og:url" content={projectUrl} />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.name} className="w-full h-auto my-4" />

      <ShareButtons url={projectUrl} title={project.name} />
    </div>
  );
};

export default ProjectDetail;
