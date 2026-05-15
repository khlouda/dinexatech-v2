"use client";

import { useState, useEffect } from "react";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

const testimonials = [
  {
    quote: "I was nervous about building a website — I had no idea where to start. DinexaTech made it easy. They handled everything, and the site launched in less than a week. I started getting online orders the same day.",
    name: "Carla M.",
    business: "Batten Bay Bakehouse",
    category: "BAKERY · NORFOLK, VA",
  },
  {
    quote: "Our old site was embarrassing. This one actually reflects what we do. Customers comment on it all the time, and bookings have picked up noticeably since launch.",
    name: "Maya T.",
    business: "Stillwood Salon",
    category: "SALON · NORFOLK, VA",
  },
  {
    quote: "I didn't think a small shop like mine could afford something this nice. The price was fair, the turnaround was fast, and I finally feel like my online presence matches what I put into my products.",
    name: "Jordan R.",
    business: "Forge & Bloom",
    category: "BOUTIQUE · USA",
  },
];

export function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const t = testimonials[active];

  return (
    <section
      style={{
        background: "#141416",
        padding: "clamp(60px, 8vw, 100px) clamp(24px, 5vw, 60px)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          paddingBottom: 12,
          borderBottom: "0.5px solid rgba(255,255,255,0.08)",
          marginBottom: isMobile ? 40 : 64,
          flexWrap: "wrap",
          gap: 8,
        }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#6E6E73", letterSpacing: "0.1em" }}>
            WHAT CLIENTS SAY
          </span>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#6E6E73", letterSpacing: "0.06em" }}>
            0{active + 1} / 0{testimonials.length}
          </span>
        </div>

        {/* Quote */}
        <div style={{ maxWidth: 860, marginBottom: isMobile ? 40 : 56 }}>
          <p style={{
            fontSize: isMobile ? 22 : "clamp(24px, 3vw, 36px)",
            fontWeight: 500,
            color: "#F5F5F7",
            letterSpacing: "-0.03em",
            lineHeight: 1.35,
            marginBottom: 32,
          }}>
            "{t.quote}"
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 600,
                color: "#F5F5F7",
              }}
            >
              {t.name[0]}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "#F5F5F7", letterSpacing: "-0.01em" }}>
                {t.name}
              </div>
              <div style={{ fontSize: 12, color: "#6E6E73", marginTop: 2 }}>
                {t.business}
              </div>
            </div>
            <div style={{
              marginLeft: "auto",
              fontFamily: MONO,
              fontSize: 9,
              color: "#48484A",
              letterSpacing: "0.08em",
            }}>
              {t.category}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: "flex",
          gap: 8,
          borderTop: "0.5px solid rgba(255,255,255,0.08)",
          paddingTop: 24,
        }}>
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flex: 1,
                padding: "12px 16px",
                background: "none",
                border: "none",
                borderTop: `2px solid ${i === active ? "#F5F5F7" : "transparent"}`,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s ease",
              }}
            >
              <div style={{
                fontSize: isMobile ? 12 : 13,
                fontWeight: i === active ? 500 : 400,
                color: i === active ? "#F5F5F7" : "#48484A",
                letterSpacing: "-0.01em",
                transition: "color 0.15s ease",
              }}>
                {item.name}
              </div>
              {!isMobile && (
                <div style={{
                  fontSize: 11,
                  color: i === active ? "#6E6E73" : "#3A3A3C",
                  marginTop: 3,
                  transition: "color 0.15s ease",
                }}>
                  {item.business}
                </div>
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
