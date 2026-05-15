"use client";

import { useState, useEffect } from "react";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

const SPECS = [
  { label: "DELIVERY",  value: "5–7 days"    },
  { label: "OWNERSHIP", value: "100% yours"  },
  { label: "CLIENTS",   value: "Small businesses" },
  { label: "FROM",      value: "Norfolk, VA" },
];

// ── Floating Batten Bay mockup ────────────────────────────────────────────────

function HeroMockup({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      style={{
        borderRadius: 16,
        overflow: "hidden",
        boxShadow:
          "0 80px 120px -40px rgba(0,0,0,0.7), 0 40px 60px -20px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.06)",
        transform: isMobile ? "rotate(-1deg)" : "rotate(-1.5deg) translateY(-8px)",
        transformOrigin: "center bottom",
        willChange: "transform",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          height: isMobile ? 30 : 36,
          background: "#F0EDE8",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          gap: 5,
          position: "relative",
          borderBottom: "0.5px solid rgba(0,0,0,0.08)",
          flexShrink: 0,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: isMobile ? 6 : 8, height: isMobile ? 6 : 8, borderRadius: "50%", background: "#C8C4BC", flexShrink: 0 }} />
        ))}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: isMobile ? 9 : 11,
            fontFamily: MONO,
            color: "#8A857C",
            whiteSpace: "nowrap",
          }}
        >
          battenbaybakehouse.com
        </div>
      </div>

      {/* Mockup body */}
      <div style={{ background: "#FAF7F2", padding: isMobile ? 18 : 24 }}>
        {/* Inner nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: isMobile ? 18 : 24 }}>
          <span style={{ fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", fontSize: isMobile ? 14 : 16, color: "#2D1810" }}>
            Batten Bay
          </span>
          <div style={{ display: "flex", gap: isMobile ? 12 : 16 }}>
            {["Story", "Shop", "Order"].map((l) => (
              <span key={l} style={{ fontSize: isMobile ? 9 : 10, color: "#6B4423" }}>{l}</span>
            ))}
          </div>
        </div>

        {/* Hero row */}
        <div style={{ display: "flex", gap: isMobile ? 12 : 16, alignItems: "flex-start", marginBottom: isMobile ? 16 : 20 }}>
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: isMobile ? 28 : 38,
                fontFamily: "Georgia,'Times New Roman',serif",
                color: "#2D1810",
                letterSpacing: "-0.025em",
                lineHeight: 1.0,
                fontWeight: 400,
                marginBottom: isMobile ? 8 : 10,
              }}
            >
              Bread,<br />slowly.
            </h2>
            <p style={{ fontSize: isMobile ? 10 : 11, color: "#6B4423", lineHeight: 1.5, marginBottom: isMobile ? 12 : 14 }}>
              Wild yeast. Old methods.<br />Hampton Roads since 2024.
            </p>
            <button
              style={{
                background: "#2D1810",
                color: "#F7F1E8",
                fontSize: isMobile ? 9 : 10,
                padding: isMobile ? "7px 12px" : "8px 14px",
                borderRadius: 5,
                border: "none",
                cursor: "default",
                letterSpacing: "0.01em",
              }}
            >
              Shop this week →
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80"
            alt="Artisan bread"
            style={{
              width: isMobile ? 100 : 140,
              height: isMobile ? 80 : 110,
              objectFit: "cover",
              borderRadius: 8,
              flexShrink: 0,
              border: "0.5px solid rgba(0,0,0,0.06)",
            }}
            loading="lazy"
          />
        </div>

        {/* Product cards */}
        <div style={{ display: "flex", gap: isMobile ? 8 : 10 }}>
          {[
            { label: "Classic Sourdough", price: "$12" },
            { label: "Honey Wheat",       price: "$11" },
            { label: "Rosemary Focaccia", price: "$9"  },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                flex: 1,
                background: "#fff",
                borderRadius: 8,
                border: "0.5px solid rgba(0,0,0,0.06)",
                padding: isMobile ? 6 : 8,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&q=70"
                alt={item.label}
                style={{ width: "100%", height: isMobile ? 48 : 64, objectFit: "cover", borderRadius: 5 }}
                loading="lazy"
              />
              <p style={{ marginTop: isMobile ? 5 : 6, fontSize: isMobile ? 8 : 9, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", color: "#2D1810", lineHeight: 1.2 }}>
                {item.label}
              </p>
              <p style={{ fontSize: isMobile ? 8 : 9, color: "#6B4423", marginTop: 2 }}>{item.price}</p>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div style={{ marginTop: isMobile ? 14 : 16, paddingTop: isMobile ? 8 : 10, borderTop: "0.5px solid rgba(0,0,0,0.08)" }}>
          <span style={{ fontSize: 7, fontFamily: "monospace", color: "#6B4423", letterSpacing: "0.1em" }}>
            EST. 2024 · NORFOLK, VA
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Left column ───────────────────────────────────────────────────────────────

function LeftColumn({ isMobile }: { isMobile: boolean }) {
  return (
    <div>
      <h1
        style={{
          fontSize: isMobile ? "clamp(38px, 10vw, 52px)" : "clamp(52px, 5.5vw, 76px)",
          fontWeight: 600,
          lineHeight: isMobile ? 1.0 : 0.95,
          letterSpacing: "-0.045em",
          color: "#F5F5F7",
          marginBottom: isMobile ? 18 : 20,
        }}
      >
        Your business,
        <br />
        beautifully online.
      </h1>

      <p
        style={{
          fontSize: isMobile ? 16 : 17,
          color: "#A1A1A6",
          maxWidth: 400,
          lineHeight: 1.6,
          marginBottom: isMobile ? 28 : 32,
        }}
      >
        We build websites that make your business look as good as it actually is — done in a week, at a price that makes sense.
      </p>

      <div style={{ display: "inline-flex", gap: 16, alignItems: "center", marginBottom: isMobile ? 36 : 48 }}>
        <a
          href="/contact"
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#141416",
            background: "#F5F5F7",
            padding: "12px 22px",
            borderRadius: 6,
            textDecoration: "none",
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          Start a project →
        </a>
        <a
          href="#showcase"
          onClick={(e) => {
            const el = document.getElementById("showcase");
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#F5F5F7",
            textDecoration: "underline",
            textDecorationThickness: 1,
            textUnderlineOffset: 4,
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          See the work
        </a>
      </div>

      {/* Spec grid */}
      <div
        style={{
          paddingTop: isMobile ? 20 : 24,
          borderTop: "0.5px solid rgba(255,255,255,0.1)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: isMobile ? "20px 18px" : "18px 32px",
        }}
      >
        {SPECS.map((spec) => (
          <div key={spec.label}>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                color: "#6E6E73",
                letterSpacing: "0.08em",
                marginBottom: 4,
              }}
            >
              {spec.label}
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#F5F5F7",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
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
        background: "#141416",
        width: "100%",
      }}
    >
      <div
        style={{
          padding: isMobile
            ? "48px 26px 64px"
            : "clamp(56px, 8vh, 96px) clamp(24px, 5vw, 60px) clamp(64px, 9vh, 108px)",
          maxWidth: 1320,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
            <LeftColumn isMobile />
            <HeroMockup isMobile />
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(48px, 6vw, 96px)",
              alignItems: "center",
            }}
          >
            <LeftColumn isMobile={false} />
            <HeroMockup isMobile={false} />
          </div>
        )}
      </div>
    </section>
  );
}
