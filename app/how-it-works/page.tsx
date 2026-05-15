"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

const STEPS = [
  {
    number: "01",
    day: "DAY 1",
    title: "A short call.",
    duration: "30 minutes",
    cost: "FREE",
    description:
      "We hop on a call and learn about your business. What you do, who you serve, what's working, what's broken. No pitch, no pressure — we just need enough context to give you a real proposal.",
    deliver: "We bring questions and listen.",
    fromYou: "30 minutes of your time.",
    accent: "#16A34A",
  },
  {
    number: "02",
    day: "DAY 2",
    title: "A proposal.",
    duration: "Within 24 hours",
    cost: "FREE",
    description:
      "We send a clear, written proposal: scope, fixed price, timeline, and what's included. No vague bundles, no \"contact us for pricing.\" If anything is unclear, we rewrite it until it isn't.",
    deliver: "Written scope + fixed price + delivery date.",
    fromYou: "Approval to start (or feedback if anything's off).",
    accent: "#1D1D1F",
  },
  {
    number: "03",
    day: "DAYS 3–6",
    title: "We build.",
    duration: "3–4 days",
    cost: "Per proposal",
    description:
      "Real code, written by us. Daily updates so you always know what's happening. A mid-build review call to make sure we're on the right track. Revisions handled in hours, not days.",
    deliver: "Daily build updates, mid-build review, working preview link.",
    fromYou: "Logo, copy, photos (or we work with placeholders and swap later).",
    accent: "#1D1D1F",
  },
  {
    number: "04",
    day: "DAY 7",
    title: "You launch.",
    duration: "Same day",
    cost: "Included",
    description:
      "Site goes live on your domain. You own everything — code, content, customer data, the whole thing. We help with DNS, set up your email, and stay on call for the first 30 days in case anything needs adjusting.",
    deliver: "Live site + DNS setup + 30-day support.",
    fromYou: "Domain access (or we'll buy one for you).",
    accent: "#16A34A",
  },
];

const INCLUDED = [
  { label: "Custom design", body: "Designed for your business — not pulled from a template library." },
  { label: "Mobile-first build", body: "Every page works perfectly on phones, tablets, and desktops." },
  { label: "Hosting setup", body: "We deploy to Vercel and configure your domain. Fast, free, reliable." },
  { label: "Performance + SEO", body: "Real Lighthouse scores, proper meta tags, structured data." },
  { label: "Contact + form handling", body: "Submissions go straight to your inbox — no third-party fees." },
  { label: "30-day post-launch support", body: "Tweaks, fixes, content swaps — included for the first month." },
];

const FAQ = [
  {
    q: "What if my site needs more than 7 days?",
    a: "Most don't. The 5–7 day timeline covers a polished marketing site with up to ~6 pages, contact form, and standard integrations. If you need a custom booking system, e-commerce with hundreds of products, or a custom dashboard, we'll scope that separately and quote it honestly.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on scope, but most projects land between $1,500 and $5,000. We give you a fixed price after the first call — no hourly billing, no surprise invoices.",
  },
  {
    q: "Do you charge a monthly fee?",
    a: "No. You pay once, you own it. Hosting on Vercel is free for sites at your scale. The only ongoing cost is your domain (~$12/year) and your email (your choice — Gmail, ProtonMail, etc.).",
  },
  {
    q: "What if I want changes after launch?",
    a: "First 30 days are included. After that, small changes are free if they take less than an hour. Bigger changes we quote per project.",
  },
  {
    q: "Can I update the site myself later?",
    a: "Yes. You own the code. If you (or another developer) want to make changes, the codebase is clean, modern, and well-organized. We can also handle ongoing updates if you'd rather not touch it.",
  },
  {
    q: "What if I don't like what you build?",
    a: "We do a mid-build review call on day 4 specifically to catch this. If we're heading in the wrong direction, we course-correct then — when it's still cheap. A full revision after launch is rare but we'll work with you to make it right.",
  },
];

export default function HowItWorksPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{
        background: "#141416",
        padding: isMobile ? "56px 26px 64px" : "clamp(72px, 10vh, 110px) clamp(40px, 6vw, 80px) clamp(80px, 12vh, 120px)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MONO, fontSize: 11, color: "#6E6E73", letterSpacing: "0.12em", display: "block", marginBottom: 24 }}>
            HOW IT WORKS
          </span>
          <h1 style={{
            fontSize: isMobile ? "clamp(36px, 9vw, 48px)" : "clamp(48px, 6vw, 76px)",
            fontWeight: 600,
            color: "#F5F5F7",
            letterSpacing: "-0.045em",
            lineHeight: isMobile ? 1.0 : 0.98,
            marginBottom: isMobile ? 22 : 28,
            maxWidth: 820,
          }}>
            From first call to live site in one week.
          </h1>
          <p style={{
            fontSize: isMobile ? 16 : 18,
            color: "#A1A1A6",
            lineHeight: 1.65,
            maxWidth: 620,
            marginBottom: isMobile ? 32 : 40,
          }}>
            No discovery sprints, no quarterly roadmaps, no agency runaround. Just a focused process designed to get a real, working site into your customers' hands fast.
          </p>

          {/* Quick stats */}
          <div style={{
            paddingTop: isMobile ? 22 : 28,
            borderTop: "0.5px solid rgba(255,255,255,0.1)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: isMobile ? "20px 24px" : 32,
          }}>
            {[
              { label: "TIMELINE",  value: "5–7 days" },
              { label: "PRICING",   value: "Fixed, upfront" },
              { label: "OWNERSHIP", value: "100% yours" },
              { label: "SUPPORT",   value: "30 days included" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: MONO, fontSize: 10, color: "#6E6E73", letterSpacing: "0.08em", marginBottom: 6 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, color: "#F5F5F7", letterSpacing: "-0.01em" }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────────── */}
      <section style={{
        padding: isMobile ? "64px 26px" : "clamp(80px, 10vw, 120px) clamp(40px, 6vw, 80px)",
        background: "#fff",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingBottom: 14,
            borderBottom: "1px solid #1D1D1F",
            marginBottom: isMobile ? 44 : 64,
            flexWrap: "wrap",
            gap: 8,
          }}>
            <h2 style={{
              fontSize: isMobile ? "clamp(26px, 6vw, 32px)" : "clamp(28px, 3vw, 40px)",
              fontWeight: 600,
              color: "#1D1D1F",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: 0,
            }}>
              The week, day by day.
            </h2>
            <span style={{ fontFamily: MONO, fontSize: 11, color: "#86868B", letterSpacing: "0.06em" }}>
              04 STEPS
            </span>
          </div>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 40 : 64 }}>
            {STEPS.map((step, i) => (
              <div key={step.number} style={{
                display: isMobile ? "block" : "grid",
                gridTemplateColumns: "180px 1fr",
                gap: isMobile ? 0 : 56,
                paddingBottom: isMobile ? 36 : 56,
                borderBottom: i < STEPS.length - 1 ? "0.5px solid rgba(0,0,0,0.08)" : "none",
              }}>
                {/* Left meta column */}
                <div style={{ marginBottom: isMobile ? 18 : 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: isMobile ? 10 : 14 }}>
                    <span style={{ fontFamily: MONO, fontSize: 12, color: "#1D1D1F", letterSpacing: "0.04em" }}>
                      {step.number}
                    </span>
                    <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.08em" }}>
                      {step.day}
                    </span>
                  </div>
                  {!isMobile && (
                    <>
                      <div style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.08em", marginBottom: 4 }}>
                        DURATION
                      </div>
                      <div style={{ fontSize: 13, color: "#1D1D1F", marginBottom: 12 }}>
                        {step.duration}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: step.accent, flexShrink: 0 }} />
                        <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.08em" }}>
                          {step.cost}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Right content */}
                <div>
                  <h3 style={{
                    fontSize: isMobile ? 24 : "clamp(24px, 2.5vw, 30px)",
                    fontWeight: 600,
                    color: "#1D1D1F",
                    letterSpacing: "-0.035em",
                    lineHeight: 1.1,
                    marginBottom: isMobile ? 12 : 16,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: 15,
                    color: "#515154",
                    lineHeight: 1.7,
                    marginBottom: isMobile ? 20 : 24,
                  }}>
                    {step.description}
                  </p>

                  {/* What we deliver / What we need */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: isMobile ? 14 : 24,
                    paddingTop: 16,
                    borderTop: "0.5px solid rgba(0,0,0,0.08)",
                  }}>
                    <div>
                      <div style={{ fontFamily: MONO, fontSize: 9, color: "#86868B", letterSpacing: "0.1em", marginBottom: 6 }}>
                        WHAT WE DELIVER
                      </div>
                      <div style={{ fontSize: 13, color: "#1D1D1F", lineHeight: 1.55 }}>
                        {step.deliver}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontFamily: MONO, fontSize: 9, color: "#86868B", letterSpacing: "0.1em", marginBottom: 6 }}>
                        WHAT WE NEED FROM YOU
                      </div>
                      <div style={{ fontSize: 13, color: "#1D1D1F", lineHeight: 1.55 }}>
                        {step.fromYou}
                      </div>
                    </div>
                  </div>

                  {isMobile && (
                    <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: step.accent, flexShrink: 0 }} />
                      <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.08em" }}>
                        {step.duration} · {step.cost}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ───────────────────────────────────────────────── */}
      <section style={{
        padding: isMobile ? "56px 26px" : "clamp(72px, 10vw, 110px) clamp(40px, 6vw, 80px)",
        background: "#F5F5F7",
        borderTop: "0.5px solid rgba(0,0,0,0.06)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 18 }}>
            WHAT'S INCLUDED
          </span>
          <h2 style={{
            fontSize: isMobile ? "clamp(26px, 6vw, 32px)" : "clamp(28px, 3vw, 40px)",
            fontWeight: 600,
            color: "#1D1D1F",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: isMobile ? 36 : 48,
            maxWidth: 700,
          }}>
            Everything you need. Nothing you don't.
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
            gap: isMobile ? 0 : 1,
            background: isMobile ? "transparent" : "rgba(0,0,0,0.06)",
            border: isMobile ? "none" : "0.5px solid rgba(0,0,0,0.06)",
            borderRadius: isMobile ? 0 : 12,
            overflow: "hidden",
          }}>
            {INCLUDED.map((item, i) => (
              <div key={item.label} style={{
                background: "#fff",
                padding: isMobile ? "22px 0" : 26,
                borderTop: isMobile && i > 0 ? "0.5px solid rgba(0,0,0,0.08)" : "none",
              }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#1D1D1F", letterSpacing: "-0.02em", marginBottom: 8 }}>
                  {item.label}
                </div>
                <p style={{ fontSize: 13, color: "#6E6E73", lineHeight: 1.65, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{
        padding: isMobile ? "64px 26px" : "clamp(80px, 10vw, 120px) clamp(40px, 6vw, 80px)",
        background: "#fff",
      }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 18 }}>
            QUESTIONS WE GET A LOT
          </span>
          <h2 style={{
            fontSize: isMobile ? "clamp(26px, 6vw, 32px)" : "clamp(28px, 3vw, 40px)",
            fontWeight: 600,
            color: "#1D1D1F",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: isMobile ? 32 : 44,
          }}>
            The honest answers.
          </h2>
          <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.12)" }}>
            {FAQ.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={i} style={{ borderBottom: "0.5px solid rgba(0,0,0,0.12)" }}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: isMobile ? "18px 0" : "22px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "inherit",
                    }}
                  >
                    <span style={{
                      fontSize: isMobile ? 15 : 17,
                      fontWeight: 500,
                      color: "#1D1D1F",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.35,
                    }}>
                      {item.q}
                    </span>
                    <span style={{
                      flexShrink: 0,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: "0.5px solid rgba(0,0,0,0.2)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: open ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1V9M1 5H9" stroke="#1D1D1F" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div style={{
                    maxHeight: open ? 400 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease, padding 0.2s ease",
                    paddingBottom: open ? (isMobile ? 22 : 26) : 0,
                  }}>
                    <p style={{
                      fontSize: 14,
                      color: "#515154",
                      lineHeight: 1.7,
                      margin: 0,
                      maxWidth: 640,
                    }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{
        padding: isMobile ? "56px 26px" : "clamp(64px, 8vw, 96px) clamp(40px, 6vw, 80px)",
        background: "#141416",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: 28,
        }}>
          <div>
            <h2 style={{
              fontSize: isMobile ? "clamp(26px, 6vw, 32px)" : "clamp(28px, 3vw, 40px)",
              fontWeight: 700,
              color: "#F5F5F7",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: 12,
              maxWidth: 540,
            }}>
              Ready to start your week?
            </h2>
            <p style={{ fontSize: 16, color: "#8E8E93", lineHeight: 1.6, margin: 0, maxWidth: 480 }}>
              Tell us about your business — we'll send a proposal within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              flexShrink: 0,
              fontSize: 15,
              fontWeight: 600,
              color: "#141416",
              background: "#F5F5F7",
              padding: "14px 26px",
              borderRadius: 8,
              textDecoration: "none",
              whiteSpace: "nowrap" as const,
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            Start a project →
          </Link>
        </div>
      </section>

    </main>
  );
}
