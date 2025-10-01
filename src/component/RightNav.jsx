// RightNav.jsx
import React from "react";
import { Home, User, FileText, Image, Mail } from "lucide-react";

const RightNav = ({ setActiveSection, mobile }) => {
  const links = [
    { icon: <Home size={20} />, section: "home" },
    { icon: <User size={20} />, section: "about" },
    { icon: <FileText size={20} />, section: "resume" },
    { icon: <Image size={20} />, section: "portfolio" },
    { icon: <Mail size={20} />, section: "contact" },
  ];

  if (mobile) {
    return (
      <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md flex justify-around items-center py-2">
        {links.map((link) => (
          <button
            key={link.section}
            title={link.section}
            onClick={() => setActiveSection(link.section)}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-gray-700 dark:text-gray-200 hover:bg-cyan-500 hover:text-white transition"
          >
            {link.icon}
          </button>
        ))}
      </nav>
    );
  }

  return (
    <aside className="w-16 sm:w-20 h-screen bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-xl flex flex-col items-center justify-center">
      <nav className="flex flex-col gap-6 sm:gap-8">
        {links.map((link) => (
          <button
            key={link.section}
            title={link.section.charAt(0).toUpperCase() + link.section.slice(1)}
            onClick={() => setActiveSection(link.section)}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-gray-700 dark:text-gray-200 hover:bg-cyan-500 hover:text-white transition"
          >
            {link.icon}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default RightNav;
