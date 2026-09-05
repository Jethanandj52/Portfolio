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
import offmenu from "../assets/image/offmenu.png";
import task from "../assets/image/task.png";
import blog from "../assets/image/blog.png";

import { ArrowIcon } from "./Icons.jsx";
import SectionHead from "./SectionHead.jsx";

const PROJECTS = [
  {
    name: "Task Hive",
    desc: "Task management and collaboration platform built as a full-stack project.",
    image: task,
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://task-hive-entrovex.vercel.app/",
    type: "Full Stack",
  },
  {
    name: "Blog Website",
    desc: "A full-stack blogging platform with a clean and user-friendly interface.",
    image: blog,
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://belog-frontend.vercel.app/home",
    type: "Full Stack",
  },
  {
    name: "Saylani Website Clone",
    desc: "A responsive clone of the Saylani website created using modern frontend technologies.",
    image: smit,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://jethanandj52.github.io/Saylani_website_clone/",
    type: "Frontend",
  },
  {
    name: "Offmenu Website Clone",
    desc: "A frontend clone of the Offmenu website with responsive layouts and styling.",
    image: offmenu,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://offmenu-clone.netlify.app/",
    type: "Frontend",
  },
  {
    name: "Food Panda Clone",
    desc: "Food delivery website clone with a responsive and modern user interface.",
    image: food,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://food-panda-clone-assignment.netlify.app/",
    type: "Frontend",
  },
  {
    name: "Furniture Website",
    desc: "Modern furniture e-commerce website clone built with React.",
    image: furniture,
    stack: ["React", "CSS", "JavaScript"],
    link: "https://furniture-ass1-react.netlify.app/",
    type: "React",
  },
  {
    name: "Restaurant Website",
    desc: "Responsive restaurant website with an attractive food-focused interface.",
    image: restaurant,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://mini-restaurent-ass.netlify.app",
    type: "Frontend",
  },
  {
    name: "Fast Food Website",
    desc: "Fast food ordering interface designed with a clean and responsive layout.",
    image: fastfood,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://order-fast-food-clone.netlify.app/",
    type: "Frontend",
  },
  {
    name: "Weather App",
    desc: "Weather application displaying weather information through a simple interface.",
    image: weather,
    stack: ["JavaScript", "API", "CSS"],
    link: "https://darling-parfait-7c8139.netlify.app/",
    type: "JavaScript",
  },
  {
    name: "Quiz App",
    desc: "Interactive quiz application built with frontend technologies and dynamic logic.",
    image: quiz,
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://friendly-bubblegum-7908af.netlify.app/",
    type: "JavaScript",
  },
  {
    name: "Age Calculator",
    desc: "Simple and interactive age calculator developed using JavaScript.",
    image: age,
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://jethanandj52.github.io/age-calculator/",
    type: "JavaScript",
  },
  {
    name: "E-commerce Website",
    desc: "Frontend e-commerce website featuring products and a responsive layout.",
    image: ecom,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://jethanandj52.github.io/E-commerce1/",
    type: "Frontend",
  },
  {
    name: "Guess Number Game",
    desc: "Fun interactive number guessing game developed with JavaScript.",
    image: game,
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://jethanandj52.github.io/random_number_generator_game/",
    type: "JavaScript",
  },
  {
    name: "Time Table",
    desc: "Simple timetable application created with frontend technologies.",
    image: periodic,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://effulgent-blini-5cc036.netlify.app/",
    type: "Frontend",
  },
  {
    name: "Loan App",
    desc: "Loan application project combining React frontend with Firebase backend services.",
    image: loan,
    stack: ["React", "Firebase", "JavaScript"],
    link: "https://github.com/Jethanandj52/LoanApp",
    type: "React",
  },
  // {
  //   name: "Portfolio Website",
  //   desc: "Personal portfolio built with React, Tailwind CSS, and Framer Motion.",
  //   image: portfolio,
  //   stack: ["React", "Tailwind", "Framer Motion"],
  //   link: "https://portfolio-6a6y.vercel.app/",
  //   type: "React",
  // },
];

export default function Projects({ t }) {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-[1240px] overflow-hidden px-7 py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-120px] top-[15%] h-[280px] w-[280px] animate-pulse rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="pointer-events-none absolute right-[-120px] top-[45%] h-[300px] w-[300px] animate-pulse rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[5%] left-[40%] h-[240px] w-[240px] animate-pulse rounded-full bg-pink-500/10 blur-[110px]" />

      {/* Section Heading */}
      <SectionHead
        eyebrow="My Work"
        title="Projects I've built and brought to life"
        t={t}
      />

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`mx-auto mb-12 max-w-[650px] text-center text-base leading-7 ${t.textMuted}`}
      >
        A collection of projects I've created while learning, experimenting,
        and solving real-world problems. From frontend experiences to
        full-stack applications, each project represents a step forward in my
        development journey.
      </motion.p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: (index % 3) * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
            }}
            className={`group relative overflow-hidden rounded-[22px] border ${t.border} ${t.surface} shadow-lg transition-shadow duration-500 hover:border-violet-500/60 hover:shadow-[0_25px_60px_rgba(139,92,246,0.15)]`}
          >
            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

            {/* Project Image */}
            <div className="relative h-[210px] overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover"
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70" />

              {/* Project Number */}
              <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs font-bold text-white backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Project Type */}
              <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                {project.type}
              </div>

              {/* Image Bottom Label */}
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-medium tracking-wide text-white/80">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col p-6">
              {/* Title */}
              <h3 className="m-0 mb-2 text-[19px] font-bold transition-colors duration-300 group-hover:text-violet-400">
                {project.name}
              </h3>

              {/* Description */}
              <p
                className={`m-0 mb-5 min-h-[48px] text-sm leading-6 ${t.textMuted}`}
              >
                {project.desc}
              </p>

              {/* Stack */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border ${t.border} ${t.surfaceStrong} px-2.5 py-1 text-[11px] font-medium ${t.textMuted} transition-colors duration-300 group-hover:border-violet-500/30`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom */}
              <div
                className={`flex items-center justify-between border-t ${t.border} pt-4`}
              >
                <span
                  className={`text-[12px] font-medium ${t.textMuted}`}
                >
                  {project.stack.length} Technologies
                </span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 px-4 py-2 text-xs font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)]"
                >
                  View Project

                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className={`mx-auto mt-12 max-w-[700px] rounded-2xl border ${t.border} ${t.surface} p-6 text-center`}
      >
        <p className={`m-0 text-sm leading-6 ${t.textMuted}`}>
          These projects reflect my journey from learning the fundamentals of
          web development to building complete and interactive applications.
          I'm always working on something new and looking for the next
          challenge.
        </p>
      </motion.div>
    </section>
  );
}