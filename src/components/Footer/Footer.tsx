import React from "react";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import AOS from "aos";
import "aos/dist/aos.css";
import { Logo } from "../../assets/images";

const Footer: React.FC = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-primary text-white mt-16 max-sm:pb-12 ">
      {/* Top Section - Logo and Social Media Links */}
      <div
        className="flex flex-col items-center justify-center "
        data-aos="fade-up"
      >
        <div className="relative mb-6">
          <div className="bg-light  rounded-lg shadow-xl -translate-y-1/2 ">
            <img
              src={Logo}
              alt="Your Company Logo"
              className="w-[180px] h-[160px] object-cover  "
            />
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <div className="bg-black ">
            <IconButton
              href="https://www.instagram.com/support_construction_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-black text-white p-5 rounded-full hover:bg-[#a69260] transition-all"
              data-aos="zoom-in"
            >
              <InstagramIcon fontSize="large" className=" text-white" />
            </IconButton>
          </div>
          <div className="bg-black">
            <IconButton
              href="https://www.facebook.com/supportconstructioneg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-primary text-black p-3 rounded-full hover:bg-[#a69260] transition-all"
              data-aos="zoom-in"
            >
              <FacebookIcon fontSize="large" className="text-white" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Location */}
      <div
        className="mb-10 text-center text-sm mt-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* <p className="text-[#baad87] font-semibold mb-2">Our Location</p> */}
        <div className="text-[#cccccc]">
          
          <div className="mb-2 flex flex-row-reverse gap-3 items-center justify-center align-middle">
          <div className="w-fit ">
            <svg
              width="18"
              height="25"
              viewBox="0 0 18 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.11003 0.939941C7.54203 0.939941 6.07803 1.33194 4.71803 2.11594C3.40603 2.88394 2.36603 3.92394 1.59803 5.23594C0.814028 6.59594 0.422028 8.05994 0.422028 9.62794C0.422028 10.9879 0.830028 12.5879 1.64603 14.4279C2.30203 15.9159 3.20603 17.5239 4.35803 19.2519C5.19003 20.4999 6.11003 21.7559 7.11803 23.0199C7.74203 23.7719 8.21403 24.3239 8.53403 24.6759C8.69403 24.8519 8.88603 24.9399 9.11003 24.9399C9.33403 24.9399 9.52603 24.8519 9.68603 24.6759C10.006 24.3239 10.478 23.7719 11.102 23.0199C12.11 21.7559 13.03 20.4999 13.862 19.2519C15.014 17.5239 15.918 15.9159 16.574 14.4279C17.39 12.5879 17.798 10.9879 17.798 9.62794C17.798 8.05994 17.406 6.59594 16.622 5.23594C15.854 3.92394 14.814 2.88394 13.502 2.11594C12.142 1.33194 10.678 0.939941 9.11003 0.939941ZM9.11003 13.9959C8.32603 13.9959 7.59803 13.7999 6.92603 13.4079C6.25403 13.0159 5.72203 12.4879 5.33003 11.8239C4.93803 11.1599 4.74203 10.4279 4.74203 9.62794C4.74203 8.82794 4.93803 8.09594 5.33003 7.43194C5.72203 6.76794 6.25403 6.23994 6.92603 5.84794C7.59803 5.45594 8.32603 5.25994 9.11003 5.25994C9.89403 5.25994 10.622 5.45594 11.294 5.84794C11.966 6.23994 12.498 6.77194 12.89 7.44394C13.282 8.11594 13.478 8.84394 13.478 9.62794C13.478 10.4119 13.282 11.1399 12.89 11.8119C12.498 12.4839 11.97 13.0159 11.306 13.4079C10.642 13.7999 9.91003 13.9959 9.11003 13.9959Z"
                fill="#010101"
              />
            </svg>
          </div>
            
            اكتوبر 
              2G89+X9V فيلا 70 اللوتس الجنوبيه بجوار الكنيسه الانجيليه, New
              Cairo 1, Cairo Governorate 4743010
          </div>
        </div>
      </div>

      {/* Bottom Section - Terms and Privacy Policy */}
      <div className="bg-darker py-6 flex flex-col   justify-around w-full px-4">
        <div className="text-center text-sm flex justify-between gap-8">
          <p>
            Designed and developed by{" "}
            <a
              href="https://www.codeocean.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Code Ocean
            </a>
            .
          </p>
          <p className="mb-2 text-[#cccccc]">
            By using this site, you agree to the
            <a
              href="/terms-of-use"
              className="text-primary hover:underline mx-1"
            >
              Terms of Use
            </a>
            and
            <a
              href="/privacy-policy"
              className="text-primary hover:underline mx-1"
            >
              Privacy Policy
            </a>
            .
          </p>
          <p className="text-[#cccccc]">جميع الحقوق محفوظة.</p>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
