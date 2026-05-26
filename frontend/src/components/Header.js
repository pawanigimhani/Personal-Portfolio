import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "about-section", label: "About", colorClass: "text-white", hoverUnderline: "bg-secondary" },
    { to: "projects-section", label: "Projects", colorClass: "text-secondary", hoverUnderline: "bg-white" },
    { to: "blogs-section", label: "Blogs", colorClass: "text-white", hoverUnderline: "bg-secondary" },
    { to: "contact-section", label: "Contact", colorClass: "text-secondary", hoverUnderline: "bg-white" },
  ];

  return (
    <div
      className={`p-5 flex justify-between items-center w-full z-50 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 bg-primary/90 backdrop-blur-md shadow-lg border-b border-white/5"
          : "relative bg-primary"
      }`}
    >
      <img src="logo.png" className="w-[100px] h-[50px] object-contain" alt="Logo" />

      {/* Desktop Navigation */}
      <div className="flex space-x-8 sm:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            className={`${link.colorClass} cursor-pointer relative group text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:opacity-80`}
          >
            {link.label}
            <span className={`absolute left-0 bottom-0 w-0 h-[2px] ${link.hoverUnderline} transition-all duration-300 group-hover:w-full group-[&.active]:w-full`}></span>
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="hidden sm:block">
        <i
          className="ri-menu-line text-2xl text-white cursor-pointer hover:text-secondary transition-all duration-300"
          onClick={() => setMenuOpen(true)}
        ></i>
      </div>

      {/* Mobile Glassmorphic Drawer Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-primary/95 backdrop-blur-lg z-[9999] flex flex-col justify-center items-center gap-8 animate-fade-in">
          <i
            className="ri-close-line text-3xl text-white absolute top-6 right-6 cursor-pointer hover:text-secondary transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          ></i>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className={`${link.colorClass} text-2xl font-semibold tracking-widest uppercase cursor-pointer hover:opacity-85 transition-opacity`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
