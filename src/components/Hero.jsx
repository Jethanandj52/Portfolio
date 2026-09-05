
import { useEffect, useState } from "react";
import { NAME, TAGLINE, ROLES, TECH, SOCIALS } from "../data.js";
import {
  ArrowIcon,
  ChatIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  BoltIcon,
  StarIcon,
} from "./Icons.jsx";

export default function Hero({ t }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState(ROLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 70 : 120;

    const id = setTimeout(() => {
      if (!isDeleting) {
        if (displayRole.length < currentRole.length) {
          setDisplayRole(
            currentRole.substring(0, displayRole.length + 1)
          );
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayRole.length > 0) {
          setDisplayRole(
            displayRole.substring(0, displayRole.length - 1)
          );
        } else {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(id);
  }, [displayRole, isDeleting, roleIndex]);

  return (
    <header
      id="top"
      className="relative z-10 mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 px-7 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20"
    >
      {/* Copy */}
      <div>
        <span
          className={`mb-6 inline-flex items-center gap-2 rounded-full border ${t.border} ${t.surface} px-4 py-2 text-[13px] ${t.textMuted}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_0_3px_rgba(56,189,248,0.2)]" />
          Available for freelance work
        </span>

        <p
          className={`m-0 mb-1 text-xl font-medium ${t.textMuted}`}
        >
          Hey there! I'm
        </p>

        <h1 className="m-0 mb-3.5 font-[var(--font-display)] text-[42px] font-bold leading-[1.05] tracking-tight sm:text-[52px] md:text-[64px]">
          {NAME}
        </h1>

        <p className="m-0 mb-4.5 text-xl font-semibold sm:text-2xl md:text-[26px]">
          I'm a{" "}
          <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            {displayRole}
          </span>

          <span className="animate-blink ml-0.5 text-violet-400">
            |
          </span>
        </p>

        <p
          className={`m-0 mb-6.5 max-w-[50ch] text-base ${t.textMuted}`}
        >
          {TAGLINE}
        </p>

        <div className="mb-7 flex flex-wrap gap-2.5">
          {TECH.map((item) => (
            <span
              key={item.name}
              className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-[#0a0a14] ${item.color}`}
            >
              {item.name}
            </span>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 px-5.5 py-3 text-sm font-semibold text-white no-underline transition-transform hover:-translate-y-0.5"
          >
            View My Work <ArrowIcon />
          </a>

          <a
            href="#contact"
            className={`inline-flex items-center gap-2 rounded-full border ${t.border} ${t.surface} px-5.5 py-3 text-sm font-semibold no-underline transition-transform hover:-translate-y-0.5`}
          >
            Let's Talk <ChatIcon />
          </a>
        </div>

        <div
          className={`flex items-center gap-4 text-[13.5px] ${t.textMuted}`}
        >
          <span>Follow me:</span>

          <a
            href={SOCIALS.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-current"
          >
            <GithubIcon />
          </a>

          <a
            href={SOCIALS.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="hover:text-current"
          >
            <LinkedinIcon />
          </a>

          <a
            href={SOCIALS.twitter}
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
            className="hover:text-current"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>

      {/* Visual */}
      <div className="relative flex min-h-[380px] items-center justify-center sm:min-h-[460px] md:min-h-[380px]">

        {/* Main Avatar */}
        <div className="animate-float flex h-[220px] w-[220px] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 p-1.5 shadow-[0_0_60px_rgba(139,92,246,0.35)] sm:h-[300px] sm:w-[300px]">
          <img
            src="/jethanand.png"
            alt={NAME}
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* Floating code card */}
        <div
          className={`animate-float-slow absolute right-[-4%] top-[4%] w-[180px] rounded-xl border ${t.border} ${t.panelBg} p-3.5 shadow-2xl sm:w-[220px]`}
        >
          <div className="mb-2.5 flex gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-[#ff5f56]" />
            <span className="inline-block h-2 w-2 rounded-full bg-[#ffbd2e]" />
            <span className="inline-block h-2 w-2 rounded-full bg-[#27c93f]" />
          </div>

          <pre className="m-0 whitespace-pre-wrap font-[var(--font-mono)] text-[11px] leading-relaxed text-[#c8c8e0]">
            <span className="text-purple-400">const</span> developer = {"{"}
            {"\n"}  name:{" "}
            <span className="text-green-400">
              "Jethanand Malhi"
            </span>,
            {"\n"}  stack:{" "}
            <span className="text-green-400">
              ["MERN Satck"]
            </span>
            ,
            {"\n"}  passion:{" "}
            <span className="text-green-400">
              "clean code"
            </span>
            ,
            {"\n"}
            {"}"}
          </pre>
        </div>

        {/* Floating stat badges */}
        <div
          className={`animate-float-reverse absolute bottom-[6%] left-0 flex flex-col items-center rounded-2xl border ${t.border} ${t.panelBg} px-5 py-4 shadow-2xl sm:left-[-4%]`}
        >
          <span className="bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-[22px] font-extrabold text-transparent">
            50+
          </span>

          <span className={`text-xs ${t.textMuted}`}>
            Projects
          </span>
        </div>

        <div
          className={`animate-float-slow absolute right-0 top-[42%] flex flex-col items-center rounded-2xl border ${t.border} ${t.panelBg} px-5 py-4 shadow-2xl sm:right-[-6%]`}
        >
          <span className="bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-[22px] font-extrabold text-transparent">
            1+
          </span>

          <span className={`text-xs ${t.textMuted}`}>
            Years
          </span>
        </div>

        {/* Floating decorative shapes */}
        <div className="animate-float-reverse absolute bottom-[22%] right-[8%] flex h-10 w-10 rotate-[-12deg] items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white">
          <BoltIcon />
        </div>

        <div className="animate-float-slow absolute left-[-2%] top-[10%] flex h-10 w-10 rotate-[10deg] items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-blue-500 text-white">
          <StarIcon />
        </div>
      </div>
    </header>
  );
}
