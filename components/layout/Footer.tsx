"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--color-border)",
        padding: "24px clamp(20px, 5vw, 32px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "var(--color-text-muted)",
            letterSpacing: "0",
          }}
        >
          &copy; 2026 DinexaTech
        </span>

        <span
          style={{
            fontSize: 12,
            color: "var(--color-text-muted)",
            letterSpacing: "0",
          }}
        >
          Norfolk, Virginia
        </span>

        <Link
          href="https://instagram.com/dinexatech"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            color: "var(--color-text-muted)",
            textDecoration: "none",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-primary)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)")
          }
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
          Instagram
        </Link>
      </div>
    </footer>
  );
}
