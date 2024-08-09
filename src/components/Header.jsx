import React from "react";
import logo from '../assets/logo.png';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
       <img src={logo} alt="Logo" className="logo" />
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <h2><p>Welcome to my portfolio website!</p></h2>
    </header>
  );
}

export default Header;
