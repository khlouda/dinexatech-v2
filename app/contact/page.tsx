"use client";

import { useState, useEffect } from "react";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

const BUSINESS_TYPES = [
  "Bakery / Food", "Restaurant / Café", "Salon / Spa",
  "Boutique / Retail", "Fitness / Wellness", "Professional Services", "Other",
];

const BUDGETS = [
  "Under $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000+", "Not sure yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", business: "", businessType: "", description: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  function set(field: string, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("https://formspree.io/f/xyzerkqp", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  }

  const field: React.CSSProperties = {
    width: "100%", fontSize: 15, color: "#1D1D1F", background: "transparent",
    border: "none", borderBottom: "1.5px solid rgba(0,0,0,0.13)",
    padding: "10px 0", outline: "none", fontFamily: "inherit",
    transition: "border-color 0.2s ease",
  };

  const lbl: React.CSSProperties = {
    fontFamily: MONO, fontSize: 10, color: "#86868B",
    letterSpacing: "0.1em", display: "block", marginBottom: 8,
  };

  if (submitted) {
    return (
      <main style={{ background: "#141416", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 480 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polyline points="4,12 10,18 20,6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 style={{ fontSize: "clamp(34px, 5vw, 52px)", fontWeight: 700, color: "#F5F5F7", letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: 18 }}>
            Got it, {form.name.split(" ")[0]}.
          </h1>
          <p style={{ fontSize: 17, color: "#A1A1A6", lineHeight: 1.65, marginBottom: 36 }}>
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

      {/* ── Left — dark ─────────────────────────────────────────────────────── */}
      <div style={{
        width: isMobile ? "100%" : "44%",
        flexShrink: 0,
        background: "#141416",
        padding: isMobile ? "52px 28px 44px" : "60px 52px",
        display: "flex",
        flexDirection: "column",
        gap: 36,
        position: isMobile ? "relative" : "sticky",
        top: 0,
        height: isMobile ? "auto" : "100vh",
        boxSizing: "border-box",
      }}>

        <div>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#6E6E73", letterSpacing: "0.12em", display: "block", marginBottom: 22 }}>
            START A PROJECT
          </span>
          <h1 style={{
            fontSize: isMobile ? 36 : "clamp(36px, 3.6vw, 52px)",
            fontWeight: 700,
            color: "#F5F5F7",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            marginBottom: 18,
          }}>
            Let's build something people notice.
          </h1>
          <p style={{ fontSize: 16, color: "#A1A1A6", lineHeight: 1.7 }}>
            Fill out the form — we'll get back within one business day. Free, no commitment.
          </p>
        </div>

        {!isMobile && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 32 }}>
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#6E6E73", letterSpacing: "0.1em", display: "block", marginBottom: 26 }}>
              WHAT HAPPENS NEXT
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {[
                { n: "01", t: "We review your project and reach out to schedule a free 30-min call." },
                { n: "02", t: "On the call we agree on scope, timeline, and price — no surprises." },
                { n: "03", t: "We build. You launch. You own everything." },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: 18 }}>
                  <span style={{ fontFamily: MONO, fontSize: 10, color: "#6E6E73", letterSpacing: "0.06em", flexShrink: 0, paddingTop: 2, width: 22 }}>
                    {item.n}
                  </span>
                  <p style={{ fontSize: 15, color: "#A1A1A6", lineHeight: 1.65, margin: 0 }}>{item.t}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isMobile && (
          <span style={{ fontFamily: MONO, fontSize: 9, color: "#48484A", letterSpacing: "0.1em", marginTop: "auto" }}>
            NORFOLK, VA · DINEXATECH
          </span>
        )}
      </div>

      {/* ── Right — form (no scroll) ─────────────────────────────────────── */}
      <div style={{
        flex: 1,
        background: "#F5F5F7",
        padding: isMobile ? "44px 28px 56px" : "60px 52px",
        display: "flex",
        alignItems: isMobile ? "flex-start" : "center",
        boxSizing: "border-box",
        overflowY: "auto",
      }}>
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 480, display: "flex", flexDirection: "column", gap: 22 }}>

          {/* Name + Email — side by side on desktop, stacked on mobile */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 22 : 20 }}>
            <div>
              <label style={lbl}>YOUR NAME</label>
              <input required type="text" placeholder="Jane Smith" value={form.name} onChange={(e) => set("name", e.target.value)} style={field}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.13)")} />
            </div>
            <div>
              <label style={lbl}>EMAIL</label>
              <input required type="email" placeholder="jane@business.com" value={form.email} onChange={(e) => set("email", e.target.value)} style={field}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.13)")} />
            </div>
          </div>

          {/* Business name */}
          <div>
            <label style={lbl}>BUSINESS NAME</label>
            <input required type="text" placeholder="Your Business" value={form.business} onChange={(e) => set("business", e.target.value)} style={field}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.13)")} />
          </div>

          {/* Business type */}
          <div>
            <label style={lbl}>TYPE OF BUSINESS</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 4 }}>
              {BUSINESS_TYPES.map((type) => (
                <button key={type} type="button" onClick={() => set("businessType", type)}
                  style={{
                    fontSize: 12, padding: "6px 14px", borderRadius: 20,
                    border: `1.5px solid ${form.businessType === type ? "#1D1D1F" : "rgba(0,0,0,0.12)"}`,
                    background: form.businessType === type ? "#1D1D1F" : "transparent",
                    color: form.businessType === type ? "#fff" : "#6E6E73",
                    cursor: "pointer", transition: "all 0.15s ease", fontFamily: "inherit",
                  }}>
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label style={lbl}>ABOUT YOUR PROJECT</label>
            <textarea required rows={3} placeholder="What do you need from a website, and what's your timeline?"
              value={form.description} onChange={(e) => set("description", e.target.value)}
              style={{ ...field, resize: "none", lineHeight: 1.6 }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#1D1D1F")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.13)")} />
          </div>

          {/* Budget */}
          <div>
            <label style={lbl}>APPROXIMATE BUDGET</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 4 }}>
              {BUDGETS.map((b) => (
                <button key={b} type="button" onClick={() => set("budget", b)}
                  style={{
                    fontSize: 12, padding: "6px 14px", borderRadius: 20,
                    border: `1.5px solid ${form.budget === b ? "#1D1D1F" : "rgba(0,0,0,0.12)"}`,
                    background: form.budget === b ? "#1D1D1F" : "transparent",
                    color: form.budget === b ? "#fff" : "#6E6E73",
                    cursor: "pointer", transition: "all 0.15s ease", fontFamily: "inherit",
                  }}>
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div style={{ paddingTop: 6 }}>
            <button type="submit"
              style={{
                width: "100%", padding: "15px 24px", fontSize: 15, fontWeight: 600,
                color: "#F5F5F7", background: "#141416", border: "none", borderRadius: 8,
                cursor: "pointer", fontFamily: "inherit", letterSpacing: "-0.01em",
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.82")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              Send my project details →
            </button>
            <p style={{ fontSize: 11, color: "#A1A1A6", textAlign: "center", marginTop: 12, fontFamily: MONO, letterSpacing: "0.08em" }}>
              FREE CONSULTATION · NO COMMITMENT
            </p>
          </div>

        </form>
      </div>
    </main>
  );
}
