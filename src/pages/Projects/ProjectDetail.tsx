import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useProjectContext } from '../../context/ProjectContext';
import BannerSection from '../../components/common/BannerSection';
import { Banner } from '../../assets/images';

// Import MUI icons
import { ContentCopy, Facebook, Twitter, WhatsApp, RotateRight } from '@mui/icons-material';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects, addCommentToSection } = useProjectContext();
  const project = projects.find((proj) => proj.id === parseInt(id || '', 10));

  const [newComment, setNewComment] = useState<string>('');
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>('');
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  if (!project) {
    return <p className="text-center text-xl text-red-500">Project not found</p>;
  }

  const handleAddComment = (sectionId: number) => {
    if (!newComment.trim()) return;

    const commentData = { message: newComment, number: Date.now() };
    addCommentToSection(project.id, sectionId, commentData);

    setNewComment('');
    setSelectedSectionId(null);
  };

  const handleImageClick = (imageUrl: string) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleRotate = () => {
    setRotationAngle(rotationAngle + 90); // Rotate by 90 degrees
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRotationAngle(0);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(modalImage);
    alert('Image link copied to clipboard!');
  };

  const handleShare = (platform: 'facebook' | 'twitter' | 'whatsapp') => {
    const encodedUrl = encodeURIComponent(modalImage);
    let url = '';
    if (platform === 'facebook') {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    } else if (platform === 'twitter') {
      url = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
    } else if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodedUrl}`;
    }

    window.open(url, '_blank');
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

      <BannerSection backgroundImage={Banner} firstWord="تصافح جمال المشاريع" />
      
      <div className="px-8 container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{project.name}</h1>
        <p className="text-lg text-gray-600 mb-6">{project.description}</p>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto rounded-lg shadow-lg mb-8 cursor-pointer"
          onClick={() => handleImageClick(project.image)}
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
                      onClick={() => handleImageClick(img.image)}
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

      {/* Modal for image preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-full sm:max-w-3xl max-h-full p-4 overflow-auto bg-white rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl p-1 bg-red-500 rounded-full z-20"
            >
              &times;
            </button>
            <div className="relative w-full h-auto max-h-[80vh]">
              <img
                src={modalImage}
                alt="Modal Preview"
                className="w-full h-auto object-contain max-h-[80vh] z-0"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              />
              <button
                onClick={handleRotate}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-3 bg-blue-500 text-white rounded-full z-10"
              >
                <RotateRight />
              </button>
              {/* Share and Copy Options */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 bg-blue-600 text-white rounded-full"
                >
                  <Facebook />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-blue-400 text-white rounded-full"
                >
                  <Twitter />
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="p-2 bg-green-500 text-white rounded-full"
                >
                  <WhatsApp />
                </button>
                <button
                  onClick={handleCopyLink}
                  className="p-2 bg-gray-600 text-white rounded-full"
                >
                  <ContentCopy />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
