import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiFirebase, SiPostman,
  SiTailwindcss, SiVercel, SiFigma
} from "react-icons/si";
import resumePDF from "../../public/Jethanand.pdf";

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative
                 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Resume</span>
      </motion.h2>
      <div className="w-24 h-1 bg-blue-600 rounded mb-12"></div>

      {/* Resume Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Education */}
        <motion.div
          className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/60 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Education</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-base">
            <li>BS in Computer Science – BBSUL University (8th Semester)</li>
            <li>Full Stack Development – SMIT Bootcamp</li>
            <li>Intermediate – Govt. College</li>
            <li>Matric – Govt. School</li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/60 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Experience</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-base">
            <li>Full Stack Developer Intern – Remote Projects</li>
            <li>Academic Project: <span className="font-medium">APIverse</span></li>
            <li>E-commerce App (React + Firebase)</li>
            <li>Open Source Contributions & Freelance Work</li>
          </ul>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/60 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Technical Skills</h3>
          <div className="grid grid-cols-4 gap-4 text-3xl text-gray-700 dark:text-gray-300">
            {/* Frontend */}
            <FaHtml5 className="text-orange-500" title="HTML5" />
            <FaCss3Alt className="text-blue-500" title="CSS3" />
            <FaJs className="text-yellow-400" title="JavaScript" />
            <FaReact className="text-cyan-400" title="React.js" />
            <SiTailwindcss className="text-sky-500" title="Tailwind CSS" />
            {/* Backend */}
            <FaNodeJs className="text-green-600" title="Node.js" />
            <SiExpress className="text-gray-500" title="Express.js" />
            {/* DB */}
            <SiMongodb className="text-green-700" title="MongoDB" />
            <SiFirebase className="text-yellow-500" title="Firebase" />
            <FaDatabase className="text-indigo-500" title="SQL / DBs" />
            {/* Tools */}
            <FaGitAlt className="text-red-500" title="Git" />
            <FaGithub className="dark:text-white" title="GitHub" />
            <SiPostman className="text-orange-600" title="Postman" />
            <SiVercel className="text-black dark:text-white" title="Vercel" />
          </div>
        </motion.div>

        {/* Extra Skills */}
        <motion.div
          className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/60 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Additional Skills</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-base">
            <li><SiFigma className="inline mr-2 text-pink-500 text-xl" /> UI/UX Design (Figma, Canva, Photoshop)</li>
            <li>Responsive Web Design & Wireframing</li>
            <li>Agile Development & Team Collaboration</li>
            <li>Problem Solving & Continuous Learning</li>
          </ul>
        </motion.div>
      </div>

      {/* Resume Download */}
      <motion.a
        href={resumePDF}
        download
        className="mt-12 px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-xl shadow-lg 
                   hover:bg-blue-700 hover:shadow-2xl transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default ResumeSection;
