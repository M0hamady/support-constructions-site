import React from 'react';
import { IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Logo } from '../../assets/images';

const Footer: React.FC = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="w-full bg-[#010101] text-white pt-10">
      {/* Top Footer Section */}
      <div
        className="px-10 pb-10 bg-[#baad87] flex justify-center items-center flex-col"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center gap-10">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <IconButton
              href="https://www.youtube.com/channel/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="bg-black"
              data-aos="zoom-in"
            >
              <YouTubeIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/support_construction_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-black"
              data-aos="zoom-in"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://twitter.com/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="bg-black"
              data-aos="zoom-in"
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/supportconstructioneg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-black"
              data-aos="zoom-in"
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
          </div>

          {/* Image */}
          <img
            src={Logo}
            alt="Your Company Logo"
            width="206"
            height="141"
            className="my-5"
            data-aos="fade-up"
          />
        </div>
      </div>

      {/* Contact & Locations */}
      <div
        className="px-10 py-6 bg-[#010101] flex justify-center items-center flex-col text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="text-xl text-white mb-4">
          <p className="text-lg font-bold">مواقعنا:</p>
          <div className="mb-2">الفرع الأول : المنصورة – برج الشربيني – الدور السابع</div>
          <div>اكتوبر – امام مسجد الحصري – برج البرعي بلازا – الدور الثاني</div>
        </div>

        {/* Terms of Use and Privacy Policy */}
        <div className="text-sm text-white/75">
          <p>
            By using this site, you agree to the
            <a href="/terms-of-use" className="text-[#baad87] hover:underline">
              Terms of Use
            </a>
            and
            <a href="/privacy-policy" className="text-[#baad87] hover:underline">
              Privacy Policy
            </a>.
          </p>
          <p>جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
