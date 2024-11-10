import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useProjectContext } from "../../context/ProjectContext";
import BannerSection from "../../components/common/BannerSection";
import { Banner } from "../../assets/images";

// Import MUI icons
import {
  ContentCopy,
  Facebook,
  Twitter,
  WhatsApp,
  RotateRight,
  Share,
} from "@mui/icons-material";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { projects, addCommentToSection } = useProjectContext();
  const project = projects.find((proj) => proj.id === parseInt(id || "", 10));

  const [newComment, setNewComment] = useState<string>("");
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [phoneNumber, setPhoneNumber] = useState<string>(""); // State for phone number

  if (!project) {
    return (
      <p className="text-center text-xl text-red-500">Project not found</p>
    );
  }

  // Handle adding a new comment
  const handleAddComment = (sectionId: number) => {
    if (!newComment.trim()) {
      return; // Do not add if the comment is empty
    }

    const commentData = { message: newComment, number: Date.now() };
    addCommentToSection(project.id, sectionId, commentData);

    setNewComment(""); // Clear the comment input after adding
    setSelectedSectionId(null); // Deselect the section
  };

  const handleImageClick = (imageUrl: string) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleNavigateToPreview = (imageUrl: string) => {
    // Navigate to the ImagePreviewPage with the image URL as a query parameter
    navigate(`/image-preview?image=${encodeURIComponent(imageUrl)}`);
  };

  const handleRotate = () => {
    setRotationAngle(rotationAngle + 90); // Rotate by 90 degrees
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/projects/${project.id}`
    );
    alert("Link copied to clipboard!");
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setRotationAngle(0); // Reset rotation angle when closing modal
  };

  const sharingLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.origin
    )}/projects/${project.id}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.origin
    )}/projects/${project.id}&text=${encodeURIComponent(project.name)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      window.location.origin
    )}/projects/${project.id}`,
  };

  const handleShare = () => {
    const url = `${window.location.origin}/projects/${project.id}`;
    const title = project.name;

    if (navigator.share) {
      navigator
        .share({ title, text: project.description, url })
        .catch(console.error);
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };
  return (
    <div className="pb-8">
      <Helmet>
        <title>{project.name} - Project Details</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <link rel="icon" href={project.image} />

        <meta
          property="og:url"
          content={`${window.location.origin}/projects/${project.id}`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={project.name} />
        <meta property="twitter:description" content={project.description} />
        <meta property="twitter:image" content={project.image} />

        {/* Schema.org Markup for rich snippets */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Project",
              "name": "${project.name}",
              "description": "${project.description}",
              "image": "${project.image}",
              "url": "${window.location.origin}/projects/${project.id}",
              "creator": {
                "@type": "Organization",
                "name": "support constructions"
              },
              "author": {
                "@type": "Person",
                "name": "Project Creator"
              },
              "sameAs": ["https://www.facebook.com/supportconstructioneg", "https://twitter.com/supportconstructioneg"]
            }
          `}
        </script>
      </Helmet>

      <BannerSection backgroundImage={Banner} firstWord="تصافح جمال المشاريع" />

      <div className="px-8 container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {project.name}
        </h1>
        <p className="text-lg text-gray-600 mb-6">{project.description}</p>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto rounded-lg shadow-lg mb-8 cursor-pointer"
          onClick={() => handleImageClick(project.image)} // Open modal
        />

        {project.sections.map((section) => (
          <div key={section.id} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {section.name}
            </h2>

            {/* Comment Section for each section */}
            <div className="bg-gray-100 p-6 rounded-lg mb-6 shadow-md">
              {/* Show "Add Comment" form only if the section is selected */}
              {selectedSectionId === section.id ? (
                <>
                  <h3 className="text-lg font-medium text-gray-700 mb-4">
                    Add a Comment
                  </h3>

                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Your phone number"
                    className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
                  />
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                    placeholder="Write your comment..."
                    className="w-full p-4 border border-gray-300 rounded-lg"
                  />
                  <button
                    onClick={() => handleAddComment(section.id)}
                    className="mt-4 px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-300"
                  >
                    Add Comment
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setSelectedSectionId(section.id)}
                  className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Add Comment
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((img) => (
                <div
                  key={img.id}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                >
                  <div className="relative w-full h-0 pb-[100%]">
                    <img
                      src={img.image}
                      alt={img.description}
                      className="absolute top-0 left-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                      onClick={() => handleImageClick(img.image)} // Open modal
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-4">
                    <p className="text-white text-lg font-medium">
                      {img.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Displaying comments for this section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Comments
              </h3>
              {section.comments && section.comments.length > 0 ? (
                section.comments.map((comment, index) => (
                  <div
                    key={index}
                    className="w-[551px] h-[96.5px] relative bg-[#14202a] rounded-lg p-4 mb-4"
                  >
                    <div className="text-white text-base font-medium font-['Inter']">
                      {comment.number}
                    </div>
                    <div className="text-[#bccbd6] text-sm font-light font-['Karla'] leading-[21.12px]">
                      {comment.message}
                    </div>
                    <div className="text-[#bccbd6] text-sm font-light font-['Karla'] leading-[21.12px] mt-1">
                      {comment.number}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">
                  No comments yet for this section.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Sharing Options */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          onClick={handleShare}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          <Share className="mr-2" /> Share
        </button>
        <button
          onClick={handleCopyLink}
          className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        >
          <ContentCopy className="mr-2" /> Copy Link
        </button>
        <a
          href={sharingLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
        >
          <Facebook className="mr-2" /> Facebook
        </a>
        <a
          href={sharingLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
        >
          <Twitter className="mr-2" /> Twitter
        </a>
        <a
          href={sharingLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          <WhatsApp className="mr-2" /> WhatsApp
        </a>
      </div>
      {/* Modal for image preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-full max-h-full p-4 overflow-auto bg-white rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 w-8 h-8 text-white text-2xl   bg-red-500 rounded-full z-20"
            >
              &times;
            </button>
            <div className="relative">
              <img
                src={modalImage}
                alt="Modal Preview"
                className="w-full max-h-[80vh] object-contain z-0"
                style={{ transform: `rotate(${rotationAngle}deg)` }} // Apply rotation
              />
              <button
                onClick={handleRotate}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-3 bg-blue-500 text-white rounded-full"
              >
                <RotateRight />
              </button>
              <button
                onClick={() => handleNavigateToPreview(modalImage)} // Navigate to ImagePreviewPage
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 p-3 bg-green-500 text-white rounded-full"
              >
                View Full Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
