import React, { useEffect, useRef, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import LandscapeIcon from '@mui/icons-material/Landscape';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

type CardProps = {
  title: string;
  bgColor: string;
  textColor: string;
  iconBgColor: string;
  icon: React.ReactNode;
  delay: number;
};

const Card: React.FC<CardProps> = ({ title, bgColor, textColor, iconBgColor, icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full sm:w-auto flex justify-center items-center p-2 sm:p-0 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`flex flex-col sm:flex-row items-start ${bgColor} sm:items-center py-[15px] sm:py-[30px] w-full max-w-[350px]`}>
        <div className="flex-grow flex flex-row gap-3 justify-center w-full items-center px-4 sm:px-10 py-2 max-sm:justify-around">
          <div className={`text-right ${textColor} text-lg sm:text-2xl font-bold font-['Cairo'] leading-snug w-5/6`}>
            {title}
          </div>
          <div className={`h-10 w-10 ${iconBgColor} flex items-center justify-center`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardsContainer: React.FC = () => (
  <div className="w-full max-w-[1400px] mx-auto flex flex-wrap sm:flex-nowrap justify-center items-center p-4 bg-white">
    <Card
      title="البيت الذكي"
      bgColor="bg-[#baad87]/50"
      textColor="text-black"
      iconBgColor="bg-[#010101]"
      icon={<HomeIcon style={{ color: '#baad87', fontSize: '2rem' }} />}
      delay={100}
    />
    <Card
      title="تشطيبات وديكورات"
      bgColor="bg-[#baad87]/60"
      textColor="text-black"
      iconBgColor="bg-[#010101]"
      icon={<BuildIcon style={{ color: '#baad87', fontSize: '2rem' }} />}
      delay={200}
    />
    <Card
      title="التصميم الخارجي"
      bgColor="bg-[#baad87]"
      textColor="text-black"
      iconBgColor="bg-[#010101]"
      icon={<LandscapeIcon style={{ color: '#baad87', fontSize: '2rem' }} />}
      delay={300}
    />
    <Card
      title="تصميم داخلي"
      bgColor="bg-[#070707]"
      textColor="text-white"
      iconBgColor="bg-[#baad87]"
      icon={<DesignServicesIcon style={{ color: '#010101', fontSize: '2rem' }} />}
      delay={400}
    />
  </div>
);

export default CardsContainer;
