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
          Instagram
        </Link>
      </div>
    </footer>
  );
}
