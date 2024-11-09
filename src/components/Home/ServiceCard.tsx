import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BrushIcon from '@mui/icons-material/Brush';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';

const ServiceCard: React.FC<{ title: string; description: string; buttonText: string; Icon: React.ElementType }> = ({
  title,
  description,
  buttonText,
  Icon,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFlipped(true);
          } else {
            setIsFlipped(false);
          }
        });
      },
      { threshold: 0.9 }
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
      className="group w-full md:w-1/3 p-4 h-80 relative cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center rounded-lg shadow-lg p-6"
          style={{
            backgroundColor: '#baad87',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          <Icon style={{ fontSize: '3rem', color: 'white' }} />
          <h3 className="text-3xl font-bold text-white mt-4">{title}</h3>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center rounded-lg shadow-lg p-6"
          style={{
            backgroundColor: '#010101',
            color: 'white',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-3xl font-bold text-[#baad87] mb-4">{title}</h3>
          <p className="text-center text-base leading-relaxed mb-6">{description}</p>
          <Button
            variant="contained"
            style={{ backgroundColor: '#baad87', color: '#000' }}
            className="font-bold rounded-full mt-4"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">خدماتنا</h2>
        <div className="w-16 h-1 mx-auto bg-[#baad87] mt-4"></div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-stretch">
        <ServiceCard
          title="التصميمات الداخلية"
          description="نوفر تصاميم داخلية مميزة تجمع بين الجمال والراحة وفقاً لأحدث المعايير والأساليب العالمية."
          buttonText="طلب الخدمة"
          Icon={HomeIcon}
        />
        <ServiceCard
          title="التشطيبات والديكورات"
          description="فريقنا يعتني بأدق تفاصيل التشطيبات والديكورات لتقديم تجربة فريدة من نوعها تعكس أناقتك."
          buttonText="طلب الخدمة"
          Icon={BrushIcon}
        />
        <ServiceCard
          title="الصيانة والتجهيزات"
          description="نقدم خدمات صيانة شاملة لكل ما تحتاجه من تجهيزات بناء بأسلوب محترف لضمان جودة عالية."
          buttonText="طلب الخدمة"
          Icon={BuildIcon}
        />
        <ServiceCard
          title="أنظمة الأمان"
          description="نوفر حلول أمان متكاملة لحماية منشآتك من خلال أنظمة متقدمة للتحكم والسلامة."
          buttonText="طلب الخدمة"
          Icon={SecurityIcon}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
