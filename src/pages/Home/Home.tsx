import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import CardsContainer from '../../components/Home/Cards';
import AboutUsSection from '../../components/Home/AboutUsSection';
import DynamicSection from '../../components/Home/DynamicSection';
import WhyDecorEgypt from '../../components/Home/WhyDecorEgypt';
import CreativeDesigns from '../../components/Home/CreativeDesigns';
import ServicesSection from '../../components/Home/ServiceCard';
import OurTeamSection from '../../components/Home/OurTeamSection';
import StatsSection from '../../components/Home/StatsSection';

const Home: React.FC = () => {
  return (
    <div className='flex mb-[100px]  w-full h-full min-h-screen  flex-col'> 
      <HeroSection />  {/* Use the HeroSection component */}
      <CardsContainer />

      <AboutUsSection />
      <DynamicSection /> 
      <WhyDecorEgypt />
      {/* <CreativeDesigns /> */}
      <ServicesSection />
      <OurTeamSection />
      <StatsSection />
      {/* You can add other sections or content below here */}
    </div>
  );
};

export default Home;
