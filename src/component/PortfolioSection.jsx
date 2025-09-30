import React from "react";
import { motion } from "framer-motion";
import smit from "../assets/image/smit.png";
import food from "../assets/image/food.png";
import age from "../assets/image/age.png";
import ecom from "../assets/image/e-commerce.png";
import game from "../assets/image/random.png";
import portfolio from "../assets/image/portfolio.png";
import furniture from "../assets/image/furniture.png";
import restaurant from "../assets/image/restaurant.png";
import weather from "../assets/image/weather.png";
import quiz from "../assets/image/quiz.png";
import fastfood from "../assets/image/fast-food.png";
import periodic from "../assets/image/periodic.png";
import loan from "../assets/image/loan.png";
 
import offmenu from '../assets/image/offmenu.png';

const projects = [
  {
    title: "Saylani Website Clone",
    description: "A clone of Saylani website using HTML, CSS, and JS.",
    image: smit, // ✅ yaha sirf smit likho
    link: "https://jethanandj52.github.io/Saylani_website_clone/",
  },
  {
    title: "Offmenu Website Clone",
    description: "A clone of Offmenu website using HTML, CSS, and JS.",
    image: offmenu, // ✅ yaha sirf smit likho
    link: "https://offmenu-clone.netlify.app/",
  },
  {
    title: "Food Panda Clone",
    description: "Food delivery website clone built with frontend technologies.",
    image: food, // ✅
    link: "https://food-panda-clone-assignment.netlify.app/",
  },
   {
    title: "Furniture Website Clone",
    description: "Furniture e-commerce website clone built with frontend technologies.",
    image: furniture, // ✅
    link: "https://furniture-ass1-react.netlify.app/",
  },
  {
    title: "Restaurant Website Clone",
    description: "Restaurant website clone built with frontend technologies.",
    image: restaurant, // ✅
    link: "https://mini-restaurent-ass.netlify.app",
  },
  {
    title: "Fast Food Website Clone",
    description: "Fast Food website clone built with frontend technologies.",
    image: fastfood, // ✅
    link: "https://order-fast-food-clone.netlify.app/",
  },
   {
    title: "Weather App",
    description: "Weather app built with frontend technologies.",
    image: weather, // ✅
    link: "https://darling-parfait-7c8139.netlify.app/",
  },
   {
    title: "Quiz App",
    description: "Quiz app built with frontend technologies.",
    image: quiz, // ✅
    link: "https://friendly-bubblegum-7908af.netlify.app/",
  },

  {
    title: "Age Calculator",
    description: "A simple age calculator built with JavaScript.",
    image: age, // ✅
    link: "https://jethanandj52.github.io/age-calculator/",
  },
  {
    title: "E-commerce Website",
    description: "An e-commerce website frontend project.",
    image: ecom, // ✅
    link: "https://jethanandj52.github.io/E-commerce1/",
  },
  {
    title: "Guess Number Game",
    description: "A fun JavaScript game for guessing numbers.",
    image: game, // ✅
    link: "https://jethanandj52.github.io/random_number_generator_game/",
  },
  {
    title: "Time Table",
    description: "Time table app built with frontend technologies.",
    image: periodic, // ✅
    link: "https://effulgent-blini-5cc036.netlify.app/",
  },
   
  
   {
    title: "Loan App",
    description: "Frontend React + Backen project with Firebase for product management.",
    image: loan,
    link: "https://github.com/Jethanandj52/LoanApp",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, Tailwind, and Framer Motion.",
    image: portfolio,
    link: "#",
  },
];


const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-16 px-6 flex flex-col items-center"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Projects</span>
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A collection of projects I’ve built with passion. From small apps to
        full platforms, here’s a showcase of my work.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full text-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
