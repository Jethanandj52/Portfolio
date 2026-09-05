export default function GlowBackground({ t }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className={`absolute -right-16 -top-32 h-[480px] w-[480px] rounded-full bg-violet-500 blur-[90px] ${t.glowOpacity}`}
      />
      <div
        className={`absolute -left-36 top-64 h-[420px] w-[420px] rounded-full bg-pink-500 blur-[90px] opacity-40`}
      />
      <div
        className={`absolute -bottom-44 right-[10%] h-[500px] w-[500px] rounded-full bg-blue-500 blur-[90px] opacity-35`}
      />
    </div>
  );
}
