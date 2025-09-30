import React from "react";
import { Home, User, FileText, Image, Mail } from "lucide-react";
import profile from "../assets/image/profile.png";
import fb from "../assets/image/fb.png";
import linkdin from "../assets/image/linkdin.png";
import ins from "../assets/image/ins.jpg";

const SideBar = ({ setActiveSection }) => {
  return (
    <aside className="w-70 h-screen p-6 flex flex-col items-center justify-center bg-gradient-to-b from-white via-white/90 to-white/70 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900 rounded-tr-3xl rounded-br-3xl shadow-2xl">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-cyan-200 dark:ring-cyan-800">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Jethanand Malhi
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Frontend Developer
      </p>

      {/* Social Links */}
      <div className="flex gap-5 mt-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
        //   className="p-2 rounded bg-gray-100 dark:bg-gray-700 hover:bg-cyan-500 hover:text-white transition"
        >
          <img src={fb} alt="Facebook" className="w-8  rounded-2xl" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        //   className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-cyan-500 hover:text-white transition"
        >
          <img src={linkdin} alt="LinkedIn" className="w-8 rounded-2xl" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
        //   className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-cyan-500 hover:text-white transition"
        >
          <img src={ins} alt="Instagram" className="w-8 rounded-2xl" />
        </a>
      </div>

      {/* Footer */}
      <div className="mt-8 text-xs text-gray-500 dark:text-gray-400 text-center">
        © 2025 All rights reserved.
      </div>
    </aside>
  );
};

export default SideBar;
