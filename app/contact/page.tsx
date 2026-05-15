"use client";

import { useState, useEffect } from "react";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

const BUSINESS_TYPES = [
  "Bakery / Food",
  "Restaurant / Café",
  "Salon / Spa",
  "Boutique / Retail",
  "Fitness / Wellness",
  "Professional Services",
  "Other",
];

const BUDGETS = [
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    businessType: "",
    description: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main style={{ background: "#141416", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 520 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <polyline points="5,13 11,19 21,7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 600, color: "#F5F5F7", letterSpacing: "-0.045em", lineHeight: 1.0, marginBottom: 20 }}>
            Got it, {form.name.split(" ")[0]}.
          </h1>
          <p style={{ fontSize: 18, color: "#8E8E93", lineHeight: 1.6, marginBottom: 40 }}>
            We'll reach out within one business day to schedule your free call.
          </p>
          <a href="/" style={{ fontSize: 15, fontWeight: 500, color: "#F5F5F7", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.25)", paddingBottom: 3 }}>
            ← Back to home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "100vh" }}>

      {/* ── Left — dark panel ──────────────────────────────────────────────── */}
      <div style={{
        width: isMobile ? "100%" : "45%",
        flexShrink: 0,
        background: "#141416",
        padding: isMobile ? "52px 28px 44px" : "64px 56px",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        position: isMobile ? "relative" : "sticky",
        top: 0,
        height: isMobile ? "auto" : "100vh",
        overflowY: "auto",
        boxSizing: "border-box",
      }}>

        {/* Top block */}
        <div>
          <span style={{
            fontFamily: MONO,
            fontSize: 11,
            color: "#6E6E73",
            letterSpacing: "0.12em",
            display: "block",
            marginBottom: 24,
            textTransform: "uppercase" as const,
          }}>
            Start a project
          </span>
          <h1 style={{
            fontSize: isMobile ? 38 : "clamp(38px, 3.8vw, 56px)",
            fontWeight: 700,
            color: "#F5F5F7",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            marginBottom: 20,
          }}>
            Let's build something people notice.
          </h1>
          <p style={{ fontSize: 17, color: "#8E8E93", lineHeight: 1.7 }}>
            Fill out the form — we'll get back to you within one business day to talk through your project. Free, no commitment.
          </p>
        </div>

        {/* Steps */}
        {!isMobile && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 36 }}>
            <span style={{ fontFamily: MONO, fontSize: 11, color: "#6E6E73", letterSpacing: "0.1em", display: "block", marginBottom: 28 }}>
              WHAT HAPPENS NEXT
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { step: "01", text: "We review your project and reach out to schedule a free 30-min call." },
                { step: "02", text: "On the call we agree on scope, timeline, and price — no surprises." },
                { step: "03", text: "We build. You launch. You own everything." },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: 20 }}>
                  <span style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    color: "#48484A",
                    letterSpacing: "0.06em",
                    flexShrink: 0,
                    paddingTop: 2,
                    width: 24,
                  }}>
                    {item.step}
                  </span>
                  <p style={{ fontSize: 15, color: "#8E8E93", lineHeight: 1.65, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isMobile && (
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#3A3A3C", letterSpacing: "0.1em", marginTop: "auto" }}>
            NORFOLK, VA · DINEXATECH
          </span>
        )}
      </div>

      {/* ── Right — form ──────────────────────────────────────────────────── */}
      <div style={{
        flex: 1,
        background: "#FAFAF9",
        padding: isMobile ? "44px 28px 64px" : "64px 56px",
        overflowY: "auto",
        boxSizing: "border-box",
      }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: 500, display: "flex", flexDirection: "column", gap: 40 }}>

          {/* Name */}
          <div>
            <label style={{ fontFamily: MONO, fontSize: 11, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>
              YOUR NAME
            </label>
            <input
              required
              type="text"
              placeholder="Jane Smith"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              style={{
                width: "100%", fontSize: 17, color: "#1D1D1F", background: "transparent",
                border: "none", borderBottom: "1.5px solid rgba(0,0,0,0.12)",
                padding: "12px 0", outline: "none", fontFamily: "inherit",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.12)")}
            />
          </div>

          {/* Email */}
          <div>
            <label style={{ fontFamily: MONO, fontSize: 11, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>
              EMAIL ADDRESS
            </label>
            <input
              required
              type="email"
              placeholder="jane@yourbusiness.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              style={{
                width: "100%", fontSize: 17, color: "#1D1D1F", background: "transparent",
                border: "none", borderBottom: "1.5px solid rgba(0,0,0,0.12)",
                padding: "12px 0", outline: "none", fontFamily: "inherit",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.12)")}
            />
          </div>

          {/* Business name */}
          <div>
            <label style={{ fontFamily: MONO, fontSize: 11, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>
              BUSINESS NAME
            </label>
            <input
              required
              type="text"
              placeholder="Your Business"
              value={form.business}
              onChange={(e) => handleChange("business", e.target.value)}
              style={{
                width: "100%", fontSize: 17, color: "#1D1D1F", background: "transparent",
                border: "none", borderBottom: "1.5px solid rgba(0,0,0,0.12)",
                padding: "12px 0", outline: "none", fontFamily: "inherit",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.12)")}
            />
          </div>

          {/* Business type */}
          <div>
            <label style={{ fontFamily: MONO, fontSize: 11, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 14 }}>
              TYPE OF BUSINESS
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {BUSINESS_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleChange("businessType", type)}
                  style={{
                    fontSize: 14,
                    padding: "9px 18px",
                    borderRadius: 24,
                    border: `1.5px solid ${form.businessType === type ? "#1D1D1F" : "rgba(0,0,0,0.12)"}`,
                    background: form.businessType === type ? "#1D1D1F" : "transparent",
                    color: form.businessType === type ? "#fff" : "#6E6E73",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    fontFamily: "inherit",
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label style={{ fontFamily: MONO, fontSize: 11, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>
              TELL US ABOUT YOUR PROJECT
            </label>
            <textarea
              required
              rows={4}
              placeholder="What does your business do, what do you need from a website, and what's your timeline?"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              style={{
                width: "100%", fontSize: 17, color: "#1D1D1F", background: "transparent",
                border: "none", borderBottom: "1.5px solid rgba(0,0,0,0.12)",
                padding: "12px 0", outline: "none", fontFamily: "inherit",
                resize: "none", lineHeight: 1.65, transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.12)")}
            />
          </div>

          {/* Budget */}
          <div>
            <label style={{ fontFamily: MONO, fontSize: 11, color: "#86868B", letterSpacing: "0.1em", display: "block", marginBottom: 14 }}>
              APPROXIMATE BUDGET
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {BUDGETS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => handleChange("budget", b)}
                  style={{
                    fontSize: 14,
                    padding: "9px 18px",
                    borderRadius: 24,
                    border: `1.5px solid ${form.budget === b ? "#1D1D1F" : "rgba(0,0,0,0.12)"}`,
                    background: form.budget === b ? "#1D1D1F" : "transparent",
                    color: form.budget === b ? "#fff" : "#6E6E73",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    fontFamily: "inherit",
                  }}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div style={{ paddingTop: 8 }}>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "18px 24px",
                fontSize: 16,
                fontWeight: 600,
                color: "#F5F5F7",
                background: "#141416",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                fontFamily: "inherit",
                letterSpacing: "-0.01em",
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.82")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              Send my project details →
            </button>
            <p style={{ fontSize: 12, color: "#C7C7CC", textAlign: "center", marginTop: 16, fontFamily: MONO, letterSpacing: "0.08em" }}>
              FREE CONSULTATION · NO COMMITMENT
            </p>
          </div>

        </form>
      </div>
    </main>
  );
}
