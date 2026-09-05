import { useState } from "react";
import { getThemeTokens } from "./theme.js";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import GlowBackground from "./components/GlowBackground.jsx";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const t = getThemeTokens(theme);

  return (
    <div className={`relative min-h-screen overflow-x-hidden font-sans ${t.page}`}>
      <GlowBackground t={t} />

      <Navbar theme={theme} setTheme={setTheme} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Projects t={t} />
      {/* <Testimonials t={t} /> */}
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
