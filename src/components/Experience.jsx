import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <><motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    ></motion.section><section>
        <h2>Experience</h2>
        <div className="experience">
          <h3>Job Title 1</h3>
          <p>Company 1 - Duration</p>
          <p>Description of your role and responsibilities.</p>
        </div>
        <div className="experience">
          <h3>Job Title 2</h3>
          <p>Company 2 - Duration</p>
          <p>Description of your role and responsibilities.</p>
        </div>
      </section></>
  );
}

export default Experience;
