import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

interface TeamMemberProps {
  name: string;
  role: string;
  imageAlt: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageAlt }) => (
  <div className="w-80 p-5 bg-[#010101] flex flex-col items-center gap-5 rounded-lg shadow-lg mx-4 lg:w-fit">
    <div className="bg-[#baad87] w-full h-56 flex items-center justify-center rounded-t-lg">
      <div
        className="w-56 h-56 bg-[#dcece4]/20 rounded-full"
        aria-label={imageAlt}
      ></div>
    </div>
    <div className="text-center">
      <h3 className="text-[#baad87] text-2xl font-bold font-['Tajawal'] leading-9">
        {name}
      </h3>
      <p className="text-[#dcece4] text-sm font-['Tajawal']">{role}</p>
    </div>
  </div>
);

const OurTeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "اسماء لبيب",
      role: "مديرة قسم التصميم - مهندسة معمارية",
      imageAlt: "اسماء لبيب",
    },
    { name: "حازم امام", role: "المدير التنفيذي", imageAlt: "حازم امام" },
    { name: "حاتم الشافعي", role: "مهندس كهرباء", imageAlt: "حاتم الشافعي" },
  ];

  return (
    <section
      className="w-full flex flex-col items-center py-12 px-6 lg:px-16 bg-[#f5f5f5]"
      dir="rtl"
    >
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row justify-between items-start">
        {/* Left Side: Title and Description */}
        <div className="w-full lg:w-1/6 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold font-['Tajawal'] text-black leading-tight">
            فريقنا
          </h2>
          <div className="w-20 h-1 bg-[#baad87] my-4"></div>
          <p className="text-[#9e9195] text-base font-normal font-['Tajawal'] leading-relaxed">
            ولضمان تحقيق نجاح هذه المهمة، فإننا نستهدف تشغيل أفراد بارعين،
            وأذكياء، ومتميزين على الصعيد المهني، وتملأهم الحماسة لإحداث فارق في
            العمل.
          </p>
          <div className="flex mt-6">
            <a href="tel:201558585914">
              <button className="flex items-center bg-black text-[#baad87] font-bold py-2 px-4 rounded">
                <EmailIcon className="text-black mr-2" />
                اتصل بنا
              </button>
            </a>
          </div>
        </div>

        {/* Right Side: Team Members Carousel */}
        <div className="w-full lg:w-5/6">
          <Swiper
            spaceBetween={40} // Increased spacing for larger screens
            slidesPerView={1}
            autoplay={{
              delay: 3000, // Autoplay delay in ms
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="flex flex-wrap justify-center lg:justify-start gap-6 w-full"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamMember
                  name={member.name}
                  role={member.role}
                  imageAlt={member.imageAlt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
