import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import CardsContainer from '../../components/Home/Cards';

const Home: React.FC = () => {
  return (
    <div className='flex mb-[100px]  w-full h-full min-h-screen  flex-col'> 
      <HeroSection />  {/* Use the HeroSection component */}
      <CardsContainer />
      {/* You can add other sections or content below here */}
    </div>
  );
};

export default Home;
