"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

const VALUES = [
  {
    label: "Honest work",
    body: "Fixed price, fixed scope, no surprises. We tell you exactly what you're getting before we start — and we deliver it.",
  },
  {
    label: "Speed without shortcuts",
    body: "5–7 days isn't a gimmick. It's the result of a focused process and not wasting your time or ours.",
  },
  {
    label: "You own everything",
    body: "Code, content, domain, customer data — all yours. No lock-in, no monthly platform fees, no asking permission.",
  },
  {
    label: "Built for real businesses",
    body: "Not startups, not enterprises. Bakeries, salons, restaurants, boutiques — businesses with real customers who walk through a real door.",
  },
];

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div style={{
        background: "#141416",
        padding: isMobile
          ? "56px 28px 64px"
          : "clamp(64px, 10vh, 100px) clamp(40px, 6vw, 80px)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MONO, fontSize: 11, color: "#6E6E73", letterSpacing: "0.12em", display: "block", marginBottom: 24 }}>
            ABOUT
          </span>
          <h1 style={{
            fontSize: isMobile ? 40 : "clamp(44px, 6vw, 72px)",
            fontWeight: 700,
            color: "#F5F5F7",
            letterSpacing: "-0.045em",
            lineHeight: 1.0,
            marginBottom: 28,
            maxWidth: 760,
          }}>
            Two people who think small businesses deserve better.
          </h1>
          <p style={{
            fontSize: isMobile ? 16 : 18,
            color: "#8E8E93",
            lineHeight: 1.7,
            maxWidth: 580,
          }}>
            DinexaTech is Amr and Khaled — based in Norfolk, VA. We build websites for the businesses that make a city worth living in.
          </p>
        </div>
      </div>

      {/* ── Story ─────────────────────────────────────────────────────────── */}
      <div style={{
        padding: isMobile
          ? "56px 28px"
          : "clamp(64px, 8vw, 96px) clamp(40px, 6vw, 80px)",
        borderBottom: "0.5px solid rgba(0,0,0,0.08)",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: isMobile ? "block" : "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(48px, 8vw, 120px)",
          alignItems: "start",
        }}>
          <div>
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 20 }}>
              THE STORY
            </span>
            <h2 style={{
              fontSize: isMobile ? 28 : "clamp(28px, 3vw, 38px)",
              fontWeight: 600,
              color: "#1D1D1F",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: isMobile ? 32 : 0,
            }}>
              We got tired of seeing great businesses with terrible websites.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontSize: 16, color: "#6E6E73", lineHeight: 1.75, margin: 0 }}>
              Every week we'd walk into a local bakery, salon, or shop — great product, real craft, loyal customers — and then look them up online and find something embarrassing. A site that hadn't been touched in years, or worse, no site at all.
            </p>
            <p style={{ fontSize: 16, color: "#6E6E73", lineHeight: 1.75, margin: 0 }}>
              The standard options didn't make sense for them. Agencies were too expensive. DIY builders took too long and looked it. Freelancers were unreliable. So we built a better option.
            </p>
            <p style={{ fontSize: 16, color: "#6E6E73", lineHeight: 1.75, margin: 0 }}>
              A fixed process. A fair price. A real website — done in a week, built to last, fully owned by you.
            </p>
          </div>
        </div>
      </div>

      {/* ── Team ──────────────────────────────────────────────────────────── */}
      <div style={{
        padding: isMobile
          ? "56px 28px"
          : "clamp(64px, 8vw, 96px) clamp(40px, 6vw, 80px)",
        background: "#F5F5F7",
        borderBottom: "0.5px solid rgba(0,0,0,0.06)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 36 }}>
            THE TEAM
          </span>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 28 : 20,
          }}>
            {[
              {
                initial: "A",
                name: "Amr",
                role: "Design & Strategy",
                bio: "Focused on how things look and how they work together. Amr makes sure every site we ship feels intentional — not just functional.",
              },
              {
                initial: "K",
                name: "Khaled",
                role: "Development & Delivery",
                bio: "Khaled builds what Amr designs and makes sure it ships on time, works on every device, and actually performs in the real world.",
              },
            ].map((person) => (
              <div
                key={person.name}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: isMobile ? 24 : 32,
                  border: "0.5px solid rgba(0,0,0,0.06)",
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#141416",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#F5F5F7",
                  marginBottom: 20,
                  letterSpacing: "-0.02em",
                }}>
                  {person.initial}
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#1D1D1F", letterSpacing: "-0.03em", marginBottom: 4 }}>
                  {person.name}
                </div>
                <div style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.08em", marginBottom: 16 }}>
                  {person.role}
                </div>
                <p style={{ fontSize: 14, color: "#6E6E73", lineHeight: 1.7, margin: 0 }}>
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Values ────────────────────────────────────────────────────────── */}
      <div style={{
        padding: isMobile
          ? "56px 28px"
          : "clamp(64px, 8vw, 96px) clamp(40px, 6vw, 80px)",
        borderBottom: "0.5px solid rgba(0,0,0,0.08)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 36 }}>
            HOW WE WORK
          </span>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 0 : 0,
          }}>
            {VALUES.map((v, i) => (
              <div
                key={v.label}
                style={{
                  padding: isMobile ? "24px 0" : "28px 32px 28px 0",
                  borderTop: "0.5px solid rgba(0,0,0,0.08)",
                  borderRight: (!isMobile && i % 2 === 0) ? "0.5px solid rgba(0,0,0,0.08)" : "none",
                  paddingRight: (!isMobile && i % 2 === 0) ? 48 : 0,
                  paddingLeft: (!isMobile && i % 2 === 1) ? 48 : 0,
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 600, color: "#1D1D1F", letterSpacing: "-0.02em", marginBottom: 10 }}>
                  {v.label}
                </div>
                <p style={{ fontSize: 14, color: "#6E6E73", lineHeight: 1.7, margin: 0 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <div style={{
        padding: isMobile
          ? "56px 28px"
          : "clamp(64px, 8vw, 96px) clamp(40px, 6vw, 80px)",
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
              fontSize: isMobile ? 28 : "clamp(28px, 3vw, 40px)",
              fontWeight: 700,
              color: "#F5F5F7",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: 12,
            }}>
              Ready to get started?
            </h2>
            <p style={{ fontSize: 16, color: "#8E8E93", lineHeight: 1.6, margin: 0 }}>
              Tell us about your business — we'll take it from there.
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
      </div>

    </main>
  );
}
