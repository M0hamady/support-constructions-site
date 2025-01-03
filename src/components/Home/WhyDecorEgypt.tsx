import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CheckIcon from '@mui/icons-material/Check';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Banner, Banner3d } from '../../assets/images';
import { Link } from 'react-router-dom';

const WhySupportConstruction: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full max-w-[1400px] mx-auto py-10 flex flex-col items-center px-4" dir="rtl">
      {/* SEO Meta Tags */}
      <head>
        <title>أفضل شركة تشطيبات داخلية وخارجية - سابورت كونستراكشن</title>
        <meta name="description" content="شركة سابورت كونستراكشن هي الأفضل في التشطيبات الداخلية والخارجية في مصر، نقدم خدمات التصميم، التنفيذ، والإشراف على جميع أنواع المشاريع." />
        <meta name="keywords" content="سابورت كونستراكشن, تشطيبات, التصميم, التنفيذ, إشراف, مصر, ديكورات, مشاريع بناء" />
        <meta property="og:title" content="أفضل شركة تشطيبات داخلية وخارجية - سابورت كونستراكشن" />
        <meta property="og:description" content="شركة سابورت كونستراكشن هي الأفضل في التشطيبات الداخلية والخارجية في مصر، نقدم خدمات التصميم، التنفيذ، والإشراف على جميع أنواع المشاريع." />
        <meta property="og:image" content={Banner3d} />
        <meta property="og:url" content="https://yourwebsite.com" />
      </head>

      {/* Title and Description Section */}
      <div className="flex flex-col items-start md:flex-row md:items-center gap-6 md:gap-10">
        
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-start items-start" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
            ليه شركة سابورت كونستراكشن هي الأفضل في التشطيبات؟
          </h2>
          <div className="w-16 h-1 bg-[#baad87] mb-6" />
          <p className="text-lg text-[#9e9195] mb-4 leading-relaxed">
            سابورت كونستراكشن تعتبر واحدة من أفضل الشركات المتخصصة في التشطيبات الداخلية والخارجية في مصر. 
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

        {/* Image Section */}
        <div className="flex-1" data-aos="fade-up">
          <img
            src={Banner3d}
            alt="مشروع سابورت كونستراكشن - تشطيبات عالية الجودة وتصميمات مبتكرة"
            width="600" // Added width
            height="400" // Added height
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Services Button */}
      <div className="mt-8" data-aos="zoom-in">
        <Link to={'/services'} className="px-6 py-3 bg-[#010101] text-white font-semibold border-2 border-black flex items-center gap-3">
          <ConstructionIcon className="text-[#baad87]" />
          <span>خدماتنا</span>
        </Link>
      </div>
    </section>
  );
};

export default WhySupportConstruction;
