"use client";

import { useState, useEffect } from "react";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

type Step = {
  number: string;
  day: string;
  title: string;
  description: string;
  dotColor: string;
  footnote: string;
  dark?: boolean;
};

const STEPS: Step[] = [
  {
    number: "01",
    day: "DAY 1",
    title: "A short call.",
    description:
      "Thirty minutes. We learn about your business, your customers, and what you actually need.",
    dotColor: "#16A34A",
    footnote: "FREE · NO COMMITMENT",
  },
  {
    number: "02",
    day: "DAY 2",
    title: "A proposal.",
    description:
      "A clear scope, fixed price, and a real timeline. No hidden fees, no surprise scope creep.",
    dotColor: "var(--color-text-primary)",
    footnote: "FIXED SCOPE & PRICE",
  },
  {
    number: "03",
    day: "DAYS 3–6",
    title: "We build.",
    description:
      "Real code, written by us. Daily updates, mid-build review call, revisions handled in hours.",
    dotColor: "var(--color-text-primary)",
    footnote: "DAILY UPDATES",
  },
  {
    number: "04",
    day: "DAY 7",
    title: "You launch.",
    description:
      "Live on your domain. You own everything — code, content, customer data. We hand off and stay on call.",
    dotColor: "#16A34A",
    footnote: "100% YOURS",
    dark: true,
  },
];

function StepCard({ step, isMobile }: { step: Step; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);

  if (step.dark) {
    return (
      <div
        style={{
          background: "var(--color-text-primary)",
          borderRadius: 12,
          padding: isMobile ? 20 : 24,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 22,
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: "var(--color-background)",
              letterSpacing: "0.08em",
            }}
          >
            {step.number}
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 10,
              color: "var(--color-text-muted)",
              letterSpacing: "0.06em",
            }}
          >
            {step.day}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "var(--color-background)",
            letterSpacing: "-0.02em",
            marginBottom: 10,
            lineHeight: 1.2,
          }}
        >
          {step.title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 13,
            color: "#A1A1A6",
            lineHeight: 1.55,
            marginBottom: 18,
            flex: 1,
          }}
        >
          {step.description}
        </div>

        {/* Footnote */}
        <div
          style={{
            paddingTop: 14,
            borderTop: "0.5px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: step.dotColor,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: MONO,
              fontSize: 9,
              color: "#6E6E73",
              letterSpacing: "0.06em",
            }}
          >
            {step.footnote}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--color-background)",
        border: `0.5px solid ${hovered ? "rgba(0,0,0,0.18)" : "rgba(0,0,0,0.08)"}`,
        borderRadius: 12,
        padding: isMobile ? 20 : 24,
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s ease",
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 22,
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: 11,
            color: "var(--color-text-primary)",
            letterSpacing: "0.08em",
          }}
        >
          {step.number}
        </span>
        <span
          style={{
            fontFamily: MONO,
            fontSize: 10,
            color: "var(--color-text-muted)",
            letterSpacing: "0.06em",
          }}
        >
          {step.day}
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 18,
          fontWeight: 500,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: 10,
          lineHeight: 1.2,
        }}
      >
        {step.title}
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: 13,
          color: "var(--color-text-secondary)",
          lineHeight: 1.55,
          marginBottom: 18,
          flex: 1,
        }}
      >
        {step.description}
      </div>

      {/* Footnote */}
      <div
        style={{
          paddingTop: 14,
          borderTop: "0.5px solid rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: step.dotColor,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: MONO,
            fontSize: 9,
            color: "var(--color-text-muted)",
            letterSpacing: "0.06em",
          }}
        >
          {step.footnote}
        </span>
      </div>
    </div>
  );
}

export function Process() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth < 1024);
    };
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const cols = isMobile ? 1 : isTablet ? 2 : 4;

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 28%, #F5F5F7 72%, #FFFFFF 100%)",
        padding: `clamp(60px, 8vw, 100px) clamp(24px, 5vw, 50px)`,
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        {/* Editorial header */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "baseline",
            gap: isMobile ? 6 : 0,
            paddingBottom: 14,
            borderBottom: "1px solid var(--color-text-primary)",
            marginBottom: 50,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            What working with us looks like.
          </h2>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: "var(--color-text-muted)",
              letterSpacing: "0.06em",
              opacity: isMobile ? 0.5 : 1,
              flexShrink: 0,
            }}
          >
            04 STEPS · 5–7 DAYS
          </span>
        </div>

        {/* Step cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: 16,
          }}
        >
          {STEPS.map((step) => (
            <StepCard key={step.number} step={step} isMobile={isMobile} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a
            href="#contact"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "var(--color-text-primary)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-text-primary)",
              paddingBottom: 2,
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
            }
          >
            Start your project →
          </a>
        </div>

      </div>
    </section>
  );
}
