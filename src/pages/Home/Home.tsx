import React from 'react';
import HeroSection from '../../components/Home/HeroSection';

const Home: React.FC = () => {
  return (
    <div className='flex  w-full h-full min-h-screen '> 
      <HeroSection />  {/* Use the HeroSection component */}
      {/* You can add other sections or content below here */}
    </div>
  );
};

export default Home;
