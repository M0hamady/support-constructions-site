import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import ServicesIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Nav: React.FC = () => {
  // Define the links for each section with their respective icons
  const links = [
    { text: 'Home', to: '/', icon: <HomeIcon /> },
    { text: 'About Us', to: '/about-us', icon: <InfoIcon /> },
    { text: 'Contact Us', to: '/contact-us', icon: <ContactMailIcon /> },
    { text: 'Call Us', to: 'tel:+00201555099233', icon: <PhoneIcon /> }, // Mobile call link
    { text: 'Services', to: '/services', icon: <ServicesIcon /> },
  ];

  return (
    <nav className="bg-[#baad87] text-white px-4 fixed bottom-0 w-full md:hidden">
      {/* Mobile Only Layout */}
      <div className="w-full h-[]  justify-between items-center gap-2.5 inline-flex flex-row-reverse px-4">
        {links.map((link, index) => (
          <div key={index} className="flex-col justify-center items-center text-center flex ">
            <div className="text-[30px]">{link.icon}</div>
            <div className="h-[45px] text-white text-[16px] font-medium font-['Cairo'] leading-[49px]">
              <Link to={link.to} className="hover:text-[#C0C7C8]">
                {link.text}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
