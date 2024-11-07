import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Banner3d } from '../../assets/images';

const WhySupportConstruction: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto py-10 flex flex-col items-center px-4 text-right">
      <div className="flex flex-col items-start md:flex-row md:items-center gap-6 md:gap-10">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
            ليه شركة سبورت كونستراكشن هي الأفضل في التشطيبات؟
          </h2>
          <div className="w-16 h-1 bg-[#baad87] mb-6" />
          <p className="text-lg text-[#9e9195] mb-4 leading-relaxed">
            سبورت كونستراكشن تعتبر واحدة من أفضل الشركات المتخصصة في التشطيبات الداخلية والخارجية في مصر. 
            بنوفر لك حلول شاملة بدايةً من التصميم المعماري لحد التشطيب الكامل بجودة عالية. معانا، تقدر تضمن أفضل تصميمات وديكورات بأحدث التقنيات لتلبية احتياجاتك بالكامل.
          </p>
          <div className="flex gap-8 mt-4">
            {['إشراف', 'تنفيذ', 'تصميم'].map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckIcon className="text-[#baad87]" />
                <span className="text-lg text-[#9e9195]">{service}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img src={Banner3d} alt="مشروع سبورت كونستراكشن" className="w-full h-full object-cover rounded-md shadow-md" />
        </div>
      </div>
      <button className="mt-8 px-6 py-3 bg-[#010101] text-white font-semibold border-2 border-black flex items-center gap-3">
        <ConstructionIcon className="text-[#baad87]" />
        <span>خدماتنا</span>
      </button>
    </section>
  );
};

export default WhySupportConstruction;
