"use client";

import { useState, useEffect } from "react";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

const projects = [
  {
    number: "01",
    name: "Batten Bay Bakehouse",
    category: "BAKERY",
    location: "Norfolk, VA",
    status: "live" as const,
    statusLabel: "Live site",
    year: "2024",
    description:
      "Batten Bay needed a way to sell their weekly bread menu online without dealing with third-party marketplaces. We built a clean e-commerce site with a custom weekly menu, pickup scheduling, and a branded storefront that feels as handcrafted as the bread itself.",
    deliverables: ["E-commerce storefront", "Weekly menu system", "Pickup scheduling", "Mobile-first design"],
    outcome: "Launched in 6 days. Customers now order directly — no marketplace fees.",
    link: "https://battenbaybakehousedemocarla.netlify.app/",
    linkLabel: "View live site →",
    accentBg: "#FAF7F2",
    accentColor: "#2D1810",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80",
  },
  {
    number: "02",
    name: "Layaly Coffee",
    category: "RESTAURANT",
    location: "Norfolk, VA",
    status: "concept" as const,
    statusLabel: "Concept",
    year: "2025",
    description:
      "A brand and site concept for a specialty coffee shop with a warm, editorial feel. The goal was to design something that felt as considered as the coffee — not a template, not a generic café site. Menu, hours, location, and an order-ahead flow, all in one place.",
    deliverables: ["Brand identity", "Editorial design", "Menu & hours", "Order-ahead flow"],
    outcome: "A concept demonstrating what a specialty café site can feel like when design matches the product.",
    link: null,
    linkLabel: null,
    accentBg: "#1A1410",
    accentColor: "#F5EBD8",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80",
  },
  {
    number: "03",
    name: "Stillwood Salon",
    category: "SALON",
    location: "Norfolk, VA",
    status: "concept" as const,
    statusLabel: "Concept",
    year: "2025",
    description:
      "A booking and client portal concept for a boutique hair salon. Instead of sending clients to a third-party booking tool, Stillwood gets their own branded experience — browse stylists, view real availability, and book in seconds, all without leaving the site.",
    deliverables: ["Booking system", "Stylist profiles", "Client portal", "Availability calendar"],
    outcome: "A concept showing how salons can own their booking experience end to end.",
    link: null,
    linkLabel: null,
    accentBg: "#E8EFEA",
    accentColor: "#2A4D34",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80",
  },
  {
    number: "04",
    name: "Forge & Bloom",
    category: "BOUTIQUE",
    location: "USA",
    status: "live" as const,
    statusLabel: "Live store",
    year: "2025",
    description:
      "Forge & Bloom makes permanent jewelry and printable goods by hand. We built a branded Etsy presence and supporting web presence — clean, warm, and built to turn browsers into buyers without losing the handmade feel that makes the shop special.",
    deliverables: ["Branded Etsy store", "Web presence", "Product photography direction", "Copywriting"],
    outcome: "Live and selling. A handmade shop that looks as polished as the jewelry it sells.",
    link: "https://www.etsy.com/shop/ForgeAndBloomShop",
    linkLabel: "Visit the store →",
    accentBg: "#F5E8E8",
    accentColor: "#4A2C2C",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80",
  },
];

function ProjectCard({ project, isMobile, index }: { project: typeof projects[0]; isMobile: boolean; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article style={{ marginBottom: isMobile ? 80 : 120 }}>
      {/* Project header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        paddingBottom: 14,
        borderBottom: "0.5px solid rgba(0,0,0,0.12)",
        marginBottom: 40,
        flexWrap: "wrap",
        gap: 8,
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.08em" }}>{project.number}</span>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, color: "#1D1D1F", letterSpacing: "-0.035em", lineHeight: 1.0, margin: 0 }}>
            {project.name}
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.06em" }}>{project.category}</span>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#86868B", letterSpacing: "0.06em" }}>{project.year}</span>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: project.status === "live" ? "#16A34A" : "#86868B", flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontFamily: MONO, fontSize: 10, color: project.status === "live" ? "#16A34A" : "#86868B", letterSpacing: "0.06em" }}>{project.statusLabel}</span>
          </div>
        </div>
      </div>

      {/* Image + content */}
      <div style={{
        display: isMobile ? "flex" : "grid",
        flexDirection: "column" as const,
        gridTemplateColumns: isEven && !isMobile ? "1fr 1fr" : "1fr 1fr",
        gap: isMobile ? 28 : 64,
        alignItems: "start",
      }}>
        {/* Image */}
        <div style={{ order: (!isMobile && !isEven) ? 2 : 0, borderRadius: 12, overflow: "hidden", position: "relative" }}>
          <img
            src={project.image}
            alt={project.name}
            style={{ width: "100%", height: isMobile ? 220 : 340, objectFit: "cover", display: "block" }}
            loading="lazy"
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, transparent 40%, ${project.accentBg}cc)`,
          }} />
          <div style={{
            position: "absolute",
            bottom: 16,
            left: 20,
            padding: "6px 12px",
            background: project.accentBg,
            borderRadius: 20,
          }}>
            <span style={{ fontSize: 11, fontWeight: 500, color: project.accentColor, fontFamily: MONO, letterSpacing: "0.06em" }}>
              {project.category}
            </span>
          </div>
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
