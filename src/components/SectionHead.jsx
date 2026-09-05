export default function SectionHead({ eyebrow, title, t }) {
  return (
    <div className="mx-auto mb-11 max-w-[620px] text-center">
      <span className={`mb-3.5 inline-block rounded-full border ${t.border} ${t.surface} px-4 py-1.5 text-[12.5px] font-semibold text-violet-400`}>
        {eyebrow}
      </span>
      <h2 className="m-0 text-[28px] font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
