import React from "react";
import { Link } from "react-scroll"; 

function Header() {
  return (
    <div className="p-5 bg-primary flex justify-between items-center">
      <img src="logo.png" className="w-[100px] h-[50px]" alt="Logo" />

      <div className="flex space-x-4">
        <Link
          to="about-section"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer"
        >
           <span className="hidden sm:inline">A</span>
           <span className="sm:hidden">About</span>
        </Link>
        <Link
          to="projects-section"
          smooth={true}
          duration={500}
          className="text-secondary cursor-pointer"
        >
          <span className="hidden sm:inline">P</span>
          <span className="sm:hidden">Projects</span>
        </Link>
        <Link
          to="blogs-section"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer"
        >
          <span className="hidden sm:inline">B</span>
          <span className="sm:hidden">Blogs</span>
        </Link>
        <Link
          to="contact-section"
          smooth={true}
          duration={500}
          className="text-secondary cursor-pointer"
        >
          <span className="hidden sm:inline">C</span>
          <span className="sm:hidden">Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
