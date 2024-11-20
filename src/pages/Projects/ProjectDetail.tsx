import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useProjectContext } from "../../context/ProjectContext";
import BannerSection from "../../components/common/BannerSection2";
import ImageGallery from "../../components/common/ImageGallery";
import ResponsiveGallery from "../../components/common/ResponsiveGallery";
import SharingLinks from "../../components/common/SharingLinks";
import Aos from "aos";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { projects } = useProjectContext();
  const project = projects.find((proj) => proj.id === parseInt(id || "", 10));

  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0); // Active section tracking
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return <p className="text-center text-xl text-red-500">Project not found</p>;
  }

  const handleImageClick = (imageUrl: string) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRotationAngle(0);
  };

  const handleRotate = () => setRotationAngle((prev) => prev + 90);

  const handleSectionChange = (index: number) => setActiveSectionIndex(index);

  return (
    <div className="pb-8">
      <Helmet>
        <title>{project.name} - Project Details</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta property="og:url" content={`${window.location.origin}/projects/${project.id}`} />
      </Helmet>

      <BannerSection backgroundImage={project.image} firstWord={project.name} />

      <div className="px-4 sm:px-8 container mx-auto" dir="rtl" >
        <div className="flex flex-wrap py-4">
          <div className="w-full md:w-1/3 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.sections[activeSectionIndex]?.name}</h1>
            <p className="text-base text-gray-600 mb-6">{project.description}</p>
          </div>
          <div className="w-full md:w-2/3">
            <ImageGallery images={project.sections[activeSectionIndex]?.images} />
          </div>
        </div>

        <ResponsiveGallery
          sections={project.sections}
          onSectionChange={handleSectionChange}
          project={project}
        />

        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg max-w-lg mx-auto">
              <img
                src={modalImage}
                alt="Preview"
                className="w-full h-72 object-cover mb-4"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              />
              <div className="flex justify-center space-x-4">
                <button onClick={handleRotate} className="bg-gray-300 p-2 rounded-lg">
                  Rotate
                </button>
                <button onClick={closeModal} className="bg-red-500 p-2 text-white rounded-lg">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <SharingLinks
          projectId={project.id}
          projectName={project.name}
          projectDescription={project.description}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
