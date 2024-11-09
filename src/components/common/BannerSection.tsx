import React from 'react';

interface BannerProps {
  firstWord: string; // The first word that will be displayed on the banner
  backgroundImage: string; // The background image for the banner
}

const BannerSection: React.FC<BannerProps> = ({ firstWord, backgroundImage }) => {
  return (
    <div
      className="h-[344px] px-4 md:px-8 pt-[100px] pb-[63px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use passed background image
      }}
    >
      <div className="flex flex-col justify-center items-center pt-[130px]">
        <div className="text-center text-white text-4xl font-bold font-['Tajawal'] leading-[50.40px]">
          {firstWord} {/* Display the first word passed as a prop */}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
