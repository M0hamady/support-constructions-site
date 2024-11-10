import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useProjectContext } from "../../context/ProjectContext";
import BannerSection from "../../components/common/BannerSection";
import { Banner } from "../../assets/images";
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
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  // Handle case where project is not found
  if (!project) {
    return <p className="text-center text-xl text-red-500">Project not found</p>;
  }

  // Add comment to a specific section
  const handleAddComment = (sectionId: number) => {
    if (!newComment.trim() || !phoneNumber.trim()) {
      return; // Ensure both comment and phone number are filled
    }
  
    // Convert phone number to a number
    const phoneNumberAsNumber = parseInt(phoneNumber, 10);
  
    // Check if the phone number is a valid number
    if (isNaN(phoneNumberAsNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }
  
    const commentData = { message: newComment, number: phoneNumberAsNumber }; // 'number' is now a number
    addCommentToSection(project.id, sectionId, commentData);
  
    // Reset comment input states
    setNewComment("");
    setPhoneNumber("");
    setSelectedSectionId(null); // Deselect section
  };
  

  // Handle image click and show modal
  const handleImageClick = (imageUrl: string) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  // Handle image rotation in modal
  const handleRotate = () => setRotationAngle(rotationAngle + 90);

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setRotationAngle(0); // Reset rotation angle
  };

  // Social sharing links
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

  // Handle share button click
  const handleShare = () => {
    const url = `${window.location.origin}/projects/${project.id}`;
    const title = project.name;

    if (navigator.share) {
      navigator.share({ title, text: project.description, url }).catch(console.error);
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
        <meta property="og:url" content={`${window.location.origin}/projects/${project.id}`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={project.name} />
        <meta property="twitter:description" content={project.description} />
        <meta property="twitter:image" content={project.image} />
        <link rel="icon" href={project.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Project",
            "name": project.name,
            "description": project.description,
            "image": project.image,
            "url": `${window.location.origin}/projects/${project.id}`,
            "creator": { "@type": "Organization", "name": "Support Constructions" },
            "author": { "@type": "Person", "name": "Project Creator" },
            "sameAs": [
              "https://www.facebook.com/supportconstructioneg",
              "https://twitter.com/supportconstructioneg"
            ]
          })}
        </script>
      </Helmet>

      <BannerSection backgroundImage={Banner} firstWord="تصافح جمال المشاريع" />

      <div className="px-4 sm:px-8 container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">{project.name}</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">{project.description}</p>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto rounded-lg shadow-lg mb-4 sm:mb-8 cursor-pointer"
          onClick={() => handleImageClick(project.image)}
        />

        {project.sections.map((section) => (
          <div key={section.id} className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2 sm:mb-4">{section.name}</h2>
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 shadow-md">
              {selectedSectionId === section.id ? (
                <>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Your phone number"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                  />
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                    placeholder="Write your comment..."
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <button
                    onClick={() => handleAddComment(section.id)}
                    className="mt-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-300"
                  >
                    Add Comment
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setSelectedSectionId(section.id)}
                  className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Add Comment
                </button>
              )}
            </div>

            {/* Displaying comments for this section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Comments</h3>
              {section.comments && section.comments.length > 0 ? (
                section.comments.map((comment, index) => (
                  <div key={index} className="bg-[#14202a] rounded-lg p-4 mb-4 text-white">
                    <div className="text-base font-medium">Phone: {comment.number}</div>
                    <div className="text-sm text-[#bccbd6]">{comment.message}</div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No comments yet for this section.</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap mb-6">
        <button onClick={handleShare} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          <Share className="mr-2" /> Share
        </button>
        <button onClick={() => navigator.clipboard.writeText(`${window.location.origin}/projects/${project.id}`)} className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
          <ContentCopy className="mr-2" /> Copy Link
        </button>
        <a href={sharingLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
          <Facebook className="mr-2" /> Facebook
        </a>
        <a href={sharingLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
          <Twitter className="mr-2" /> Twitter
        </a>
        <a href={sharingLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          <WhatsApp className="mr-2" /> WhatsApp
        </a>
      </div>

      {/* Modal for image view */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white rounded-lg p-6">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
            <img
              src={modalImage}
              alt="Project Detail"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
              className="max-w-full max-h-screen"
            />
            <button
              onClick={handleRotate}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg"
            >
              <RotateRight className="mr-2" /> Rotate Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
