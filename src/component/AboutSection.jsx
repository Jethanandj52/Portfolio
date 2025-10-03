import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPostman,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-50 dark:bg-gray-900"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-8 tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-blue-600">Me</span>
      </motion.h2>

      {/* Intro */}
      <motion.p
        className="max-w-3xl text-gray-600 dark:text-gray-300 mb-14 leading-relaxed text-base sm:text-lg text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hi, I’m <span className="font-semibold text-blue-600">Jethanand</span>.  
        I’m a <span className="font-semibold">Full Stack Developer</span> with a passion for
        building efficient, scalable, and user-friendly web applications.  
        I love working on both frontend and backend, turning ideas into complete solutions.
      </motion.p>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Education */}
        <motion.div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Education</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            BS in Computer Science <br />
            BBSUL University (8th Semester)
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-5 text-3xl text-gray-700 dark:text-gray-300">
            {/* Frontend */}
            <FaHtml5 className="text-orange-500" title="HTML5" />
            <FaCss3Alt className="text-blue-500" title="CSS3" />
            <FaJs className="text-yellow-400" title="JavaScript" />
            <FaReact className="text-cyan-400" title="React.js" />
            <SiTailwindcss className="text-sky-500" title="Tailwind CSS" />
            {/* Backend */}
            <FaNodeJs className="text-green-600" title="Node.js" />
            <SiExpress className="text-gray-500" title="Express.js" />
            {/* Database */}
            <SiMongodb className="text-green-700" title="MongoDB" />
            <SiFirebase className="text-yellow-500" title="Firebase" />
            <FaDatabase className="text-indigo-500" title="Databases" />
            {/* Tools */}
            <FaGitAlt className="text-red-500" title="Git" />
            <FaGithub className="text-black dark:text-white" title="GitHub" />
            <SiPostman className="text-orange-600" title="Postman" />
            <SiVercel className="text-black dark:text-white" title="Vercel" />
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Experience</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Worked on projects including  
            <span className="font-medium"> APIverse</span> (API & Libraries Platform)  
            and an <span className="font-medium">E-commerce App</span> with Firebase.  
            Skilled in API integration, backend logic, and responsive UI development.
          </p>
        </motion.div>

        {/* Goals */}
        <motion.div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Goals</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            To advance as a professional full-stack developer,  
            contribute to open-source communities, and build impactful real-world apps  
            while improving skills in cloud, DevOps, and scalable systems.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
