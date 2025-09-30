import React from "react";
import { motion } from "framer-motion";
import resumePDF from "../../public/Jethanand.pdf"; // Make sure to have your resume.pdf in the assets folder
const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-50 dark:bg-gray-900"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Resume</span>
      </motion.h2>

      {/* Resume Grid */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Education */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Education</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>BSCS – BBSUL University</li>
            <li>Web Development Course – SMIT</li>
            <li>Intermediate – Govt. College</li>
            <li>Matric – Govt. School</li>
          </ul>
        </motion.div>

        {/* Design Skills */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Design Skills</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>UI/UX Design</li>
            <li>Responsive Web Design</li>
            <li>Adobe Photoshop & Canva</li>
            <li>Prototyping & Wireframing</li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Experience</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Frontend Developer Intern – Remote Projects</li>
            <li>Personal portfolio projects (React, Vite, Tailwind)</li>
            <li>E-commerce Website Development</li>
            <li>Open Source Contributions</li>
          </ul>
        </motion.div>

        {/* Coding Skills */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Coding Skills</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js & Vite</li>
            <li>Firebase & MongoDB (basic)</li>
            <li>Git & GitHub</li>
          </ul>
        </motion.div>
      </div>

      {/* Resume Download */}
      <motion.a
        href={resumePDF} // ✅ Make sure resume.pdf is in the public folder
        download
        className="mt-12 px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 hover:shadow-2xl transition transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default ResumeSection;
