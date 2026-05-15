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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontSize: 16,
    color: "#1D1D1F",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(0,0,0,0.14)",
    padding: "12px 0",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: MONO,
    fontSize: 11,
    color: "#6E6E73",
    letterSpacing: "0.08em",
    display: "block",
    marginBottom: 10,
  };

  if (submitted) {
    return (
      <main style={{ background: "#141416", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 480 }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <polyline points="4,11 9,16 18,6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, color: "#F5F5F7", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 16 }}>
            Got it, {form.name.split(" ")[0]}.
          </h1>
          <p style={{ fontSize: 16, color: "#A1A1A6", lineHeight: 1.65, marginBottom: 36 }}>
            We'll review your project and reach out within one business day to schedule a free call.
          </p>
          <a
            href="/"
            style={{ fontSize: 14, fontWeight: 500, color: "#F5F5F7", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2 }}
          >
            ← Back to home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "100vh" }}>

      {/* ── Left panel — dark ───────────────────────────────────────────────── */}
      <div style={{
        width: isMobile ? "100%" : "44%",
        flexShrink: 0,
        background: "#141416",
        padding: isMobile
          ? "48px 28px 40px"
          : "clamp(56px, 8vh, 80px) clamp(40px, 5vw, 64px)",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        position: isMobile ? "relative" : "sticky",
        top: 0,
        height: isMobile ? "auto" : "100vh",
        overflowY: "auto",
      }}>

        <div>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#6E6E73", letterSpacing: "0.1em", display: "block", marginBottom: 20 }}>
            START A PROJECT
          </span>
          <h1 style={{
            fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 600,
            color: "#F5F5F7",
            letterSpacing: "-0.045em",
            lineHeight: 1.0,
            marginBottom: 16,
          }}>
            Let's build something people notice.
          </h1>
          <p style={{ fontSize: 15, color: "#8E8E93", lineHeight: 1.65 }}>
            Fill out the form and we'll get back to you within one business day — free, no commitment.
          </p>
        </div>

        {/* What happens next — hidden on mobile */}
        {!isMobile && (
          <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.08)", paddingTop: 28 }}>
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#6E6E73", letterSpacing: "0.08em", display: "block", marginBottom: 20 }}>
              WHAT HAPPENS NEXT
            </span>
            {[
              { step: "01", text: "We review your project and reach out to schedule a free 30-min call." },
              { step: "02", text: "On the call we nail down scope, timeline, and price — no surprises." },
              { step: "03", text: "We build. You launch. You own everything." },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#48484A", letterSpacing: "0.06em", flexShrink: 0, paddingTop: 2 }}>
                  {item.step}
                </span>
                <p style={{ fontSize: 14, color: "#8E8E93", lineHeight: 1.65, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {!isMobile && (
          <span style={{ fontFamily: MONO, fontSize: 9, color: "#48484A", letterSpacing: "0.1em", marginTop: "auto" }}>
            NORFOLK, VA · DINEXATECH
          </span>
        )}
      </div>

      {/* ── Right panel — light / form ──────────────────────────────────────── */}
      <div style={{
        flex: 1,
        background: "#FAFAF9",
        padding: isMobile
          ? "40px 28px 60px"
          : "clamp(56px, 8vh, 80px) clamp(40px, 5vw, 64px)",
        overflowY: "auto",
        display: "flex",
        alignItems: "flex-start",
      }}>
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 480, display: "flex", flexDirection: "column", gap: 32 }}>

          {/* Name */}
          <div>
            <label style={labelStyle}>YOUR NAME</label>
            <input
              required
              type="text"
              placeholder="Jane Smith"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.14)")}
            />
          </div>

          {/* Email */}
          <div>
            <label style={labelStyle}>EMAIL ADDRESS</label>
            <input
              required
              type="email"
              placeholder="jane@yourbusiness.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.14)")}
            />
          </div>

          {/* Business name */}
          <div>
            <label style={labelStyle}>BUSINESS NAME</label>
            <input
              required
              type="text"
              placeholder="Your Business"
              value={form.business}
              onChange={(e) => handleChange("business", e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.14)")}
            />
          </div>

          {/* Business type */}
          <div>
            <label style={labelStyle}>TYPE OF BUSINESS</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
              {BUSINESS_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleChange("businessType", type)}
                  style={{
                    fontSize: 13,
                    padding: "7px 14px",
                    borderRadius: 20,
                    border: `1px solid ${form.businessType === type ? "#1D1D1F" : "rgba(0,0,0,0.12)"}`,
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

          {/* Project description */}
          <div>
            <label style={labelStyle}>TELL US ABOUT YOUR PROJECT</label>
            <textarea
              required
              rows={4}
              placeholder="What does your business do, what do you need from a website, and what's your timeline?"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.14)")}
            />
          </div>

          {/* Budget */}
          <div>
            <label style={labelStyle}>APPROXIMATE BUDGET</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
              {BUDGETS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => handleChange("budget", b)}
                  style={{
                    fontSize: 13,
                    padding: "7px 14px",
                    borderRadius: 20,
                    border: `1px solid ${form.budget === b ? "#1D1D1F" : "rgba(0,0,0,0.12)"}`,
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
          <div style={{ paddingTop: 4 }}>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "16px 24px",
                fontSize: 15,
                fontWeight: 500,
                color: "#F5F5F7",
                background: "#141416",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: "inherit",
                letterSpacing: "-0.01em",
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              Send my project details →
            </button>
            <p style={{ fontSize: 11, color: "#C7C7CC", textAlign: "center", marginTop: 14, fontFamily: MONO, letterSpacing: "0.06em" }}>
              FREE CONSULTATION · NO COMMITMENT
            </p>
          </div>

        </form>
      </div>
    </main>
  );
}
