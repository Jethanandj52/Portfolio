import { EMAIL, SOCIALS } from "../data.js";
import {
  ArrowIcon,
  GithubIcon,
  LinkedinIcon,
} from "./Icons.jsx";

export default function Contact({ t }) {
  const whatsappNumber = "03403003870";
  const whatsappLink = `https://wa.me/923403003870`;

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-[1160px] overflow-hidden px-7 py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-120px] top-[20%] h-[280px] w-[280px] animate-pulse rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="pointer-events-none absolute right-[-120px] bottom-[10%] h-[280px] w-[280px] animate-pulse rounded-full bg-pink-500/10 blur-[110px]" />

      {/* Main Contact Card */}
      <div
        className={`group relative overflow-hidden rounded-[30px] border ${t.border} ${t.surface} px-6 py-14 shadow-2xl sm:px-10 md:px-14`}
      >
        {/* Gradient Background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-pink-500/10" />

        {/* Top Gradient Line */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[850px] text-center">
          {/* Badge */}
          <div className="mb-5 flex justify-center">
            <span
              className={`inline-flex items-center gap-2 rounded-full border ${t.border} ${t.surfaceStrong} px-4 py-2 text-xs font-semibold ${t.textMuted}`}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_0_4px_rgba(74,222,128,0.12)]" />
              Available for opportunities
            </span>
          </div>

          {/* Heading */}
          <h2 className="m-0 mb-4 text-[30px] font-extrabold leading-tight tracking-tight sm:text-[40px] md:text-[46px]">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              amazing
            </span>{" "}
            together.
          </h2>

          {/* Description */}
          <p
            className={`mx-auto mb-10 max-w-[650px] text-sm leading-7 sm:text-base ${t.textMuted}`}
          >
            Have a project in mind, want to collaborate, or simply want to
            connect? Feel free to reach out. I'm always open to discussing
            new ideas and opportunities.
          </p>

          {/* Contact Cards */}
          <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className={`group/card relative overflow-hidden rounded-2xl border ${t.border} ${t.surfaceStrong} p-5 text-left no-underline transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)]`}
            >
              {/* Hover Glow */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

              <div className="relative flex items-center gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 text-white shadow-lg transition-transform duration-500 group-hover/card:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16.5v-9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 7l8 6 8-6"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p
                    className={`m-0 mb-1 text-xs font-medium ${t.textMuted}`}
                  >
                    Email Me
                  </p>

                  <p className="m-0 truncate text-sm font-bold sm:text-[15px]">
                    {EMAIL}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-50 transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:opacity-100">
                <ArrowIcon />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={`group/card relative overflow-hidden rounded-2xl border ${t.border} ${t.surfaceStrong} p-5 text-left no-underline transition-all duration-500 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-[0_15px_40px_rgba(34,197,94,0.12)]`}
            >
              {/* Hover Glow */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

              <div className="relative flex items-center gap-4">
                {/* WhatsApp Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 text-white shadow-lg transition-transform duration-500 group-hover/card:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 11.5a8.5 8.5 0 01-12.9 7.3L4 20l1.2-3A8.5 8.5 0 1120 11.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.8 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.5c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.1-1.1-.3-2.4-1-3.5-2.1-1.1-1.1-1.8-2.4-2.1-3.5-.2-.5-.1-1.1.1-1.5z"
                    />
                  </svg>
                </div>

                <div>
                  <p
                    className={`m-0 mb-1 text-xs font-medium ${t.textMuted}`}
                  >
                    WhatsApp
                  </p>

                  <p className="m-0 text-sm font-bold sm:text-[15px]">
                    {whatsappNumber}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-50 transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:opacity-100">
                <ArrowIcon />
              </div>
            </a>
          </div>

          {/* Social Section */}
          <div className="mt-10">
            <div
              className={`mx-auto mb-5 h-px max-w-[500px] bg-gradient-to-r from-transparent via-current to-transparent opacity-10`}
            />

            <p className={`mb-4 text-xs font-medium ${t.textMuted}`}>
              Or connect with me on
            </p>

            <div className="flex justify-center gap-3">
              {/* GitHub */}
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={`flex h-11 w-11 items-center justify-center rounded-xl border ${t.border} ${t.surfaceStrong} ${t.textMuted} transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:text-violet-400`}
              >
                <GithubIcon />
              </a>

              {/* LinkedIn */}
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`flex h-11 w-11 items-center justify-center rounded-xl border ${t.border} ${t.surfaceStrong} ${t.textMuted} transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-400`}
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Bottom Text */}
          <p className={`mt-8 text-xs ${t.textMuted}`}>
            I usually respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}