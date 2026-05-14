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
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "-0.025em",
            color: "var(--color-text-primary)",
            textDecoration: "none",
            transition: "opacity 0.15s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          DinexaTech
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
