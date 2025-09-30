import React from "react";
import { Home, User, FileText, Image, Mail } from "lucide-react";

const RightNav = ({ setActiveSection }) => {
  const links = [
    { icon: <Home size={20} />, section: "home" },
    { icon: <User size={20} />, section: "about" },
    { icon: <FileText size={20} />, section: "resume" },
    { icon: <Image size={20} />, section: "portfolio" },
    { icon: <Mail size={20} />, section: "contact" },
  ];

  return (
    <aside className="w-20 h-screen bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-tl-3xl rounded-bl-3xl shadow-xl flex flex-col items-center justify-center">
      <nav className="flex flex-col gap-8">
        {links.map((link) => (
          <button
            key={link.section}
            title={link.section.charAt(0).toUpperCase() + link.section.slice(1)}
            onClick={() => setActiveSection(link.section)}
            className="flex items-center justify-center w-12 h-12 rounded-full text-gray-700 dark:text-gray-200 hover:bg-cyan-500 hover:text-white transition transform hover:scale-110 shadow-sm"
          >
            {link.icon}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default RightNav;
