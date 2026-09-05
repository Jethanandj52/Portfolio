import { NAME } from "../data.js";

export default function Footer({ t }) {
  return (
    <footer className={`relative z-10 mx-auto flex max-w-[1160px] flex-wrap justify-between gap-2.5 border-t ${t.border} px-7 py-8 text-[12.5px] ${t.textFaint}`}>
      <span>© {new Date().getFullYear()} {NAME}. All rights reserved.</span>
      <span>Built with React · Tailwind CSS · Node.js · MongoDB</span>
    </footer>
  );
}
