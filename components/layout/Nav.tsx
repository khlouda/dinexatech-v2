"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const Logo = (
    <Link
      href="/"
      onClick={() => setOpen(false)}
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
      <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8 H44 C70 8 86 24 86 50 C86 76 70 92 44 92 H14 Z" fill="#F5F5F7" />
        <path d="M30 26 H42 C60 26 68 35 68 50 C68 65 60 74 42 74 H30 Z" fill="#141416" />
        <rect x="30" y="26" width="32" height="13" fill="#F5F5F7" />
        <rect x="38" y="26" width="14" height="48" fill="#F5F5F7" />
      </svg>
      <span
        style={{
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: "-0.03em",
          color: "#F5F5F7",
        }}
      >
        DinexaTech
      </span>
    </Link>
  );

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(20, 20, 22, 0.88)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 14,
          paddingBottom: 14,
          paddingLeft: isMobile ? 20 : 32,
          paddingRight: isMobile ? 20 : 32,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          gap: 16,
        }}
        aria-label="Main navigation"
      >
        {Logo}

        {!isMobile && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    color: "#F5F5F7",
                    textDecoration: "none",
                    transition: "opacity 0.15s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href="/contact"
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "-0.01em",
                color: "#141416",
                background: "#F5F5F7",
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
          </>
        )}

        {isMobile && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{
              width: 40,
              height: 40,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "#F5F5F7",
              flexShrink: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        )}
      </nav>

      {isMobile && open && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "calc(100vh - 64px)",
            zIndex: 49,
            backgroundColor: "rgba(20, 20, 22, 0.98)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            display: "flex",
            flexDirection: "column",
            padding: "32px 24px 40px",
            gap: 4,
            overflowY: "auto",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#F5F5F7",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 28,
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "#141416",
              background: "#F5F5F7",
              padding: "14px 18px",
              borderRadius: 8,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
