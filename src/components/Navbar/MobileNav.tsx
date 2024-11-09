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
    { text: 'الرئيسية', to: '/', icon: <HomeIcon /> },
    { text: 'حول', to: '/about-us', icon: <InfoIcon /> },
    { text: 'تواصل', to: '/contact-us', icon: <ContactMailIcon /> },
    { text: 'اتصال', to: 'tel:+00201555099233', icon: <PhoneIcon /> }, // Mobile call link
    { text: 'الخدمات', to: '/services', icon: <ServicesIcon /> },
  ];

  return (
    <nav className="bg-primary text-white px-4 fixed bottom-0 w-full md:hidden shadow-lg z-50">
      {/* Mobile Only Layout */}
      <div className="w-full flex justify-between items-center gap-4 px-4 py-3" dir='rtl' >
        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center transition-all duration-300 ease-in-out hover:bg-[#444] p-2 rounded-md"
          >
            <div className="text-2xl">{link.icon}</div>
            <div className="h-fit text-white text-[14px] font-medium font-['Cairo'] leading-[18px] mt-1">
              <Link to={link.to} className="hover:text-secondary">{link.text}</Link>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
