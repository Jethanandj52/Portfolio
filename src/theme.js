/**
 * Small helper that returns a set of Tailwind class strings depending
 * on the active theme. Passed down to every section as the `t` prop
 * so each component stays theme-aware without repeating logic.
 */
export function getThemeTokens(theme) {
  const isDark = theme === "dark";

  return {
    isDark,
    page: isDark ? "bg-[#0a0a14] text-[#f2f2f8]" : "bg-[#f4f4fb] text-[#14141f]",
    textMuted: isDark ? "text-[#9c9cb8]" : "text-[#55556e]",
    textFaint: isDark ? "text-[#6c6c8c]" : "text-[#86869e]",
    border: isDark ? "border-white/10" : "border-black/10",
    surface: isDark ? "bg-white/[0.045]" : "bg-black/[0.03]",
    surfaceStrong: isDark ? "bg-white/[0.08]" : "bg-black/[0.06]",
    navBg: isDark ? "bg-[#0f0e1c]/70" : "bg-white/75",
    panelBg: isDark ? "bg-[#0f0e1c]/90" : "bg-white/90",
    glowOpacity: isDark ? "opacity-55" : "opacity-20",
  };
}
