import React, { useEffect } from 'react';
import { Facebook, Twitter, Instagram, YouTube, Pinterest, Share } from '@mui/icons-material'; // Import MUI icons
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const SocialLinks = [
  { icon: <Facebook className="text-white text-2xl" />, link: '#' },
  { icon: <YouTube className="text-white text-2xl" />, link: '#' },
  { icon: <Instagram className="text-white text-2xl" />, link: '#' },
  { icon: <Twitter className="text-white text-2xl" />, link: '#' },
  { icon: <Pinterest className="text-white text-2xl" />, link: '#' },
];

const FooterSection: React.FC = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration here
  }, []);

  return (
    <div className="h-fit bg-black flex flex-col justify-start items-center max-w-[80vw] max-sm:max-w-full my-5">
      {/* Main Wrapper */}
      <div className="w-full max-w-screen-xl flex flex-col-reverse lg:flex-row justify-between items-start px-4 lg:px-8">
        
        {/* Social Media Links */}
        <div className="flex flex-col justify-start items-center w-full lg:w-2/3">
          <div className="flex flex-wrap justify-center items-center align-middle space-x-4 lg:space-x-8">
            {SocialLinks.map((social, index) => (
              <div
                key={index}
                className="h-fit px-4 py-2 bg-[#010101] flex justify-center items-center"
                data-aos="fade-up" // Apply AOS animation for fade-up
              >
                <a href={social.link} className="flex justify-center items-center">
                  {social.icon}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Text */}
        <div
          className="flex flex-col justify-start items-center w-full lg:w-1/3 bg-primary h-full mb-8 lg:mt-0"
          data-aos="fade-down" // Apply AOS animation for fade-down
        >
          <div className="py-2.5 flex flex-row justify-center items-center gap-2">
            <div className="text-white text-2xl font-bold font-['Tajawal']">الشبكات الاجتماعية</div>
            
            {/* Share Icon Section */}
            <div
              className="bg-[#baad87] flex justify-end items-center p-2 rounded-full"
              data-aos="zoom-in" // Apply AOS animation for zoom-in
            >
              <Share className="text-black text-2xl font-black" /> {/* MUI Share icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
