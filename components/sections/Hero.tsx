"use client";

import { useState, useEffect } from "react";

const ISSUE_ROWS = [
  { category: "Restaurants", project: "Layaly",                    status: "concept", num: "01" },
  { category: "Bakeries",    project: "Batten Bay",                status: "live",    num: "02" },
  { category: "Salons",      project: "Stillwood",                 status: "concept", num: "03" },
  { category: "Boutiques",   project: "Forge & Bloom",             status: "store",   num: "04" },
  { category: "Dashboards",  project: "Sales · Inventory · CRM",  status: "",        num: "05" },
];

function Masthead() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        borderBottom: "1px solid var(--color-text-primary)",
        paddingBottom: 12,
        marginBottom: 28,
      }}
    >
      <span
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 13,
          letterSpacing: "0.02em",
          color: "var(--color-text-primary)",
        }}
      >
        VOLUME ONE · NORFOLK, VIRGINIA
      </span>
      <span
        style={{
          fontSize: 11,
          letterSpacing: "0.06em",
          color: "var(--color-text-muted)",
          textTransform: "uppercase",
        }}
      >
        EST. 2026
      </span>
    </div>
  );
}

function InThisIssue({ hideNumbers }: { hideNumbers?: boolean }) {
  return (
    <div
      style={{
        background: "#FAFAFA",
        borderRadius: 10,
        padding: 24,
      }}
    >
      <div
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 12,
          letterSpacing: "0.15em",
          color: "var(--color-text-primary)",
          textTransform: "uppercase",
          marginBottom: 22,
        }}
      >
        In This Issue
      </div>

      {ISSUE_ROWS.map((row) => (
        <div
          key={row.num}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            lineHeight: 2.4,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, flex: 1, minWidth: 0 }}>
            <span
              style={{
                fontSize: 15,
                color: "var(--color-text-primary)",
                fontWeight: 400,
                flexShrink: 0,
              }}
            >
              {row.category}
            </span>
            <span
              style={{
                fontSize: 12,
                color: "var(--color-text-muted)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {row.project}
              {row.status && (
                <>
                  {" · "}
                  {row.status === "live" ? (
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                      <span
                        style={{
                          display: "inline-block",
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: "#16A34A",
                          marginRight: 4,
                          verticalAlign: "middle",
                          flexShrink: 0,
                        }}
                      />
                      live
                    </span>
                  ) : (
                    row.status
                  )}
                </>
              )}
            </span>
          </div>
          {!hideNumbers && (
            <span
              style={{
                fontSize: 14,
                color: "var(--color-text-muted)",
                marginLeft: 8,
                flexShrink: 0,
              }}
            >
              {row.num}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function MiniBattenbay() {
  return (
    <div
      style={{
        background: "#FAF7F2",
        borderRadius: 8,
        padding: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: 15,
            color: "#2D1810",
          }}
        >
          Batten Bay
        </span>
        <span style={{ fontSize: 10, color: "#6B4423" }}>Featured · 2 items</span>
      </div>

      {/* Headline */}
      <div
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 24,
          color: "#2D1810",
          lineHeight: 1.0,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Bread,
        <br />
        slowly.
      </div>

      {/* Labeled color blocks */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 5,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            height: 80,
            borderRadius: 3,
            background: "linear-gradient(135deg, #D4A574, #8B5A2B)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              bottom: 8,
              left: 8,
              fontSize: 11,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            Sourdough
          </span>
        </div>
        <div
          style={{
            height: 80,
            borderRadius: 3,
            background: "linear-gradient(135deg, #E8B260, #B5832A)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              bottom: 8,
              left: 8,
              fontSize: 11,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            Honey Wheat
          </span>
        </div>
      </div>

      {/* Total */}
      <div
        style={{
          borderTop: "0.5px solid rgba(45,24,16,0.15)",
          paddingTop: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span style={{ fontSize: 10, color: "#6B4423", letterSpacing: "0.04em" }}>
          PICKUP TOTAL
        </span>
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 18,
            color: "#2D1810",
          }}
        >
          $21.00
        </span>
      </div>

      {/* Checkout */}
      <button
        style={{
          background: "#2D1810",
          color: "#F7F1E8",
          padding: "8px",
          borderRadius: 4,
          fontSize: 11,
          border: "none",
          cursor: "default",
          marginTop: 8,
          width: "100%",
          textAlign: "center",
        }}
      >
        Checkout →
      </button>
    </div>
  );
}

function CTABlock() {
  return (
    <>
      <div
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 11,
          letterSpacing: "0.15em",
          color: "var(--color-text-primary)",
          textTransform: "uppercase",
          marginBottom: 18,
        }}
      >
        A Studio for Small Business
      </div>

      <h1
        style={{
          fontSize: "clamp(48px, 6.2vw, 78px)",
          lineHeight: 0.95,
          fontWeight: 600,
          letterSpacing: "-0.05em",
          color: "var(--color-text-primary)",
          marginBottom: 24,
        }}
      >
        Websites,
        <br />
        perfected.
      </h1>

      <p
        style={{
          fontSize: 16,
          lineHeight: 1.5,
          color: "var(--color-text-secondary)",
          maxWidth: 380,
          marginBottom: 28,
        }}
      >
        Custom sites, ordering systems, and dashboards. Engineered like enterprise. Delivered in days.
      </p>

      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <a
          href="#showcase"
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "var(--color-background)",
            background: "var(--color-text-primary)",
            padding: "11px 20px",
            borderRadius: 6,
            textDecoration: "none",
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          Start a project →
        </a>
        <a
          href="#showcase"
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "var(--color-text-primary)",
            textDecoration: "none",
            borderBottom: "1px solid var(--color-text-primary)",
            paddingBottom: 2,
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          See the work
        </a>
      </div>
    </>
  );
}

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      style={{
        minHeight: "calc(100vh - 60px)",
        padding: "50px clamp(24px, 5vw, 50px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Masthead />

        {isMobile ? (
          /* ── Mobile stack ── */
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <CTABlock />
            <MiniBattenbay />
            <InThisIssue hideNumbers />
          </div>
        ) : (
          /* ── Desktop grid ── */
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.6fr 1.5fr 1.1fr",
              gap: 36,
              alignItems: "start",
            }}
          >
            <InThisIssue />
            <div><CTABlock /></div>
            <MiniBattenbay />
          </div>
        )}
      </div>
    </section>
  );
}
