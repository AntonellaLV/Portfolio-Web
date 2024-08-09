import React from "react";
import { motion } from "framer-motion";

function Blog() {
  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Blog</h2>
      <div className="blog-post">
        <h3>Blog Post 1</h3>
        <p>A brief description of your blog post.</p>
      </div>
      <div className="blog-post">
        <h3>Blog Post 2</h3>
        <p>A brief description of your blog post.</p>
      </div>
    </motion.section>
  );
}

export default Blog;
