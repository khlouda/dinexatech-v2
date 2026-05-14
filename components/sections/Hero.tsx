"use client";

import { useState, useEffect } from "react";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

const SPECS = [
  { label: "DELIVERY", value: "5–7 days", multiline: false },
  { label: "OWNERSHIP", value: "100% yours", multiline: false },
  { label: "STACK", value: "Next.js · Stripe\nSupabase · Vercel", multiline: true },
  { label: "FROM", value: "Norfolk, VA", multiline: false },
];

const PROJECTS = [
  { num: "01", category: "Bakery", name: "Batten Bay Bakehouse", status: "live" as const },
  { num: "02", category: "Restaurant", name: "Layaly Coffee", status: "concept" as const },
  { num: "03", category: "Salon", name: "Stillwood Salon", status: "concept" as const },
  { num: "04", category: "Boutique", name: "Forge & Bloom", status: "live" as const },
];

// ── Right column — project directory ─────────────────────────────────────────

function ProjectDirectory() {
  return (
    <div
      style={{
        border: "0.5px solid var(--color-border)",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "14px 20px",
          borderBottom: "0.5px solid var(--color-border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--color-surface)",
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: 10,
            color: "var(--color-text-muted)",
            letterSpacing: "0.08em",
          }}
        >
          SELECTED WORK
        </span>
        <span
          style={{
            fontFamily: MONO,
            fontSize: 10,
            color: "var(--color-text-muted)",
            letterSpacing: "0.04em",
          }}
        >
          2024–2026
        </span>
      </div>

      {/* Project rows */}
      {PROJECTS.map((p, i) => (
        <div
          key={p.num}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "18px 20px",
            borderBottom: i < PROJECTS.length - 1 ? "0.5px solid var(--color-border)" : "none",
            gap: 16,
          }}
        >
          {/* Number */}
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: "var(--color-text-muted)",
              letterSpacing: "0.04em",
              flexShrink: 0,
              width: 20,
            }}
          >
            {p.num}
          </span>

          {/* Category */}
          <span
            style={{
              fontSize: 11,
              color: "var(--color-text-muted)",
              letterSpacing: "0.02em",
              flexShrink: 0,
              width: 80,
            }}
          >
            {p.category}
          </span>

          {/* Name */}
          <span
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.01em",
              flex: 1,
            }}
          >
            {p.name}
          </span>

          {/* Status */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: p.status === "live" ? "#16A34A" : "var(--color-text-muted)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: MONO,
                fontSize: 10,
                color: p.status === "live" ? "#16A34A" : "var(--color-text-muted)",
                letterSpacing: "0.04em",
              }}
            >
              {p.status}
            </span>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div
        style={{
          padding: "12px 20px",
          background: "var(--color-surface)",
          borderTop: "0.5px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontFamily: MONO, fontSize: 10, color: "var(--color-text-muted)", letterSpacing: "0.04em" }}>
          4 projects
        </span>
        <a
          href="#showcase"
          style={{
            fontFamily: MONO,
            fontSize: 10,
            color: "var(--color-text-primary)",
            textDecoration: "none",
            letterSpacing: "0.04em",
            borderBottom: "0.5px solid var(--color-text-primary)",
            paddingBottom: 1,
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.5")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          VIEW ALL →
        </a>
      </div>
    </div>
  );
}

// ── Left column ───────────────────────────────────────────────────────────────

function LeftColumn() {
  return (
    <div>
      <h1
        style={{
          fontSize: "clamp(52px, 6vw, 76px)",
          fontWeight: 600,
          lineHeight: 0.95,
          letterSpacing: "-0.05em",
          color: "var(--color-text-primary)",
          marginBottom: 20,
        }}
      >
        Websites,
        <br />
        perfected.
      </h1>

      <p
        style={{
          fontSize: 17,
          color: "var(--color-text-secondary)",
          maxWidth: 400,
          lineHeight: 1.55,
          marginBottom: 28,
        }}
      >
        Custom sites, ordering systems, and dashboards for small businesses.
        Engineered like enterprise. Delivered in days.
      </p>

      <div
        style={{
          display: "inline-flex",
          gap: 18,
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <a
          href="/contact"
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--color-background)",
            background: "var(--color-text-primary)",
            padding: "12px 22px",
            borderRadius: 6,
            textDecoration: "none",
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
          }
        >
          Start a project →
        </a>
        <a
          href="#showcase"
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--color-text-primary)",
            textDecoration: "underline",
            textDecorationThickness: 1,
            textUnderlineOffset: 4,
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
          }
        >
          See the work
        </a>
      </div>

      {/* Spec grid */}
      <div
        style={{
          paddingTop: 28,
          borderTop: "0.5px solid var(--color-border)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px 32px",
        }}
      >
        {SPECS.map((spec) => (
          <div key={spec.label}>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                color: "var(--color-text-muted)",
                letterSpacing: "0.08em",
                marginBottom: 5,
              }}
            >
              {spec.label}
            </div>
            <div
              style={{
                fontSize: spec.multiline ? 13 : 16,
                fontWeight: spec.multiline ? 400 : 500,
                color: "var(--color-text-primary)",
                letterSpacing: "-0.01em",
                lineHeight: spec.multiline ? 1.4 : 1.2,
                whiteSpace: "pre-line" as const,
              }}
            >
              {spec.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Hero root ─────────────────────────────────────────────────────────────────

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      style={{
        padding: "clamp(48px, 7vh, 80px) clamp(24px, 5vw, 60px) clamp(48px, 7vh, 80px)",
        maxWidth: 1320,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <LeftColumn />
          <ProjectDirectory />
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 5vw, 80px)",
            alignItems: "center",
          }}
        >
          <LeftColumn />
          <ProjectDirectory />
        </div>
      )}
    </section>
  );
}
