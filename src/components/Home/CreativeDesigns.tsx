import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import CheckIcon from '@mui/icons-material/Check';
import { Banner } from '../../assets/images';

const CreativeDesigns: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="w-full max-w-[1400px] mx-auto py-10 flex flex-col items-center px-4 text-right">
      {/* Header Section */}
      <div className="flex flex-col items-start md:flex-row md:items-center gap-6 md:gap-10">
        <div className="flex-1 flex flex-col justify-start items-start" data-aos="fade-right">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
            حلول إبداعية و مبتكرة في التصميم
          </h2>
          <div className="w-16 h-1 bg-[#baad87] mb-6" />
          <p className="text-lg text-[#9e9195] mb-4 leading-relaxed">
            سبورت كونستراكشن بتقدم حلول تصميم مبتكرة وعملية لكل المساحات. فريقنا الاحترافي بيهتم بأدق التفاصيل عشان يوفر أفضل نتيجة بجودة عالية. 
            مع خبرتنا الطويلة في السوق، بنقدر نحقق لكل عميل تصميمات خارجية وداخلية بشكل عصري يتناسب مع كل احتياجاتك وأسلوب حياتك.
          </p>
        </div>
        <div className="flex-1" data-aos="fade-left">
          <img src={Banner} alt="تصميم داخلي مبتكر" className="w-full h-full object-cover rounded-md shadow-md" />
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="mt-8" data-aos="zoom-in">
        <button className="px-6 py-3 bg-[#010101] text-white font-semibold border-2 border-black flex items-center gap-3">
          <ViewComfyIcon className="text-[#baad87]" />
          <span>شوف مشاريعنا</span>
        </button>
      </div>
    </section>
  );
};

export default CreativeDesigns;
