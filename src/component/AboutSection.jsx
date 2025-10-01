import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className=" sm:mb-10 min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-blue-600">Me</span>
      </motion.h2>

      {/* Intro */}
      <motion.p
        className="max-w-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-base sm:text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hi, I’m <span className="font-semibold text-blue-600">Jethanand</span>.  
        I’m a Frontend Developer who enjoys creating modern, clean, and responsive
        websites. My focus is on writing clean code, improving user experience,
        and learning new technologies to stay up-to-date in the field.
      </motion.p>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Education */}
        <motion.div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">Education</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            BS in Computer Science  
            <br />  
            BBSUL University (7th Semester)
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">Skills</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            HTML, CSS, JavaScript, React.js, Firebase  
            <br />
            Familiar with: Git, Tailwind CSS, Responsive Design
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">Experience</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Worked on academic and personal projects including  
            <span className="font-medium"> APIverse</span> and  
            an E-commerce frontend with Firebase.
          </p>
        </motion.div>

        {/* Goals */}
        <motion.div className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">Goals</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            To become a full-stack developer, work on real-world projects,  
            and contribute to open-source development.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
