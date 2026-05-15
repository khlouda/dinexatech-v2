"use client";

import { useState, useEffect, useRef } from "react";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

type QA = {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
};

const QA_BANK: QA[] = [
  {
    id: "cost",
    question: "How much does it cost?",
    keywords: ["cost", "price", "pricing", "how much", "fee", "budget", "expensive", "cheap", "afford", "money", "$"],
    answer:
      "Most projects land between $1,500 and $5,000 — fixed price, no hourly billing. We give you the exact number after a free 30-min call so you know upfront.",
  },
  {
    id: "timeline",
    question: "How long does it take?",
    keywords: ["how long", "time", "days", "weeks", "timeline", "when", "fast", "quick", "delivery", "ready"],
    answer:
      "A polished marketing site is 5–7 days from kickoff to launch. Bigger builds (custom booking, full e-commerce) get scoped separately and quoted honestly.",
  },
  {
    id: "included",
    question: "What's included?",
    keywords: ["include", "included", "get", "features", "what do", "comes with", "package", "deliverables"],
    answer:
      "Custom design, mobile-first build, hosting setup on Vercel, performance + SEO, contact form, and 30 days of post-launch support — all fixed price.",
  },
  {
    id: "ownership",
    question: "Do I own the site?",
    keywords: ["own", "ownership", "mine", "belongs", "rights", "licence", "license", "code"],
    answer:
      "100% yours. Code, content, customer data, the whole thing. No lock-in, no monthly platform fees, no asking permission to make changes.",
  },
  {
    id: "updates",
    question: "Can I update it later?",
    keywords: ["update", "updates", "change", "changes", "edit", "modify", "after launch", "maintenance", "tweak"],
    answer:
      "Yes. You own the code, so you (or any developer) can edit it anytime. First 30 days of small changes are free; bigger changes after that we quote per project.",
  },
  {
    id: "monthly",
    question: "Is there a monthly fee?",
    keywords: ["monthly", "subscription", "recurring", "month", "ongoing", "annual"],
    answer:
      "Nope. Pay once, you own it. Hosting on Vercel is free at your scale. The only ongoing cost is your domain (~$12/year) and your email of choice.",
  },
  {
    id: "process",
    question: "How does the process work?",
    keywords: ["process", "how does it work", "steps", "how it works", "workflow", "stages"],
    answer:
      "Day 1: free 30-min call. Day 2: written proposal with fixed price. Days 3–6: we build, you get daily updates. Day 7: launch. Full breakdown on the How it works page.",
  },
  {
    id: "support",
    question: "What if something breaks?",
    keywords: ["break", "broken", "bug", "issue", "problem", "support", "help", "fix"],
    answer:
      "First 30 days post-launch we handle anything for free. After that, small fixes (under an hour) are free; bigger work is quoted. We respond within one business day.",
  },
  {
    id: "businesses",
    question: "Who do you build for?",
    keywords: ["who", "type", "business", "kind", "industries", "client"],
    answer:
      "Small businesses with real customers — bakeries, salons, restaurants, boutiques, fitness studios, professional services. Not startups, not enterprises.",
  },
  {
    id: "contact",
    question: "How do I get started?",
    keywords: ["start", "get started", "begin", "contact", "reach", "email", "call", "book", "talk"],
    answer:
      "Hit the Contact page (or 'Start a project' in the nav) and tell us about your business. We respond within one business day.",
  },
];

const QUICK_QUESTIONS = ["cost", "timeline", "included", "process", "contact"];

const FALLBACK =
  "Good question — I don't have a quick answer for that one. Try the contact page and we'll get back to you within one business day, or pick one of the questions above.";

const GREETING =
  "Hey! I can answer quick questions about pricing, timeline, what's included, and how it all works. Pick one below or type your question.";

type Message = { from: "bot" | "user"; text: string };

function findAnswer(input: string): string {
  const q = input.toLowerCase();
  let best: { qa: QA; score: number } | null = null;
  for (const qa of QA_BANK) {
    let score = 0;
    for (const kw of qa.keywords) {
      if (q.includes(kw)) score += kw.length;
    }
    if (score > 0 && (!best || score > best.score)) best = { qa, score };
  }
  return best ? best.qa.answer : FALLBACK;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ from: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function ask(question: string) {
    const answer = findAnswer(question);
    setMessages((m) => [...m, { from: "user", text: question }, { from: "bot", text: answer }]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput("");
    ask(trimmed);
  }

  function handleQuick(id: string) {
    const qa = QA_BANK.find((q) => q.id === id);
    if (qa) ask(qa.question);
  }

  return (
    <>
      {/* ── Floating button ──────────────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          bottom: isMobile ? 18 : 24,
          right: isMobile ? 18 : 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#141416",
          border: "none",
          color: "#F5F5F7",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: 0,
          zIndex: 60,
          boxShadow: "0 12px 28px -8px rgba(0,0,0,0.35), 0 4px 12px -4px rgba(0,0,0,0.2)",
          transition: "transform 0.18s ease, opacity 0.18s ease",
          opacity: open ? 0 : 1,
          transform: open ? "scale(0.85)" : "scale(1)",
          pointerEvents: open ? "none" : "auto",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M21 12c0 4.4-4 8-9 8a9.9 9.9 0 0 1-3.5-.6L3 21l1.6-4.7A7.6 7.6 0 0 1 3 12c0-4.4 4-8 9-8s9 3.6 9 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Chat panel ───────────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-label="Quick answers chat"
        aria-hidden={!open}
        style={{
          position: "fixed",
          bottom: isMobile ? 0 : 24,
          right: isMobile ? 0 : 24,
          left: isMobile ? 0 : "auto",
          width: isMobile ? "100%" : 380,
          height: isMobile ? "85vh" : 560,
          maxHeight: isMobile ? "85vh" : "calc(100vh - 48px)",
          background: "#fff",
          borderRadius: isMobile ? "16px 16px 0 0" : 16,
          border: "0.5px solid rgba(0,0,0,0.08)",
          boxShadow: "0 28px 60px -16px rgba(0,0,0,0.28), 0 12px 28px -8px rgba(0,0,0,0.16)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 61,
          transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transformOrigin: "bottom right",
          transition: "transform 0.22s ease, opacity 0.22s ease",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "14px 16px",
          background: "#141416",
          color: "#F5F5F7",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "#16A34A", display: "inline-flex",
              alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 700, color: "#fff",
              fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic",
            }}>D</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em" }}>DinexaTech</span>
              <span style={{ fontSize: 10, color: "#86868B", fontFamily: MONO, letterSpacing: "0.06em" }}>QUICK ANSWERS · USUALLY INSTANT</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "transparent", border: "none",
              color: "#F5F5F7", cursor: "pointer", padding: 0,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} style={{
          flex: 1,
          overflowY: "auto",
          padding: "18px 16px",
          background: "#FAFAF8",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}>
          {messages.map((m, i) => (
            <div key={i} style={{
              alignSelf: m.from === "user" ? "flex-end" : "flex-start",
              maxWidth: "85%",
              background: m.from === "user" ? "#141416" : "#fff",
              color: m.from === "user" ? "#F5F5F7" : "#1D1D1F",
              border: m.from === "user" ? "none" : "0.5px solid rgba(0,0,0,0.08)",
              padding: "10px 14px",
              borderRadius: m.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              fontSize: 13.5,
              lineHeight: 1.55,
              letterSpacing: "-0.005em",
              whiteSpace: "pre-wrap",
            }}>
              {m.text}
            </div>
          ))}
        </div>

        {/* Quick questions */}
        <div style={{
          padding: "10px 14px",
          borderTop: "0.5px solid rgba(0,0,0,0.06)",
          background: "#fff",
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          flexShrink: 0,
        }}>
          {QUICK_QUESTIONS.map((id) => {
            const qa = QA_BANK.find((q) => q.id === id);
            if (!qa) return null;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleQuick(id)}
                style={{
                  fontSize: 12,
                  color: "#1D1D1F",
                  background: "transparent",
                  border: "0.5px solid rgba(0,0,0,0.15)",
                  borderRadius: 16,
                  padding: "5px 11px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  letterSpacing: "-0.01em",
                  transition: "background 0.15s ease, color 0.15s ease, border-color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#1D1D1F";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#1D1D1F";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#1D1D1F";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.15)";
                }}
              >
                {qa.question}
              </button>
            );
          })}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} style={{
          padding: "12px 14px 14px",
          borderTop: "0.5px solid rgba(0,0,0,0.06)",
          background: "#fff",
          display: "flex",
          gap: 8,
          flexShrink: 0,
        }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question…"
            style={{
              flex: 1,
              fontSize: 13.5,
              color: "#1D1D1F",
              background: "#F5F5F7",
              border: "0.5px solid transparent",
              borderRadius: 8,
              padding: "10px 12px",
              outline: "none",
              fontFamily: "inherit",
              transition: "border-color 0.15s ease, background 0.15s ease",
            }}
            onFocus={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.18)"; }}
            onBlur={(e) => { e.currentTarget.style.background = "#F5F5F7"; e.currentTarget.style.borderColor = "transparent"; }}
          />
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send"
            style={{
              width: 40,
              flexShrink: 0,
              background: input.trim() ? "#141416" : "#D4D4D8",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: input.trim() ? "pointer" : "not-allowed",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s ease",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L12 7M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
