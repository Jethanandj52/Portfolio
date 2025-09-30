import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/image/profile.png";

const HomeSection = ({ setActiveSection }) => {

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center"
    >
      <motion.img
        src={profile}
        alt="Profile"
        className="rounded-full shadow-xl w-40 h-40 object-cover mb-6 border-4 border-blue-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-5xl font-extrabold text-gray-800 dark:text-white"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Jethanand 👋
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A passionate Frontend Developer who loves building modern, responsive, and
        interactive web applications.
      </motion.p>

      <motion.a
        href="#contact"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveSection("contact")}
      >
        Contact Me
      </motion.a>
    </section>
  );
};

export default HomeSection;
