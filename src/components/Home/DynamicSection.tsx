import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import { useProjectContext } from '../../context/ProjectContext';
import { ArrowForward, Share } from '@mui/icons-material';

const DynamicSection: React.FC = () => {
  const { projects } = useProjectContext();
  const navigate = useNavigate();

  const shareProject = (projectUrl: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this project!',
        text: 'Explore the amazing details of this project.',
        url: projectUrl,
      });
    } else {
      alert(`Share this link: ${projectUrl}`);
    }
  };

  return (
    <section className="w-full py-8 px-4 md:px-8 bg-black flex flex-col justify-start items-center" dir="rtl">
      <div className="max-w-screen-xl w-full flex flex-col gap-8">
        <div className="w-full md:w-2/3 flex flex-col justify-start items-center md:items-end space-y-6 mb-4">
          <header className="w-full text-right">
            <h2 className="text-white text-4xl md:text-5xl font-bold font-['Tajawal'] leading-tight">
              آخر اعمالنا في مجالات التشطيب
            </h2>
            <div className="w-[200px] h-0.5 bg-[#baad87] mt-4"></div>
          </header>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`}
              key={project.id}
              className="relative group w-full h-[400px] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image || 'https://via.placeholder.com/400'}
                alt={project.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-4">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="flex items-center gap-2 text-white bg-[#baad87] py-2 px-4 rounded-full hover:bg-[#a08e6e] transition"
                  >
                    عرض التفاصيل
                    <ArrowForward />
                  </button>
                  <button
                    onClick={() => shareProject(`${window.location.origin}/project/${project.id}`)}
                    className="flex items-center gap-2 text-white bg-gray-700 py-2 px-4 rounded-full hover:bg-gray-600 transition"
                  >
                    مشاركة
                    <Share />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicSection;
