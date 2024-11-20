import React from 'react';

type BannerSection2Props = {
  backgroundImage: string;
  firstWord: string;
};

const BannerSection2: React.FC<BannerSection2Props> = ({ backgroundImage, firstWord }) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-full h-64 bg-cover bg-center flex items-center justify-center relative mb-5"
    >
      <div className=' absolute left-0 top-0 bg-black/25 w-full h-full'></div>
      <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 px-4 py-2">
        {firstWord}
      </h1>
    </div>
  );
};

export default BannerSection2;
