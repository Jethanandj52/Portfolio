import React from "react";
import { motion } from "framer-motion";
import resumePDF from "../../public/Jethanand.pdf";

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 "
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Resume</span>
      </motion.h2>

      {/* Resume Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl w-full">
        {/* Education */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Education
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            <li>BSCS – BBSUL University</li>
            <li>Web Development Course – SMIT</li>
            <li>Intermediate – Govt. College</li>
            <li>Matric – Govt. School</li>
          </ul>
        </motion.div>

        {/* Design Skills */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Design Skills
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            <li>UI/UX Design</li>
            <li>Responsive Web Design</li>
            <li>Adobe Photoshop & Canva</li>
            <li>Prototyping & Wireframing</li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Experience
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            <li>Frontend Developer Intern – Remote Projects</li>
            <li>Personal portfolio projects (React, Vite, Tailwind)</li>
            <li>E-commerce Website Development</li>
            <li>Open Source Contributions</li>
          </ul>
        </motion.div>

        {/* Coding Skills */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Coding Skills
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js & Vite</li>
            <li>Firebase & MongoDB (basic)</li>
            <li>Git & GitHub</li>
          </ul>
        </motion.div>
      </div>

      {/* Resume Download */}
      <motion.a
        href={resumePDF}
        download
        className="mt-8 sm:mt-12 px-6 sm:px-8 py-3 sm:py-4 sm:mb-10 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-2xl transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default ResumeSection;
