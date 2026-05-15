import Link from "next/link";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

export default function NotFound() {
  return (
    <main
      style={{
        background: "#141416",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 480 }}>
        <span
          style={{
            fontFamily: MONO,
            fontSize: 11,
            color: "#6E6E73",
            letterSpacing: "0.12em",
            display: "block",
            marginBottom: 24,
          }}
        >
          404
        </span>
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 700,
            color: "#F5F5F7",
            letterSpacing: "-0.045em",
            lineHeight: 1.0,
            marginBottom: 18,
          }}
        >
          Nothing here.
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "#8E8E93",
            lineHeight: 1.65,
            marginBottom: 40,
          }}
        >
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#141416",
              background: "#F5F5F7",
              padding: "12px 22px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            ← Back to home
          </Link>
          <Link
            href="/contact"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#F5F5F7",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              paddingBottom: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            Start a project →
          </Link>
        </div>
      </div>
    </main>
  );
}
