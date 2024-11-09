import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface StatisticCardProps {
  bgColor: string;
  textColor: string;
  number: string;
  label: string;
  delay: number; // Delay for each card animation
}

const StatisticCard: React.FC<StatisticCardProps> = ({ bgColor, textColor, number, label, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use react-spring for number animation
  const props = useSpring({
    from: { number: 0 },
    to: { number: isVisible ? parseInt(number) : 0 },
    config: { tension: 250, friction: 25 },
  });

  // AOS visibility trigger
  useEffect(() => {
    AOS.init(); // Initialize AOS when component is mounted
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      handleAnimationEnd(); // Trigger the number animation after 40 seconds
    }, 4000); // 40 seconds delay

    // Clean up the timeout when the component unmounts or the timer changes
    return () => clearTimeout(timer);
  }, []); //
  // Trigger number animation when the card fades in
  const handleAnimationEnd = () => {
    setIsVisible(true);
  };

  return (
    <div
      className="flex justify-center items-center p-4"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-once="true"
    >
      <div className={`w-[280px] sm:w-[345px] h-[272px] ${bgColor} rounded-lg shadow-lg flex items-center justify-center`}>
        <div className="flex flex-col justify-center items-center w-full h-full p-4">
          {/* Animated number */}
          <animated.div
            className={`text-center text-[${textColor}] text-5xl sm:text-6xl md:text-7xl font-bold font-['Tajawal']`}
          >
            {props.number.to((n) => Math.floor(n))}
          </animated.div>
          <div className="text-center text-white text-md sm:text-lg mt-4 font-light font-['Tajawal']">{label}</div>
        </div>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div
      className="w-full h-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-[#baad87] flex flex-col justify-start items-center py-10"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="w-full max-w-screen-xl px-2.5 flex flex-col justify-center items-center space-y-10">
        {/* Title */}
        <div className="text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Tajawal'] text-black mb-4">
            احصائياتنا
          </div>
          <div className="w-[100px] mx-auto h-1 bg-white"></div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <StatisticCard
            bgColor="bg-black"
            textColor="#baad87"
            number="730"
            label="المشاريع"
            delay={0} // No delay for the first card
          />
          <StatisticCard
            bgColor="bg-[#070707]"
            textColor="#baad87"
            number="15"
            label="المصممين المبدعين"
            delay={200} // Delay for the second card
          />
          <StatisticCard
            bgColor="bg-[#3c3c3c]"
            textColor="#baad87"
            number="12"
            label="العملاء"
            delay={400} // Delay for the third card
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
