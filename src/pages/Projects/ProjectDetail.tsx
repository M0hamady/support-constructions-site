import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useProjectContext } from '../../context/ProjectContext';
import BannerSection from '../../components/common/BannerSection';
import { Banner } from '../../assets/images';

// Modal Component to Display Image with Share Options
const ImageModal: React.FC<{ image: string; onClose: () => void }> = ({ image, onClose }) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(image).then(() => {
      alert('Image URL copied to clipboard!');
    });
  };

  const shareImage = (platform: string) => {
    const url = encodeURIComponent(image);
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <img src={image} alt="Expanded" className="max-w-full max-h-full object-contain mb-4" />
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={onClose}
        >
          ×
        </button>
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="text-blue-500"
            onClick={handleCopyToClipboard}
          >
            Copy URL
          </button>
          <button
            className="text-blue-500"
            onClick={() => shareImage('facebook')}
          >
            Share on Facebook
          </button>
          <button
            className="text-blue-500"
            onClick={() => shareImage('twitter')}
          >
            Share on Twitter
          </button>
          <button
            className="text-green-500"
            onClick={() => shareImage('whatsapp')}
          >
            Share on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects, addCommentToSection } = useProjectContext();
  const project = projects.find((proj) => proj.id === parseInt(id || '', 10));

  const [newComment, setNewComment] = useState<string>('');
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

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
    setModalImage(imageUrl);
  };

  const handleCloseModal = () => {
    setModalImage(null);
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
          width={800}  // Image width for SEO
          height={600} // Image height for SEO
        />

        {project.sections.map((section) => (
          <div key={section.id} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{section.name}</h2>
            
            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((img) => (
                <div key={img.id} className="group relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
                  {/* Image Container with 1:1 aspect ratio */}
                  <div className="relative w-full h-0 pb-[100%]">
                    <img
                      src={img.image}
                      alt={img.description}
                      className="absolute top-0 left-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                      onClick={() => handleImageClick(img.image)} // Open modal on click
                      width={300}  // Image width for SEO
                      height={300} // Image height for SEO
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-4">
                    <p className="text-white text-lg font-medium">{img.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comments Section */}
            {section.comments.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments:</h3>
                <div className="space-y-4">
                  {section.comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-100 p-4 rounded-md shadow-sm">
                      <p className="text-sm text-gray-600">{comment.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add Comment Form */}
            <div className="mt-6">
              {selectedSectionId === section.id ? (
                <>
                  <textarea
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Add your comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                  />
                  <div className="mt-4 flex justify-end gap-4">
                    <button
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors"
                      onClick={() => handleAddComment(section.id)}
                    >
                      Add Comment
                    </button>
                    <button
                      className="text-gray-500 underline"
                      onClick={() => setSelectedSectionId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <button
                  className="text-blue-500 font-semibold"
                  onClick={() => setSelectedSectionId(section.id)}
                >
                  Add a comment
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image */}
      {modalImage && <ImageModal image={modalImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default ProjectDetail;
