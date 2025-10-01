// App.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import HomeSection from "./component/HomeSection.jsx";
import AboutSection from "./component/AboutSection";
import ResumeSection from "./component/ResumeSection";
import PortfolioSection from "./component/PortfolioSection";
import ContactSection from "./component/ContactSection";
import Sidebar from "./component/SideBar";
import RightNav from "./component/RightNav";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection setActiveSection={setActiveSection} />;
      case "about":
        return <AboutSection />;
      case "resume":
        return <ResumeSection />;
      case "portfolio":
        return <PortfolioSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="flex  bg-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Sidebar - Large Devices */}
      <div className="hidden md:block sticky top-0 h-screen flex-shrink-0">
        <Sidebar setActiveSection={setActiveSection} />
      </div>

      {/* Sidebar - Mobile Slide In */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-50 w-64   bg-white dark:bg-gray-900 shadow-2xl md:hidden"
          >
            <Sidebar setActiveSection={setActiveSection} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hamburger Button - Mobile only */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-4 left-4 z-50 md:hidden bg-gray-500 p-2 rounded-lg text-white shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen scrollbar-hide">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
            className="max-w-5xl mx-auto p-3 sm:p-4 md:p-6"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Right Nav - Desktop/Tablet */}
      <div className="hidden md:block sticky top-0 h-screen flex-shrink-0">
        <RightNav setActiveSection={setActiveSection} />
      </div>

      {/* Right Nav - Mobile Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <RightNav setActiveSection={setActiveSection} mobile />
      </div>
    </div>
  );
}
