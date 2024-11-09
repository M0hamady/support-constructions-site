import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";
import { CallOutlined } from "@mui/icons-material";
import { Helmet } from "react-helmet"; // Import for dynamic SEO handling

const DesktopNav = () => (
  <div className="hidden md:flex space-x-6 text-right">
    <NavLink to="/">الرئيسية</NavLink>
    <NavLink to="/about-us">عنّا</NavLink>
    <NavLink to="/services">الخدمات</NavLink>
    <NavLink to="/projects">المشاريع</NavLink>
    <NavLink to="/prices">الأسعار</NavLink>
    <NavLink to="/topics">الموضوعات</NavLink>
    <NavLink to="/contact-us">اتصل بنا</NavLink>
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
      aria-label="إغلاق القائمة"
    >
      <CloseIcon />
    </button>
    <Link
      to="/"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195] text-right"
    >
      الرئيسية
    </Link>
    <Link
      to="/about-us"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195] text-right"
    >
      عنّا
    </Link>
    <Link
      to="/services"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195] text-right"
    >
      الخدمات
    </Link>
    <Link
      to="/projects"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195] text-right"
    >
      المشاريع
    </Link>
    <Link
      to="/prices"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195] text-right"
    >
      الأسعار
    </Link>
    <Link
      to="/topics"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195] text-right"
    >
      الموضوعات
    </Link>
    <Link
      to="/contact-us"
      onClick={toggleMenu}
      className="text-xl font-bold hover:text-[#9E9195] text-right"
    >
      اتصل بنا
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
  <Link to={to} className="relative text-white hover:text-[#9E9195] group" aria-label={`انتقل إلى صفحة ${children}`}>
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
      <Helmet>
        <title>Support Constructions - شركة دعم البناء</title>
        <meta
          name="description"
          content="أهلاً بكم في Support Constructions. نحن نقدم أفضل خدمات البناء والإنشاءات للمشاريع التجارية والسكنية مع توفير حلول مبتكرة وعالية الجودة."
        />
        <meta
          name="keywords"
          content="دعم البناء, إنشاءات, مشاريع, خدمات البناء, دعم المشاريع, بناء سكني, بناء تجاري"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Support Constructions - شركة دعم البناء" />
        <meta
          property="og:description"
          content="أهلاً بكم في Support Constructions. نحن نقدم أفضل خدمات البناء والإنشاءات للمشاريع التجارية والسكنية."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="https://www.supportconstructions.com" />
      </Helmet>

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex justify-start">
          <img
            className="w-[80px] h-[80px]"
            src={Logo}
            alt="الشعار - شركة دعم البناء"
          />
        </div>

        {/* Desktop Menu */}
        <DesktopNav />

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden" >
          <a href="tel:01003234531" aria-label="اتصل على 01003234531">
            <CallOutlined />
          </a>{" "}
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
