"use client";

export function Hero() {
  return (
    <section
      style={{
        height: "calc(100vh - 53px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 32px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          className="text-display-xl"
          style={{ color: "var(--color-text-primary)" }}
        >
          Websites,
          <br />
          perfected.
        </h1>

        <p
          className="text-body-lg"
          style={{
            color: "var(--color-text-secondary)",
            marginTop: 28,
            maxWidth: 500,
          }}
        >
          For the small businesses
          <br />
          that refuse to look small.
        </p>

        <a
          href="#work"
          style={{
            display: "inline-block",
            marginTop: 60,
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: "var(--color-text-primary)",
            textDecoration: "underline",
            textDecorationThickness: 1,
            textUnderlineOffset: 4,
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          See what we make ›
        </a>
      </div>
    </section>
  );
}
