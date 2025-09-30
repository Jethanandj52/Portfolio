import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HomeSection from "./component/HomeSection.jsx";
import AboutSection from "./component/AboutSection";
import ResumeSection from "./component/ResumeSection";
import PortfolioSection from "./component/PortfolioSection";
import ContactSection from "./component/ContactSection";
import Sidebar from "./component/SideBar";
import RightNav from "./component/RightNav";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
  switch (activeSection) {
    case "home":
      return <HomeSection setActiveSection={setActiveSection} />; // ✅ Pass props here
    case "about":
      return <AboutSection />;
    case "resume":
      return <ResumeSection />;
    case "portfolio":
      return <PortfolioSection />;
    case "contact":
      return <ContactSection />;
    default:
      return <HomeSection setActiveSection={setActiveSection} />; // ✅ Pass props here as well
  }
};


  return (
    <div className="flex bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Left Sidebar (Full height, Fixed) */}
      <div className="sticky top-0 h-screen flex-shrink-0">
        <Sidebar setActiveSection={setActiveSection} />
      </div>

      {/* Main Content (Scrollable area only) */}
     <main className="flex-1  overflow-y-auto h-screen scrollbar-hide">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeSection}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45 }}
      className="max-w-5xl mx-auto"
    >
      {renderSection()}
    </motion.div>
  </AnimatePresence>
</main>


      {/* Right Navigation (Full height, Fixed) */}
      <div className="sticky top-0 h-screen flex-shrink-0">
        <RightNav setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}
