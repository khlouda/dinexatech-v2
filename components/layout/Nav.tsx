"use client";

import Link from "next/link";

const links = [
  { label: "Work", href: "/work" },
  { label: "Lab", href: "/lab" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "color-mix(in srgb, var(--color-background) 82%, transparent)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 14,
          paddingBottom: 14,
          paddingLeft: 32,
          paddingRight: 32,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
        aria-label="Main navigation"
      >
        {/* Logo mark + wordmark */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            textDecoration: "none",
            transition: "opacity 0.15s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          {/* DT monogram mark */}
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer D shape */}
            <path
              d="M14 8 H44 C70 8 86 24 86 50 C86 76 70 92 44 92 H14 Z"
              fill="var(--color-text-primary)"
            />
            {/* Inner D hole */}
            <path
              d="M30 26 H42 C60 26 68 35 68 50 C68 65 60 74 42 74 H30 Z"
              fill="var(--color-background)"
            />
            {/* T crossbar */}
            <rect x="30" y="26" width="32" height="13" fill="var(--color-text-primary)" />
            {/* T stem */}
            <rect x="38" y="26" width="14" height="48" fill="var(--color-text-primary)" />
          </svg>
          <span
            style={{
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
            }}
          >
            DinexaTech
          </span>
        </Link>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-secondary)")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/contact"
          style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: "var(--color-background)",
            background: "var(--color-text-primary)",
            padding: "8px 14px",
            borderRadius: 6,
            textDecoration: "none",
            transition: "opacity 0.15s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
