import { SERVICES } from "../data.js";
import { ServiceIcon } from "./Icons.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Services({ t }) {
  return (
    <section
      id="services"
      className="relative z-10 mx-auto max-w-[1160px] overflow-hidden px-7 py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-120px] top-[20%] h-[250px] w-[250px] animate-pulse rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute right-[-100px] bottom-[10%] h-[250px] w-[250px] animate-pulse rounded-full bg-pink-500/10 blur-[100px]" />

      <SectionHead
        eyebrow="What I Do"
        title="Services built to bring your ideas to life"
        t={t}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, index) => (
          <div
            key={s.title}
            className={`group relative overflow-hidden rounded-2xl border ${t.border} ${t.surface} p-6.5 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/60 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]`}
            style={{
              animation: "serviceFadeUp 0.7s ease-out forwards",
              animationDelay: `${index * 120}ms`,
              opacity: 0,
            }}
          >
            {/* Gradient Glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 transition-all duration-500 group-hover:w-full" />

            {/* Icon */}
            <div className="relative mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)]">
              <ServiceIcon type={s.icon} />
            </div>

            {/* Service Number */}
            <span
              className={`absolute right-5 top-5 text-[11px] font-bold tracking-widest ${t.textMuted} opacity-40`}
            >
              0{index + 1}
            </span>

            {/* Title */}
            <h3 className="m-0 mb-2.5 text-[17px] font-bold transition-colors duration-300 group-hover:text-violet-400">
              {s.title}
            </h3>

            {/* Description */}
            <p
              className={`m-0 text-sm leading-6 ${t.textMuted}`}
            >
              {s.desc}
            </p>

            {/* Arrow */}
            <div
              className={`mt-5 flex items-center gap-2 text-xs font-semibold ${t.textMuted} transition-all duration-300 group-hover:gap-3 group-hover:text-violet-400`}
            >
              Learn more
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes serviceFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}