import SectionHead from "./SectionHead.jsx";

const FACTS = [
  { num: "50+", label: "Projects Delivered" },
  { num: "5+", label: "Years Experience" },
  { num: "20+", label: "Happy Clients" },
];

const HIGHLIGHTS = [
  {
    icon: "🎓",
    title: "BSCS Graduate",
    text: "Bachelor of Science in Computer Science with a strong foundation in software development.",
  },
  {
    icon: "💻",
    title: "MERN Stack Developer",
    text: "Completed MERN Stack Development training from Saylani Mass IT Training.",
  },
  {
    icon: "🚀",
    title: "Motivated Developer",
    text: "Passionate about learning new technologies and building modern, practical web applications.",
  },
];

export default function About({ t }) {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-[1160px] overflow-hidden px-7 py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-120px] top-[25%] h-[250px] w-[250px] animate-pulse rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute right-[-100px] bottom-[10%] h-[220px] w-[220px] animate-pulse rounded-full bg-blue-500/10 blur-[100px]" />

      <SectionHead
        eyebrow="About Me"
        title="Turning ideas into meaningful digital experiences"
        t={t}
      />

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        {/* Left Content */}
        <div className="animate-fade-in-up">
          <div
            className={`relative overflow-hidden rounded-3xl border ${t.border} ${t.surface} p-7 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]`}
          >
            {/* Top Gradient Line */}
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

            <p
              className={`m-0 mb-5 text-[17px] leading-8 ${t.textMuted}`}
            >
              I'm a{" "}
              <span className="font-bold text-violet-400">
                BSCS graduate
              </span>{" "}
              with a strong passion for web development and modern
              technologies. I enjoy creating clean, responsive, and
              user-friendly websites and applications.
            </p>

            <p
              className={`m-0 mb-5 text-[17px] leading-8 ${t.textMuted}`}
            >
              I completed my{" "}
              <span className="font-bold text-blue-400">
                MERN Stack Development course from Saylani Mass IT Training
              </span>
              , where I developed practical skills in MongoDB, Express.js,
              React.js, and Node.js.
            </p>

            <p
              className={`m-0 text-[17px] leading-8 ${t.textMuted}`}
            >
              I'm a{" "}
              <span className="font-bold text-pink-400">
                motivated and continuously learning developer
              </span>{" "}
              who loves solving problems and turning ideas into real-world
              digital products. My goal is to keep improving my skills and
              build applications that are fast, scalable, and enjoyable to
              use.
            </p>

            {/* Skills */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Tailwind CSS",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className={`animate-fade-in-up rounded-full border ${t.border} px-3.5 py-2 text-xs font-semibold ${t.textMuted} transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-400`}
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          {/* Highlight Cards */}
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.title}
              className={`group relative flex gap-4 overflow-hidden rounded-2xl border ${t.border} ${t.surface} p-5 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-[0_15px_40px_rgba(139,92,246,0.12)]`}
              style={{
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: `${index * 150}ms`,
                opacity: 0,
              }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 via-violet-500/15 to-pink-500/15 text-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="m-0 mb-1.5 text-base font-bold">
                  {item.title}
                </h3>

                <p
                  className={`m-0 text-sm leading-6 ${t.textMuted}`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {FACTS.map((f, index) => (
              <div
                key={f.label}
                className={`group relative overflow-hidden rounded-2xl border ${t.border} ${t.surface} px-3 py-5 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)]`}
                style={{
                  animation: "fadeInUp 0.6s ease forwards",
                  animationDelay: `${500 + index * 120}ms`,
                  opacity: 0,
                }}
              >
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent">
                  {f.num}
                </span>

                <span
                  className={`relative mt-1 block text-[11.5px] leading-4 ${t.textMuted}`}
                >
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
}