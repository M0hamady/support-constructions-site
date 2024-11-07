import React from 'react';
import { HeroImage } from '../../assets/images';
import Button from '../common/Button';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: descRef, inView: descInView } = useInView({ triggerOnce: true });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true });

  return (
    <section
      className="w-full h-screen flex flex-col justify-center items-center relative bg-cover bg-center "
      style={{ backgroundImage: `url(${HeroImage})` }}
      aria-label="Hero section with construction services"
    >
      {/* Title Section */}
      <header 
        ref={titleRef} 
        className={`w-full text-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 pt-20 z-10 transition-opacity duration-1000 ${titleInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-white max-sm:text-3xl xl:text-2xl font-extrabold font-['Cairo'] leading-tight max-w-4xl border-b-2 pb-4 mx-auto mb-4">
          سبورت كونستركشن - شركة تشطيب في مصر بأفكار ابداعية مبتكرة
        </h1>
      </header>

      {/* Description Section */}
      <div 
        ref={descRef} 
        className={`w-full text-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 mt-6 z-10 max-sm:hidden transition-opacity duration-1000 ${descInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xs font-normal font-['Cairo'] leading-relaxed max-w-4xl mx-auto mb-4">
          شركة سبورت كونستركشن احد افضل شركات تشطيب الشقق والفلل في مصر. لذلك تعد الطريقة المثالية لتصميم وتشطيب.
        </p>
        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xs font-normal font-['Cairo'] leading-relaxed max-w-4xl mx-auto mb-6">
          سنوات في سوق المعمار والابداع المصري. حيث حازت على ثقة العديد من العملاء من خلال تنفيذ أفضل تصميمات الديكور الكلاسيكية والحديثة بطريقة احترافية لجميع أنواع الوحدات السكنية والتجارية والفلل والقصور داخل وخارج مصر.
        </p>
      </div>

      {/* Call to Action and Button Section */}
      <div 
        ref={buttonRef} 
        className={`w-full px-6 sm:px-12 z-10 md:px-16 lg:px-24 xl:px-32 py-8 flex flex-col sm:flex-row justify-center items-center gap-6 mb-10 max-sm:flex-row transition-opacity duration-1000 ${buttonInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-full sm:w-auto mb-4 max-sm:m-0 sm:mb-0 flex justify-center">
          <Button
            link="tel:+00201555099233"
            name="إتصل بنا"
            variant="border"
            aria-label="Call Sports Construction"
          />
        </div>
        <div className="w-full sm:w-auto flex justify-center">
          <Button
            link="#packages"
            name="باقات التشطيب"
            variant="fill"
            aria-label="View finishing packages"
          />
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Lazy Loading Hidden Image */}
      <img
        src={HeroImage}
        alt="Hero Image"
        loading="lazy"
        width="1000" // Replace with actual width of your image
        height="600" // Replace with actual height of your image
        className="hidden"
      />
    </section>
  );
};

export default HeroSection;
