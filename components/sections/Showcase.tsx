"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { X } from "lucide-react";

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProductCard({ color, name, price }: { color: string; name: string; price: string }) {
  return (
    <div
      style={{
        width: 130,
        background: "#FFFFFF",
        borderRadius: 8,
        border: "0.5px solid rgba(0,0,0,0.06)",
        padding: 8,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 90,
          background: color,
          borderRadius: 5,
          boxShadow: "inset 0 2px 8px rgba(0,0,0,0.12)",
        }}
      />
      <p
        style={{
          marginTop: 6,
          fontSize: 10,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          color: "#2D1810",
          lineHeight: 1.3,
        }}
      >
        {name}
      </p>
      <p style={{ fontSize: 10, color: "#6B4423", marginTop: 2 }}>{price}</p>
      <div
        style={{
          marginTop: 6,
          display: "inline-block",
          background: "#2D1810",
          color: "#F7F1E8",
          fontSize: 9,
          padding: "3px 8px",
          borderRadius: 99,
        }}
      >
        + Add
      </div>
    </div>
  );
}

function MockupBody() {
  return (
    <div style={{ display: "flex", minHeight: 480 }}>
      {/* ── Left column ── */}
      <div
        style={{
          flex: 1,
          background: "#F7F1E8",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Inner nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              color: "#2D1810",
              letterSpacing: "-0.01em",
            }}
          >
            Batten Bay
          </span>
          <div style={{ display: "flex", gap: 14 }}>
            {["Story", "Shop", "Order"].map((l) => (
              <span key={l} style={{ fontSize: 11, color: "#6B4423", letterSpacing: "0.01em" }}>
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Hero block with overlapping photo */}
        <div style={{ position: "relative", marginBottom: 24 }}>
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80"
            alt="Artisan bread"
            style={{
              position: "absolute",
              top: -8,
              right: 0,
              width: 200,
              height: 140,
              objectFit: "cover",
              borderRadius: 8,
              border: "0.5px solid rgba(0,0,0,0.06)",
            }}
            loading="lazy"
          />
          <div style={{ maxWidth: "55%" }}>
            <h2
              style={{
                fontSize: 44,
                fontFamily: "Georgia, 'Times New Roman', serif",
                color: "#2D1810",
                letterSpacing: "-0.025em",
                lineHeight: 1.0,
                fontWeight: 400,
              }}
            >
              Bread,
              <br />
              slowly.
            </h2>
            <p
              style={{
                fontSize: 12,
                color: "#6B4423",
                marginTop: 12,
                maxWidth: 280,
                lineHeight: 1.5,
              }}
            >
              Wild yeast. Old methods.
              <br />
              Hampton Roads since 2024.
            </p>
            <button
              style={{
                marginTop: 18,
                background: "#2D1810",
                color: "#F7F1E8",
                fontSize: 11,
                padding: "9px 16px",
                borderRadius: 6,
                border: "none",
                cursor: "default",
                letterSpacing: "0.01em",
              }}
            >
              Shop this week →
            </button>
          </div>
        </div>

        {/* Product strip */}
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <ProductCard color="#D4A574" name="Classic Sourdough" price="$12" />
          <ProductCard color="#E8B260" name="Honey Wheat" price="$11" />
          <ProductCard color="#8B5A2B" name="Multigrain" price="$13" />
        </div>

        {/* EST. 2024 */}
        <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "0.5px solid rgba(0,0,0,0.12)" }}>
          <span style={{ fontSize: 8, fontFamily: "monospace", color: "#6B4423", letterSpacing: "0.08em" }}>
            EST. 2024
          </span>
        </div>
      </div>

      {/* ── Right column: cart ── */}
      <div
        style={{
          width: 280,
          flexShrink: 0,
          background: "#FFFFFF",
          borderLeft: "0.5px solid rgba(0,0,0,0.08)",
          padding: 16,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              color: "#2D1810",
            }}
          >
            Your Order
          </span>
          <X size={14} color="#86868B" strokeWidth={1.5} />
        </div>

        {/* Item 1 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 8,
            paddingBottom: 8,
            borderBottom: "0.5px solid rgba(0,0,0,0.08)",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              color: "#2D1810",
            }}
          >
            Classic Sourdough
          </span>
          <span style={{ fontSize: 10, color: "#6B4423" }}>1 × $12</span>
        </div>

        {/* Item 2 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              color: "#2D1810",
            }}
          >
            Rosemary Focaccia
          </span>
          <span style={{ fontSize: 10, color: "#6B4423" }}>1 × $9</span>
        </div>

        {/* Total */}
        <div
          style={{
            borderTop: "0.5px solid rgba(0,0,0,0.08)",
            marginTop: 8,
            paddingTop: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#86868B",
            }}
          >
            Pickup total
          </span>
          <span
            style={{
              fontSize: 18,
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "#2D1810",
            }}
          >
            $21.00
          </span>
        </div>

        <div style={{ flex: 1 }} />

        <button
          style={{
            width: "100%",
            background: "#2D1810",
            color: "#F7F1E8",
            fontSize: 11,
            padding: 10,
            borderRadius: 6,
            border: "none",
            cursor: "default",
            letterSpacing: "0.01em",
            marginTop: 16,
          }}
        >
          Checkout →
        </button>
      </div>
    </div>
  );
}

function BrowserChrome({ isDark }: { isDark: boolean }) {
  return (
    <div
      style={{
        height: 36,
        background: isDark ? "#2D2D2F" : "#F5F5F7",
        borderRadius: "16px 16px 0 0",
        display: "flex",
        alignItems: "center",
        padding: "0 14px",
        gap: 6,
        flexShrink: 0,
        borderBottom: isDark
          ? "0.5px solid rgba(255,255,255,0.06)"
          : "0.5px solid rgba(0,0,0,0.06)",
        position: "relative",
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4D4D8", flexShrink: 0 }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 11,
          fontFamily: "monospace",
          color: "#86868B",
        }}
      >
        battenbaybakehouse.com
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function Showcase() {
  const isDark = false;

  const showcaseRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Scroll-driven values ──
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "center center"],
  });

  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const baseScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const baseOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  // ── Cursor-driven spring values ──
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const cursorRotateY = useSpring(0, springConfig);
  const cursorRotateX = useSpring(0, springConfig);

  // Combined rotateX = scroll base + cursor delta
  const combinedRotateX = useTransform(
    [scrollRotateX, cursorRotateX],
    ([base, cursor]: number[]) => base + cursor
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (isMobile || !mockupRef.current) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!mockupRef.current) return;
        const rect = mockupRef.current.getBoundingClientRect();
        const relX = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
        const relY = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
        cursorRotateY.set(relX * 8);
        cursorRotateX.set(-relY * 8);
      });
    },
    [isMobile, cursorRotateX, cursorRotateY]
  );

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    cursorRotateY.set(0);
    cursorRotateX.set(0);
  }, [cursorRotateX, cursorRotateY]);

  const m = isDark ? 0.5 : 1;
  const frameShadow = [
    `0 80px 100px -40px rgba(0,0,0,${0.25 * m})`,
    `0 40px 60px -30px rgba(0,0,0,${0.15 * m})`,
    `0 0 0 1px rgba(0,0,0,${0.04 * m})`,
  ].join(", ");

  return (
    <section
      ref={showcaseRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 32px 80px",
        background: "var(--color-background)",
      }}
    >
      {/* Perspective wrapper */}
      <div style={{ perspective: 2400, perspectiveOrigin: "center center" }}>
        <motion.div
          ref={mockupRef}
          style={{
            width: "clamp(320px, 90vw, 1100px)",
            borderRadius: 16,
            border: "0.5px solid var(--color-border)",
            boxShadow: frameShadow,
            overflow: "hidden",
            willChange: "transform",
            rotateX: combinedRotateX,
            rotateY: cursorRotateY,
            scale: baseScale,
            opacity: baseOpacity,
          }}
        >
          <BrowserChrome isDark={isDark} />
          <MockupBody />
        </motion.div>
      </div>

      {/* Caption */}
      <div
        style={{
          marginTop: 80,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <p
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: "var(--color-text-secondary)",
            letterSpacing: "-0.005em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--color-text-primary)",
              flexShrink: 0,
            }}
          />
          Batten Bay Bakehouse — e-commerce in 6 days
        </p>

        <a
          href="https://battenbaybakehousedemocarla.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "var(--color-text-primary)",
            textDecoration: "underline",
            textDecorationThickness: 1,
            textUnderlineOffset: 4,
            letterSpacing: "-0.005em",
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          View live demo →
        </a>
      </div>
    </section>
  );
}
