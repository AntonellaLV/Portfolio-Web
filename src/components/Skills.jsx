import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <><motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    ></motion.section><section>
        <h2>Skills</h2>
        <ul className="skills">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
        </ul>
      </section></>
  );
}

export default Skills;
