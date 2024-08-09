import React from "react";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>Welcome to my portfolio website!</p>
      </header>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
