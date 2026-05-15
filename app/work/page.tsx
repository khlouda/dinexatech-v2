"use client";

import { useState, useEffect } from "react";
import { BrowserChrome } from "@/components/sections/Showcase";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

// ─── Interior-page mockups (different views than homepage Showcase) ────────────

// Batten Bay — "Our story" page
function BattenBayStoryPage({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{ background: "#FAF7F2", padding: isMobile ? 18 : 24, minHeight: isMobile ? 0 : 460, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: isMobile ? 16 : 22, paddingBottom: 12, borderBottom: "0.5px solid rgba(45,24,16,0.12)" }}>
        <span style={{ fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", fontSize: isMobile ? 16 : 18, color: "#2D1810" }}>Batten Bay</span>
        <div style={{ display: "flex", gap: isMobile ? 10 : 14 }}>
          {["Story", "Shop", "Order"].map((l) => (
            <span key={l} style={{ fontSize: isMobile ? 10 : 11, color: l === "Story" ? "#2D1810" : "#8B6F4E", fontWeight: l === "Story" ? 500 : 400 }}>{l}</span>
          ))}
        </div>
      </div>
      <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.15em", color: "#8B6F4E", marginBottom: 10 }}>OUR STORY · EST. 2024</span>
      <h1 style={{ fontSize: isMobile ? 32 : 44, fontFamily: "Georgia,'Times New Roman',serif", color: "#2D1810", letterSpacing: "-0.025em", lineHeight: 1.0, fontWeight: 400, marginBottom: 16 }}>
        Bread the way<br />it used to be.
      </h1>
      <div style={{ display: isMobile ? "block" : "grid", gridTemplateColumns: "1fr 1.2fr", gap: 18 }}>
        <img src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=400&q=80" alt="Bakery" style={{ width: "100%", height: isMobile ? 120 : 180, objectFit: "cover", borderRadius: 8, marginBottom: isMobile ? 12 : 0 }} loading="lazy" />
        <div>
          <p style={{ fontSize: 11, color: "#6B4423", lineHeight: 1.65, marginBottom: 8 }}>
            We started Batten Bay in a tiny kitchen on Llewellyn Avenue with a single sourdough starter we named after our grandmother.
          </p>
          <p style={{ fontSize: 11, color: "#6B4423", lineHeight: 1.65 }}>
            Every loaf is mixed by hand, fermented for 24 hours, and baked in a stone deck oven the morning you pick it up.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "auto", paddingTop: 14, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.08em", color: "#8B6F4E" }}>412 LLEWELLYN AVE · NORFOLK</span>
        <span style={{ fontSize: 9, color: "rgba(45,24,16,0.2)" }}>·</span>
        <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.08em", color: "#8B6F4E" }}>WED–SAT · 7AM–2PM</span>
      </div>
    </div>
  );
}

// Layaly — full menu page
function LayalyMenuPage({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{ background: "#1A1410", padding: isMobile ? 18 : 24, minHeight: isMobile ? 0 : 460, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18, paddingBottom: 12, borderBottom: "0.5px solid rgba(245,235,216,0.1)" }}>
        <span style={{ fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", fontSize: isMobile ? 16 : 18, color: "#F5EBD8" }}>Layaly</span>
        <div style={{ display: "flex", gap: 14 }}>
          {["Menu", "Visit", "Hours"].map((l) => (
            <span key={l} style={{ fontSize: 10, color: l === "Menu" ? "#C9A961" : "rgba(245,235,216,0.55)", fontWeight: l === "Menu" ? 500 : 400 }}>{l}</span>
          ))}
        </div>
      </div>
      <h1 style={{ fontSize: isMobile ? 30 : 38, fontFamily: "Georgia,'Times New Roman',serif", color: "#F5EBD8", letterSpacing: "-0.025em", lineHeight: 1.0, fontWeight: 400, marginBottom: 18 }}>The menu.</h1>
      <div style={{ display: isMobile ? "block" : "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        {[
          { section: "ESPRESSO", items: [["Espresso", "$3.50"], ["Cortado", "$4.25"], ["Latte", "$5.00"], ["Cappuccino", "$4.75"]] },
          { section: "POUR OVER", items: [["Ethiopia · Yirgacheffe", "$6.00"], ["Colombia · Huila", "$5.50"], ["Kenya · Nyeri", "$6.50"]] },
        ].map((col) => (
          <div key={col.section} style={{ marginBottom: isMobile ? 14 : 0 }}>
            <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.15em", color: "#C9A961", marginBottom: 10, display: "block" }}>{col.section}</span>
            {col.items.map(([name, price]) => (
              <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: 7, paddingBottom: 7, borderBottom: "0.5px dotted rgba(245,235,216,0.12)" }}>
                <span style={{ fontSize: 11, fontFamily: "Georgia,'Times New Roman',serif", color: "#F5EBD8" }}>{name}</span>
                <span style={{ fontSize: 10, color: "#A89280", fontFamily: "monospace" }}>{price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "auto", paddingTop: 14, fontSize: 9, fontFamily: "monospace", letterSpacing: "0.08em", color: "#A89280" }}>
        ROASTED IN-HOUSE · NORFOLK, VA
      </div>
    </div>
  );
}

// Stillwood — stylist profile page
function StillwoodStylistPage({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{ background: "#E8EFEA", padding: isMobile ? 18 : 24, minHeight: isMobile ? 0 : 460, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18, paddingBottom: 12, borderBottom: "0.5px solid rgba(42,77,52,0.12)" }}>
        <span style={{ fontSize: isMobile ? 14 : 16, fontWeight: 500, letterSpacing: "-0.02em", color: "#2A4D34" }}>Stillwood</span>
        <div style={{ display: "flex", gap: 14 }}>
          {["Services", "Stylists", "Book"].map((l) => (
            <span key={l} style={{ fontSize: 10, color: l === "Stylists" ? "#2A4D34" : "#6B937A", fontWeight: l === "Stylists" ? 500 : 400 }}>{l}</span>
          ))}
        </div>
      </div>
      <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.15em", color: "#6B937A", marginBottom: 8 }}>STYLIST · 8 YRS EXPERIENCE</span>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <div style={{ width: isMobile ? 48 : 56, height: isMobile ? 48 : 56, borderRadius: "50%", background: "#2A4D34", display: "flex", alignItems: "center", justifyContent: "center", color: "#E8EFEA", fontSize: 18, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", flexShrink: 0 }}>M</div>
        <div>
          <h2 style={{ fontSize: isMobile ? 24 : 28, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", color: "#2A4D34", letterSpacing: "-0.02em", lineHeight: 1.0, fontWeight: 400, margin: 0 }}>Maya Hollis</h2>
          <p style={{ fontSize: 11, color: "#5C8B6B", marginTop: 4 }}>Color specialist · Curl care · Editorial</p>
        </div>
      </div>
      <p style={{ fontSize: 11, color: "#5C8B6B", lineHeight: 1.6, marginBottom: 14 }}>
        Maya has been cutting and coloring hair in Hampton Roads for nearly a decade. She specializes in lived-in color, curls, and quiet conversation.
      </p>
      <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.1em", color: "#6B937A", marginBottom: 8 }}>NEXT AVAILABLE</span>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
        {["Tue 2:00 PM", "Wed 11:30 AM", "Fri 4:00 PM"].map((s) => (
          <div key={s} style={{ background: "rgba(255,255,255,0.85)", border: "0.5px solid rgba(42,77,52,0.15)", borderRadius: 5, padding: "8px 6px", textAlign: "center", fontSize: 10, color: "#2A4D34" }}>{s}</div>
        ))}
      </div>
      <button style={{ marginTop: "auto", background: "#2A4D34", color: "#fff", fontSize: 11, padding: 10, borderRadius: 6, border: "none", cursor: "default" }}>Book with Maya →</button>
    </div>
  );
}

// Forge & Bloom — product detail page
function ForgeBloomProductPage({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{ background: "#F5E8E8", padding: isMobile ? 18 : 24, minHeight: isMobile ? 0 : 460, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18, paddingBottom: 12, borderBottom: "0.5px solid rgba(74,44,44,0.12)" }}>
        <span style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: isMobile ? 14 : 16, color: "#4A2C2C" }}>Forge &amp; Bloom</span>
        <div style={{ display: "flex", gap: 14 }}>
          {["Shop", "Custom", "Visit"].map((l) => (
            <span key={l} style={{ fontSize: 10, color: l === "Shop" ? "#4A2C2C" : "#A87A6A", fontWeight: l === "Shop" ? 500 : 400 }}>{l}</span>
          ))}
        </div>
      </div>
      <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.15em", color: "#A87A6A", marginBottom: 8 }}>SHOP / PERMANENT JEWELRY</span>
      <div style={{ display: isMobile ? "block" : "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" alt="14k gold chain" style={{ width: "100%", height: isMobile ? 140 : 200, objectFit: "cover", borderRadius: 8, marginBottom: isMobile ? 12 : 0 }} loading="lazy" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: isMobile ? 22 : 26, fontFamily: "Georgia,'Times New Roman',serif", color: "#4A2C2C", letterSpacing: "-0.02em", lineHeight: 1.05, fontWeight: 400, marginBottom: 6 }}>14k Gold Chain</h2>
          <span style={{ fontSize: 14, color: "#4A2C2C", marginBottom: 10, fontFamily: "Georgia,'Times New Roman',serif" }}>$85.00</span>
          <p style={{ fontSize: 10, color: "#8B5A4B", lineHeight: 1.6, marginBottom: 12 }}>
            Solid 14-karat gold-fill chain, welded to fit. No clasp, no closure — designed to be worn forever.
          </p>
          <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.08em", color: "#A87A6A", marginBottom: 6 }}>LENGTH</span>
          <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
            {["6\"", "7\"", "8\""].map((s, i) => (
              <div key={s} style={{ flex: 1, padding: "5px 0", textAlign: "center", fontSize: 10, color: i === 1 ? "#fff" : "#4A2C2C", background: i === 1 ? "#4A2C2C" : "transparent", border: "0.5px solid #4A2C2C", borderRadius: 4 }}>{s}</div>
            ))}
          </div>
          <button style={{ background: "#4A2C2C", color: "#fff", fontSize: 11, padding: 10, borderRadius: 6, border: "none", cursor: "default" }}>Add to cart →</button>
        </div>
      </div>
      <div style={{ marginTop: "auto", paddingTop: 14, fontSize: 9, fontFamily: "monospace", letterSpacing: "0.08em", color: "#A87A6A" }}>
        HANDMADE · SHIPS IN 3–5 DAYS
      </div>
    </div>
  );
}

const projects = [
  {
    number: "01",
    name: "Batten Bay Bakehouse",
    category: "BAKERY",
    location: "Norfolk, VA",
    status: "live" as const,
    statusLabel: "Live site",
    year: "2024",
    url: "battenbaybakehouse.com",
    description:
      "Batten Bay needed a way to sell their weekly bread menu online without dealing with third-party marketplaces. We built a clean e-commerce site with a custom weekly menu, pickup scheduling, and a branded storefront that feels as handcrafted as the bread itself.",
    deliverables: ["E-commerce storefront", "Weekly menu system", "Pickup scheduling", "Mobile-first design"],
    outcome: "Launched in 6 days. Customers now order directly — no marketplace fees.",
    link: "https://battenbaybakehousedemocarla.netlify.app/",
    linkLabel: "View live site →",
    accentColor: "#2D1810",
    Body: BattenBayStoryPage,
  },
  {
    number: "02",
    name: "Layaly Coffee",
    category: "RESTAURANT",
    location: "Norfolk, VA",
    status: "concept" as const,
    statusLabel: "Concept",
    year: "2025",
    url: "layaly.coffee",
    description:
      "A brand and site concept for a specialty coffee shop with a warm, editorial feel. The goal was to design something that felt as considered as the coffee — not a template, not a generic café site. Menu, hours, location, and an order-ahead flow, all in one place.",
    deliverables: ["Brand identity", "Editorial design", "Menu & hours", "Order-ahead flow"],
    outcome: "A concept demonstrating what a specialty café site can feel like when design matches the product.",
    link: null,
    linkLabel: null,
    accentColor: "#F5EBD8",
    Body: LayalyMenuPage,
  },
  {
    number: "03",
    name: "Stillwood Salon",
    category: "SALON",
    location: "Norfolk, VA",
    status: "concept" as const,
    statusLabel: "Concept",
    year: "2025",
    url: "stillwoodsalon.com",
    description:
      "A booking and client portal concept for a boutique hair salon. Instead of sending clients to a third-party booking tool, Stillwood gets their own branded experience — browse stylists, view real availability, and book in seconds, all without leaving the site.",
    deliverables: ["Booking system", "Stylist profiles", "Client portal", "Availability calendar"],
    outcome: "A concept showing how salons can own their booking experience end to end.",
    link: null,
    linkLabel: null,
    accentColor: "#2A4D34",
    Body: StillwoodStylistPage,
  },
  {
    number: "04",
    name: "Forge & Bloom",
    category: "BOUTIQUE",
    location: "USA",
    status: "live" as const,
    statusLabel: "Live store",
    year: "2025",
    url: "etsy.com/shop/ForgeAndBloomShop",
    description:
      "Forge & Bloom makes permanent jewelry and printable goods by hand. We built a branded Etsy presence and supporting web presence — clean, warm, and built to turn browsers into buyers without losing the handmade feel that makes the shop special.",
    deliverables: ["Branded Etsy store", "Web presence", "Product photography direction", "Copywriting"],
    outcome: "Live and selling. A handmade shop that looks as polished as the jewelry it sells.",
    link: "https://www.etsy.com/shop/ForgeAndBloomShop",
    linkLabel: "Visit the store →",
    accentColor: "#4A2C2C",
    Body: ForgeBloomProductPage,
  },
];

function ProjectCard({ project, isMobile, index }: { project: typeof projects[0]; isMobile: boolean; index: number }) {
  const isEven = index % 2 === 0;
  const Body = project.Body;

  return (
    <article style={{ marginBottom: isMobile ? 56 : 112 }}>
      {/* Project header */}
      <div style={{
        paddingBottom: 14,
        borderBottom: "0.5px solid rgba(0,0,0,0.12)",
        marginBottom: 32,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: isMobile ? 6 : 0 }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.08em" }}>{project.number}</span>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "rgba(0,0,0,0.15)" }}>·</span>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.06em" }}>{project.category}</span>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "rgba(0,0,0,0.15)" }}>·</span>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: project.status === "live" ? "#16A34A" : "#86868B", flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontFamily: MONO, fontSize: 10, color: project.status === "live" ? "#16A34A" : "#86868B", letterSpacing: "0.06em" }}>{project.statusLabel}</span>
          </div>
        </div>
        <h2 style={{ fontSize: isMobile ? 24 : "clamp(24px, 3vw, 32px)", fontWeight: 600, color: "#1D1D1F", letterSpacing: "-0.035em", lineHeight: 1.1, margin: isMobile ? "6px 0 0" : "8px 0 0" }}>
          {project.name}
        </h2>
      </div>

      {/* Mockup + content */}
      <div style={{
        display: isMobile ? "flex" : "grid",
        flexDirection: "column" as const,
        gridTemplateColumns: isEven && !isMobile ? "1fr 1fr" : "1fr 1fr",
        gap: isMobile ? 28 : 56,
        alignItems: "start",
      }}>
        {/* Browser mockup — the actual designed work */}
        <div style={{
          order: (!isMobile && !isEven) ? 2 : 0,
          borderRadius: 14,
          overflow: "hidden",
          border: "0.5px solid rgba(0,0,0,0.08)",
          boxShadow: "0 24px 48px -16px rgba(0,0,0,0.14), 0 8px 20px -8px rgba(0,0,0,0.08)",
          background: "#fff",
        }}>
          <BrowserChrome url={project.url} />
          <Body isMobile={isMobile} />
        </div>

        {/* Details */}
        <div style={{ order: (!isMobile && !isEven) ? 1 : 0, paddingTop: isMobile ? 0 : 8 }}>
          <p style={{ fontSize: 15, color: "#6E6E73", lineHeight: 1.7, marginBottom: 28 }}>
            {project.description}
          </p>

          {/* Deliverables */}
          <div style={{ marginBottom: 28 }}>
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.08em", display: "block", marginBottom: 12 }}>
              DELIVERABLES
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.deliverables.map((d) => (
                <span key={d} style={{
                  fontSize: 12,
                  color: "#1D1D1F",
                  border: "0.5px solid rgba(0,0,0,0.15)",
                  borderRadius: 20,
                  padding: "5px 12px",
                }}>
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div style={{
            padding: "14px 16px",
            background: "#F5F5F7",
            borderRadius: 8,
            marginBottom: 24,
            borderLeft: `3px solid ${project.status === "live" ? "#16A34A" : "#C7C7CC"}`,
          }}>
            <p style={{ fontSize: 13, color: "#1D1D1F", lineHeight: 1.55, margin: 0 }}>
              {project.outcome}
            </p>
          </div>

          {/* CTA */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: 14,
                fontWeight: 500,
                color: "#1D1D1F",
                textDecoration: "none",
                borderBottom: "1px solid #1D1D1F",
                paddingBottom: 2,
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.5")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              {project.linkLabel}
            </a>
          ) : (
            <span style={{ fontSize: 13, color: "#86868B", fontFamily: MONO, letterSpacing: "0.04em" }}>
              CONCEPT — NOT YET LIVE
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(48px, 8vw, 96px) clamp(24px, 5vw, 60px)" }}>

        {/* Page header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          paddingBottom: 14,
          borderBottom: "1px solid #1D1D1F",
          marginBottom: isMobile ? 56 : 80,
          flexWrap: "wrap",
          gap: 8,
        }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: "#1D1D1F", letterSpacing: "-0.04em", lineHeight: 1.0, margin: 0 }}>
            Selected work.
          </h1>
          <span style={{ fontFamily: MONO, fontSize: 11, color: "#86868B", letterSpacing: "0.06em" }}>
            04 PROJECTS
          </span>
        </div>

        {/* Projects */}
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} isMobile={isMobile} index={i} />
        ))}

        {/* Bottom CTA */}
        <div style={{
          borderTop: "0.5px solid rgba(0,0,0,0.1)",
          paddingTop: 48,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: 20,
        }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 600, color: "#1D1D1F", letterSpacing: "-0.03em", marginBottom: 6 }}>
              Your business could be next.
            </p>
            <p style={{ fontSize: 14, color: "#6E6E73", lineHeight: 1.5 }}>
              We build sites for small businesses in 5–7 days, at a price that makes sense.
            </p>
          </div>
          <a
            href="/contact"
            style={{
              flexShrink: 0,
              fontSize: 14,
              fontWeight: 500,
              color: "#fff",
              background: "#1D1D1F",
              padding: "12px 22px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "opacity 0.15s ease",
              whiteSpace: "nowrap" as const,
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            Start a project →
          </a>
        </div>

      </div>
    </main>
  );
}
