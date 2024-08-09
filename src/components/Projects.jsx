import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <><motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    ></motion.section><section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
      </section></>
  );
}

export default Projects;
