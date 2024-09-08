import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <div
      className={`p-5 bg-primary flex justify-between items-center w-full z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0 shadow-md" : "relative"
      }`}
    >
      <img src="logo.png" className="w-[100px] h-[50px]" alt="Logo" />

      <div className="flex space-x-4">
        <Link
          to="about-section"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          offset={-80} 
          className="text-white cursor-pointer relative group"
        >
          <span className="hidden sm:inline">A</span>
          <span className="sm:hidden">About</span>
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full group-[&.active]:w-full"></span>
        </Link>
        <Link
          to="projects-section"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          offset={-80} 
          className="text-secondary cursor-pointer relative group"
        >
          <span className="hidden sm:inline">P</span>
          <span className="sm:hidden">Projects</span>
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-[&.active]:w-full"></span>
        </Link>
        <Link
          to="blogs-section"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          offset={-80} 
          className="text-white cursor-pointer relative group"
        >
          <span className="hidden sm:inline">B</span>
          <span className="sm:hidden">Blogs</span>
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full group-[&.active]:w-full"></span>
        </Link>
        <Link
          to="contact-section"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          offset={-80} 
          className="text-secondary cursor-pointer relative group"
        >
          <span className="hidden sm:inline">C</span>
          <span className="sm:hidden">Contact</span>
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-[&.active]:w-full"></span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
