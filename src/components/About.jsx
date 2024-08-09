import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p>Write a brief introduction about yourself here.</p>
    </motion.section>
  );
}

export default About;
