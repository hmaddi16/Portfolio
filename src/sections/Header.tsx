"use client";

// Built Ins
import { useState } from "react";

export const Header = () => {
  // Define State Variables
  const [activeLink, setActiveLink] = useState<string>("#hero");

  // Define Event Handlers (onClick)
  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="flex justify-center items-center fixed top-6 w-full z-10 sm:top-8">

      {/* Navigation Bar */}
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-color-secondary backdrop-blur">
        {/* 
        HOME BUTTON DISABLED
        <a href="#hero"
          className={`nav-item ${activeLink === "#hero" ? "active" : ""}`}
          onClick={() => handleClick("#hero")}
        >
          Home
        </a>
        */}

        <a
          href="#about"
          className={`nav-item ${activeLink === "#about" ? "active" : ""}`}
          onClick={() => handleClick("#about")}
        >
          About
        </a>

        <a
          href="#experience"
          className={`nav-item ${activeLink === "#experience" ? "active" : ""}`}
          onClick={() => handleClick("#experience")}
        >
          Experience
        </a>

        <a
          href="#projects"
          className={`nav-item ${activeLink === "#projects" ? "active" : ""}`}
          onClick={() => handleClick("#projects")}
        >
          Projects
        </a>
        
        <a
          href="#contact"
          className={`nav-item ${activeLink === "#contact" ? "active" : ""}`}
          onClick={() => handleClick("#contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};


