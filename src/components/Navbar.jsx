import { useState } from "react";
import { INITIALS } from "../data.js";
import { SunIcon, MoonIcon, BurgerIcon, ArrowIcon } from "./Icons.jsx";

const LINKS = ["Home", "About", "Services", "Projects", "Contact"];

export default function Navbar({ theme, setTheme, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-3 z-30 px-4">
      <nav
        className={`mx-auto flex max-w-[1160px] items-center justify-between rounded-full border ${t.border} ${t.navBg} px-3.5 py-2.5 backdrop-blur-xl`}
      >
        <a href="#top" className={`flex items-center gap-2.5 no-underline ${t.isDark ? "text-white" : "text-neutral-900"}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 text-[13px] font-bold text-white">
            {INITIALS}
          </span>
          <span className="flex flex-col text-[15px] font-bold leading-tight">
            DevPort
            <small className={`text-[10.5px] font-medium ${t.textFaint}`}>Developer &amp; Designer</small>
          </span>
        </a>

        <ul className="hidden gap-6 md:flex">
          {LINKS.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className={`text-sm font-medium ${t.textMuted} transition-colors hover:${t.isDark ? "text-white" : "text-neutral-900"}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle color theme"
            className={`flex h-9 w-9 items-center justify-center rounded-full border ${t.border} ${t.surface} ${t.isDark ? "text-white" : "text-neutral-900"}`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white no-underline transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Hire Me <ArrowIcon />
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`flex h-9 w-9 items-center justify-center rounded-full border ${t.border} ${t.surface} ${t.isDark ? "text-white" : "text-neutral-900"} md:hidden`}
          >
            <BurgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={`mx-auto mt-2.5 flex max-w-[1160px] flex-col gap-1 rounded-2xl border ${t.border} ${t.panelBg} p-3.5 md:hidden`}>
          {LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`border-b ${t.border} px-1.5 py-2.5 text-sm ${t.textMuted} no-underline last:border-b-0`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
