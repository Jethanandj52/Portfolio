import { TESTIMONIALS } from "../data.js";
import { QuoteIcon } from "./Icons.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Testimonials({ t }) {
  return (
    <section id="testimonials" className="relative z-10 mx-auto max-w-[1160px] px-7 py-16">
      <SectionHead eyebrow="Testimonials" title="What people say after working with me" t={t} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <div key={item.name} className={`flex flex-col gap-4 rounded-[18px] border ${t.border} ${t.surface} p-6.5`}>
            <QuoteIcon className="text-violet-400 opacity-60" />
            <p className={`m-0 text-[14.5px] leading-relaxed ${t.textMuted}`}>{item.quote}</p>
            <div className="flex items-center gap-3">
              <span className="flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 text-[12.5px] font-bold text-white">
                {item.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div className="flex flex-col text-[13px]">
                <strong>{item.name}</strong>
                <span className={t.textFaint}>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
