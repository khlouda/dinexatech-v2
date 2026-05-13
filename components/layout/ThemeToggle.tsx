"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

const themes = ["light", "dark", "system"] as const;
type Theme = (typeof themes)[number];

function getNextTheme(current: string | undefined): Theme {
  const idx = themes.indexOf((current ?? "system") as Theme);
  return themes[(idx + 1) % themes.length];
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ width: 24, height: 24 }} />;

  const next = getNextTheme(theme);

  const Icon =
    theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      style={{
        width: 24,
        height: 24,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-text-primary)",
        transition: "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.15s ease",
        outline: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
      }}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.92)";
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
      }}
      onFocus={(e) => {
        (e.currentTarget as HTMLButtonElement).style.outline = "2px solid var(--color-text-muted)";
        (e.currentTarget as HTMLButtonElement).style.outlineOffset = "4px";
        (e.currentTarget as HTMLButtonElement).style.borderRadius = "4px";
      }}
      onBlur={(e) => {
        (e.currentTarget as HTMLButtonElement).style.outline = "none";
      }}
    >
      <Icon size={16} strokeWidth={1.75} />
    </button>
  );
}
