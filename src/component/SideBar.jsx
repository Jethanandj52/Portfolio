// SideBar.jsx
import React from "react";
import profile from "../assets/image/profile.png";
import fb from "../assets/image/fb.png";
import linkdin from "../assets/image/linkdin.png";
import ins from "../assets/image/ins.jpg";

const SideBar = ({ setActiveSection }) => {
  return (
    <aside className="w-56 sm:w-64 md:w-72 h-screen p-4 sm:p-6 flex flex-col items-center justify-center bg-gradient-to-b from-white via-white/90 to-white/70 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900 shadow-2xl">
      {/* Profile Image */}
      <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-cyan-300 dark:ring-cyan-700">
        <img src={profile} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
        Jethanand Malhi
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        Frontend Developer
      </p>

      {/* Social Links */}
      <div className="flex gap-4 sm:gap-5 mt-6">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={fb} alt="Facebook" className="w-6 sm:w-7 md:w-8 rounded-2xl" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src={linkdin} alt="LinkedIn" className="w-6 sm:w-7 md:w-8 rounded-2xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={ins} alt="Instagram" className="w-6 sm:w-7 md:w-8 rounded-2xl" />
        </a>
      </div>

      {/* Footer */}
      <div className="mt-6 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 text-center">
        © 2025 All rights reserved.
      </div>
    </aside>
  );
};

export default SideBar;
