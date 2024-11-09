import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";
import {
  CallOutlined,
  MobileFriendly,
  PhoneCallback,
  PhoneCallbackRounded,
} from "@mui/icons-material";

const DesktopNav = () => (
  <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
    <NavLink to="/">الرئيسية</NavLink>
    <NavLink to="/about-us">من نحن</NavLink>
    <NavLink to="/services">الخدمات</NavLink>
    <NavLink to="/projects">المشاريع</NavLink>
    <NavLink to="/prices">الأسعار</NavLink>
    <NavLink to="/topics">المواضيع</NavLink>
    <NavLink to="/contact-us">تواصل معنا</NavLink>
  </div>
);


const MobileNav = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => (
  <div
    className={`fixed top-0 left-0 w-full h-full bg-[#baad87] text-white p-6 flex flex-col space-y-6 z-50 transition-all duration-500 ease-in-out ${
      isOpen ? "translate-y-0" : "translate-y-full"
    }`}
  >
    <button
      className="self-end text-white text-2xl p-2"
      onClick={toggleMenu}
      aria-label="Close menu"
    >
      <CloseIcon />
    </button>
    <Link
      to="/"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195]"
    >
      Home
    </Link>
    <Link
      to="/about-us"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195]"
    >
      About Us
    </Link>
    <Link
      to="/services"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195]"
    >
      Services
    </Link>
    <Link
      to="/projects"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195]"
    >
      Projects
    </Link>
    <Link
      to="/prices"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195]"
    >
      Prices
    </Link>
    <Link
      to="/topics"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195]"
    >
      Topics
    </Link>
    <Link
      to="/contact-us"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195]"
    >
      Contact Us
    </Link>
  </div>
);

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link to={to} className="relative text-white hover:text-[#9E9195] group">
    {children}
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9E9195] scale-x-0 group-hover:scale-x-100 transform origin-right transition-all duration-300"></div>
  </Link>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#baad87] text-white px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="">
          <img className="w-[80px] h-[80px]" src={Logo} alt="Logo" />
          {/* <h1 className="text-2xl font-bold">Support Construction</h1> */}
        </div>

        {/* Desktop Menu */}
        <DesktopNav />

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden" >
          <a href="tel:01003234531" aria-label="Call 01003234531">
            <CallOutlined />
          </a>{" "}
          {isOpen ? <CloseIcon onClick={toggleMenu} /> : <MenuIcon  onClick={toggleMenu}/>}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
