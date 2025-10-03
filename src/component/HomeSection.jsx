import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/image/profile.png";

const HomeSection = ({ setActiveSection }) => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Profile"
        className="rounded-full shadow-xl w-32 sm:w-40 md:w-52 h-32 sm:h-40 md:h-52 object-cover mb-6 border-4 border-blue-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Jethanand 👋
      </motion.h1>

      {/* Short Intro */}
      <motion.p
        className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I’m a <span className="font-semibold text-blue-600">Full Stack Developer</span> 
        with a strong focus on building modern, efficient, and user-friendly web applications.  
        My expertise covers both <span className="font-medium">frontend development (React.js, Next.js, JavaScript, Tailwind CSS)</span> 
        and <span className="font-medium">backend development (Node.js, Express, MongoDB)</span>.  
        I also work with cloud deployment, APIs, and databases to deliver complete end-to-end solutions.
      </motion.p>

      <motion.p
        className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I enjoy solving problems, writing clean code, and turning ideas into reliable products that scale.
      </motion.p>

      {/* Button */}
      <motion.a
        href="#contact"
        className="mt-8 px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition text-sm sm:text-base"
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
