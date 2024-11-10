import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useProjectContext } from '../../context/ProjectContext';
import BannerSection from '../../components/common/BannerSection';
import { Banner } from '../../assets/images';

// Import MUI icons
import { ContentCopy, Facebook, Twitter, WhatsApp } from '@mui/icons-material';

// Modal Component to Display Image with Share Options
const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects, addCommentToSection } = useProjectContext();
  const project = projects.find((proj) => proj.id === parseInt(id || '', 10));

  const [newComment, setNewComment] = useState<string>('');
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);

  if (!project) {
    return <p className="text-center text-xl text-red-500">Project not found</p>;
  }

  // Handle adding a new comment
  const handleAddComment = (sectionId: number) => {
    if (!newComment.trim()) {
      return; // Do not add if the comment is empty
    }

    const commentData = { message: newComment, number: Date.now() };
    addCommentToSection(project.id, sectionId, commentData);

    setNewComment(''); // Clear the comment input after adding
    setSelectedSectionId(null); // Deselect the section
  };

  const handleImageClick = (imageUrl: string) => {
    window.location.href = `/image-preview?image=${encodeURIComponent(imageUrl)}`;
  };

  return (
    <div className="pb-8">
      <Helmet>
        <title>{project.name} - Project Details</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta property="og:url" content={`${window.location.origin}/projects/${project.id}`} />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>

      <BannerSection backgroundImage={Banner} firstWord='تصافح جمال المشاريع' />
      
      <div className="px-8 container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{project.name}</h1>
        <p className="text-lg text-gray-600 mb-6">{project.description}</p>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto rounded-lg shadow-lg mb-8"
          onClick={() => handleImageClick(project.image)} // Open in preview page
        />

        {project.sections.map((section) => (
          <div key={section.id} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{section.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((img) => (
                <div key={img.id} className="group relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
                  <div className="relative w-full h-0 pb-[100%]">
                    <img
                      src={img.image}
                      alt={img.description}
                      className="absolute top-0 left-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                      onClick={() => handleImageClick(img.image)} // Open in preview page
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-4">
                    <p className="text-white text-lg font-medium">{img.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
