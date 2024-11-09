import React, { useEffect } from 'react';
import { ArrowForward } from '@mui/icons-material'; // Import MUI icon
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const AboutUsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Only animate once when scrolling into view
    });
  }, []);

  return (
    <section className="w-full py-8 px-4 md:px-8 bg-gray-50">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section: Rotated Square & Years */}
        <div className="w-full md:w-[466.66px] flex justify-center items-start" data-aos="fade-up">
          <div className="flex flex-col justify-start items-center w-full">
            <div className="relative pt-[158px] flex flex-col justify-center items-center w-full">
              <div className="w-[150px] h-[150px] origin-top-left rotate-45 border-8 border-[#baad87] mb-[60px]"></div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center gap-[2.90px]">
                    <div className="text-center text-[#010101] text-[270px] font-bold font-['Tajawal'] leading-[189px]">
                      8
                    </div>
                    <div className="text-center text-[#010101] text-[86px] font-bold font-['Tajawal'] leading-[60.20px]">
                      سنوات
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: About Us Text */}
        <div className="w-full md:w-2/3 flex flex-col justify-start items-start space-y-8" data-aos="fade-up">
          <header className="text-right w-full space-y-2">
            <h2 className="text-4xl md:text-5xl text-black font-bold font-['Cairo'] leading-tight">
              معلومات عنا
            </h2>
            <div className="w-[200px] h-0.5 bg-[#baad87]"></div>
          </header>

          <div className="text-right text-[#9e9195] text-base md:text-lg font-normal font-['Tajawal'] leading-relaxed space-y-6">
            <p>
              سنوات في تصميم وتنفيذ جميع انماط الديكورات الحديثه والكلاسيسكيه فان سابورت كونستركشن الخيار الافضل لديك لما لديها من خبرات واسعة
              تجعلها في صدارة شركات تشطيب شقق في مصر والوطن العربي.
            </p>
            <p>
              اكتسبنا خبرة سنين طويلة في تصميم وتنفيذ الديكورات الحديثة و اصبحنا مدركين لكل ما تحتاجه و ايجاد الحلول المناسبة عن طريق الاستغلال
              الامثل للمساحات سواء كانت الوحدة مساحة صغيره او كبيره نستغل كل جزء فى المساحة بفن و مهارة و توجيهك لكل ماهو جديد و مناسب و توفير
              مجهودك و راس مالك.
            </p>
            <p>
              تتبنى ديكور مصر تصميمات داخلية معاصرة ونضع دائما بعين الاعتبار متطلبات العميل ، قادرون على تنفيذ  متنوعة من الاستايلات بدرجة رائعة
              صمم شقتك بشكل أنيق ومتوازن.
            </p>
          </div>

          {/* "Browse Projects" Button */}
          <div className="w-full flex justify-end mt-8" data-aos="fade-up">
            <button className="flex items-center justify-center bg-[#010101] text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-[#baad87] transition-colors duration-300">
              <ArrowForward className="mr-3 text-xl" /> {/* MUI Arrow icon */}
              <span>تصفح المشاريع</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
