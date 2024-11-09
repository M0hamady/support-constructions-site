// ProjectPreviewSection.tsx
import React, { useEffect } from 'react';
import { Share } from '@mui/icons-material'; // Import MUI icons
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useProjectContext } from '../../context/ProjectContext';
import { Banner } from '../../assets/images';

interface BannerProps {
 
}

const Projects: React.FC = () => {
  const { projects } = useProjectContext(); // Get the projects from context

  // Initialize AOS for animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Top Banner Section */}
      <div
        className="h-[344px] px-4 md:px-8 pt-[100px] pb-[63px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Banner})`, // Use the background image for the top banner
        }}
      >
        <div className="text-center text-white text-4xl font-bold font-['Tajawal'] leading-[50.40px]">
          {'مشاريعنا'}
        </div>
      </div>

      {/* Projects Preview Section */}
      <div className="px-4 md:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              data-aos="fade-up" // Apply AOS animation for fade-up
            >
              <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No projects available.</p>
        )}
      </div>

      {/* Share Icon Section */}
      <div className="flex justify-center py-4">
        <Share className="text-black text-2xl font-black" />
      </div>
    </div>
  );
};

export default Projects;
