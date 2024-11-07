import React from 'react';
import { ArrowForward } from '@mui/icons-material'; // Import MUI icon
import { useProjectContext } from '../../context/ProjectContext';

const DynamicSection: React.FC = () => {
  // Access the projects from context
  const { projects } = useProjectContext();

  return (
    <section className="w-full py-8 px-4 md:px-8 bg-black flex flex-col justify-start items-center" dir="rtl">
      <div className="max-w-screen-xl w-full flex flex-col gap-8">
        {/* Left Section: Title and Subtitle */}
        <div className="w-full md:w-2/3 flex flex-col justify-start items-center md:items-end space-y-6 mb-4">
          <header className="w-full text-right">
            <h2 className="text-white text-4xl md:text-5xl font-bold font-['Tajawal'] leading-tight">
              آخر اعمالنا في مجالات التشطيب
            </h2>
            <div className="w-[200px] h-0.5 bg-[#baad87] mt-4"></div>
          </header>
        </div>

        {/* Right Section: Images Grid */}
        <div className="w-full md:w-[1133px] grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <figure key={project.id} className="w-[400px] h-[400px] relative border-2 border-primary">
              <img
                className="w-full h-full object-cover"
                src={project.image || 'https://via.placeholder.com/354x293'} // Fallback image if no image available
                width={'400px'}
                height={'400px'}
                alt={project.name} // SEO-friendly alt text
                loading="lazy" // Lazy loading for better performance
              />
              {/* <figcaption className="text-center text-white mt-2">{project.name}</figcaption> */}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicSection;
