"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { X } from "lucide-react";

const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace";

// ─── Case data ────────────────────────────────────────────────────────────────

type Case = {
  id: string;
  number: string;
  name: string;
  category: string;
  url: string;
  status: "live" | "concept";
  description: string;
  outcome: string;
  ctaText: string;
  ctaLink: string;
};

const cases: Case[] = [
  {
    id: "batten-bay",
    number: "01",
    name: "Batten Bay Bakehouse",
    category: "BAKERY",
    url: "battenbaybakehouse.com",
    status: "live",
    description:
      "Online ordering and branded e-commerce for an artisan bakery in Hampton Roads. Customers shop the weekly bread menu and schedule pickup directly from the site.",
    outcome: "Live · E-commerce in 6 days",
    ctaText: "View live site →",
    ctaLink: "https://battenbaybakehousedemocarla.netlify.app/",
  },
  {
    id: "layaly",
    number: "02",
    name: "Layaly Coffee",
    category: "RESTAURANT",
    url: "layaly.coffee",
    status: "concept",
    description:
      "Brand and site concept for a specialty coffee shop. A warm, editorial design with menu, hours, and location — built to feel as good as the coffee tastes.",
    outcome: "Concept · Brand + ordering",
    ctaText: "Explore the concept →",
    ctaLink: "#",
  },
  {
    id: "stillwood",
    number: "03",
    name: "Stillwood Salon",
    category: "SALON",
    url: "stillwoodsalon.com",
    status: "concept",
    description:
      "Booking and client portal concept for a boutique hair salon. Customers browse stylists, view real availability, and book appointments in seconds.",
    outcome: "Concept · Booking + portal",
    ctaText: "Explore the concept →",
    ctaLink: "#",
  },
  {
    id: "forge-and-bloom",
    number: "04",
    name: "Forge & Bloom",
    category: "BOUTIQUE",
    url: "etsy.com/shop/ForgeAndBloomShop",
    status: "live",
    description:
      "Branded Etsy store and web presence for a handmade jewelry and printable goods shop. Warm, clean, and built to turn browsers into buyers.",
    outcome: "Live · Etsy + web presence",
    ctaText: "Visit the store →",
    ctaLink: "https://www.etsy.com/shop/ForgeAndBloomShop",
  },
];

// ─── Mockup bodies ────────────────────────────────────────────────────────────

export function BattenBayBody({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: isMobile ? 0 : 480 }}>
      <div style={{ flex: 1, background: "#FAF7F2", padding: isMobile ? 18 : 24, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: isMobile ? 14 : 20 }}>
          <span style={{ fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", fontSize: isMobile ? 16 : 18, color: "#2D1810" }}>Batten Bay</span>
          <div style={{ display: "flex", gap: isMobile ? 10 : 14 }}>
            {["Story", "Shop", "Order"].map((l) => <span key={l} style={{ fontSize: isMobile ? 10 : 11, color: "#6B4423" }}>{l}</span>)}
          </div>
        </div>
        {isMobile ? (
          <>
            <h2 style={{ fontSize: 32, fontFamily: "Georgia,'Times New Roman',serif", color: "#2D1810", letterSpacing: "-0.025em", lineHeight: 1.0, fontWeight: 400 }}>Bread,<br />slowly.</h2>
            <p style={{ fontSize: 12, color: "#6B4423", marginTop: 10, lineHeight: 1.5 }}>Wild yeast. Old methods. Hampton Roads since 2024.</p>
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80" alt="Artisan bread" style={{ marginTop: 14, width: "100%", height: 140, objectFit: "cover", borderRadius: 8, border: "0.5px solid rgba(0,0,0,0.06)" }} loading="lazy" />
            <button style={{ alignSelf: "flex-start", marginTop: 14, background: "#2D1810", color: "#F7F1E8", fontSize: 11, padding: "9px 16px", borderRadius: 6, border: "none", cursor: "default" }}>Shop this week →</button>
          </>
        ) : (
          <div style={{ position: "relative", marginBottom: 20 }}>
            <div style={{ maxWidth: "58%" }}>
              <h2 style={{ fontSize: 44, fontFamily: "Georgia,'Times New Roman',serif", color: "#2D1810", letterSpacing: "-0.025em", lineHeight: 1.0, fontWeight: 400 }}>Bread,<br />slowly.</h2>
              <p style={{ fontSize: 12, color: "#6B4423", marginTop: 12, lineHeight: 1.5 }}>Wild yeast. Old methods.<br />Hampton Roads since 2024.</p>
              <button style={{ marginTop: 18, background: "#2D1810", color: "#F7F1E8", fontSize: 11, padding: "9px 16px", borderRadius: 6, border: "none", cursor: "default" }}>Shop this week →</button>
            </div>
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" alt="Artisan bread" style={{ position: "absolute", top: -4, right: 0, width: 185, height: 138, objectFit: "cover", borderRadius: 8, border: "0.5px solid rgba(0,0,0,0.06)" }} loading="lazy" />
          </div>
        )}
        <div style={{ display: "flex", gap: 10, marginTop: isMobile ? 16 : 0, overflowX: isMobile ? "auto" : "visible", paddingBottom: isMobile ? 4 : 0, marginLeft: isMobile ? -18 : 0, marginRight: isMobile ? -18 : 0, paddingLeft: isMobile ? 18 : 0, paddingRight: isMobile ? 18 : 0 }}>
          {[{ src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&q=80", pos: "left center", label: "Classic Sourdough", price: "$12" }, { src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&q=80", pos: "center top", label: "Honey Wheat", price: "$11" }, { src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&q=80", pos: "right bottom", label: "Multigrain", price: "$13" }].map((item) => (
            <div key={item.label} style={{ width: isMobile ? 110 : 120, background: "#fff", borderRadius: 8, border: "0.5px solid rgba(0,0,0,0.06)", padding: 8, flexShrink: 0 }}>
              <img src={item.src} alt={item.label} style={{ width: "100%", height: 80, objectFit: "cover", objectPosition: item.pos, borderRadius: 5 }} loading="lazy" />
              <p style={{ marginTop: 6, fontSize: 10, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", color: "#2D1810" }}>{item.label}</p>
              <p style={{ fontSize: 10, color: "#6B4423", marginTop: 2 }}>{item.price}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: isMobile ? 16 : "auto", paddingTop: 12, borderTop: "0.5px solid rgba(0,0,0,0.1)" }}>
          <span style={{ fontSize: 8, fontFamily: "monospace", color: "#6B4423", letterSpacing: "0.08em" }}>EST. 2024</span>
        </div>
      </div>
      <div style={{ width: isMobile ? "100%" : 260, flexShrink: 0, background: "#fff", borderLeft: isMobile ? "none" : "0.5px solid rgba(0,0,0,0.08)", borderTop: isMobile ? "0.5px solid rgba(0,0,0,0.08)" : "none", padding: isMobile ? 18 : 16, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <span style={{ fontSize: 13, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", color: "#2D1810" }}>Your Order</span>
          <X size={14} color="#86868B" strokeWidth={1.5} />
        </div>
        {[{ name: "Classic Sourdough", price: "1 × $12", src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=80&q=70" }, { name: "Rosemary Focaccia", price: "1 × $9", src: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=80&q=70" }].map((item, i) => (
          <div key={item.name} style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 8, paddingBottom: 8, borderBottom: i === 0 ? "0.5px solid rgba(0,0,0,0.08)" : "none" }}>
            <img src={item.src} alt={item.name} style={{ width: 36, height: 36, objectFit: "cover", borderRadius: 4, flexShrink: 0 }} loading="lazy" />
            <span style={{ flex: 1, fontSize: 11, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", color: "#2D1810" }}>{item.name}</span>
            <span style={{ fontSize: 10, color: "#6B4423" }}>{item.price}</span>
          </div>
        ))}
        <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.08)", marginTop: 8, paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: 10, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#86868B" }}>Pickup total</span>
          <span style={{ fontSize: 18, fontFamily: "Georgia,'Times New Roman',serif", color: "#2D1810" }}>$21.00</span>
        </div>
        <div style={{ flex: 1 }} />
        <button style={{ width: "100%", background: "#2D1810", color: "#F7F1E8", fontSize: 11, padding: 10, borderRadius: 6, border: "none", cursor: "default", marginTop: 16 }}>Checkout →</button>
      </div>
    </div>
  );
}

export function LaYalyBody({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: isMobile ? 0 : 480 }}>
      <div style={{ flex: 1, background: "#1A1410", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ position: "relative", height: isMobile ? 130 : 160, flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80" alt="Coffee" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }} loading="lazy" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,20,16,0.2), rgba(26,20,16,0.85))" }} />
          <div style={{ position: "absolute", bottom: 16, left: 24, right: 24, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <span style={{ fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", fontSize: 22, color: "#F5EBD8" }}>Layaly</span>
            <div style={{ display: "flex", gap: 14 }}>{["Menu", "Visit", "Hours"].map((l) => <span key={l} style={{ fontSize: 10, color: "rgba(245,235,216,0.7)" }}>{l}</span>)}</div>
          </div>
        </div>
        <div style={{ padding: isMobile ? 18 : 24, display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A961", flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.15em", color: "#C9A961" }}>OPEN UNTIL 6 PM</span>
          </div>
          <h2 style={{ fontSize: isMobile ? 30 : 36, fontFamily: "Georgia,'Times New Roman',serif", color: "#F5EBD8", letterSpacing: "-0.025em", lineHeight: 1.0, fontWeight: 400, marginBottom: 10 }}>Coffee,<br />made slowly.</h2>
          <p style={{ fontSize: 12, color: "#A89280", lineHeight: 1.5, marginBottom: 18 }}>Single-origin beans. Roasted in Norfolk.</p>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ src: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=200&q=80", pos: "center top", label: "Espresso" }, { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=80", pos: "left center", label: "Pour Over" }, { src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&q=80", pos: "right bottom", label: "Cold Brew" }].map((item) => (
              <div key={item.label} style={{ flex: 1, borderRadius: 6, overflow: "hidden", position: "relative", height: 70 }}>
                <img src={item.src} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: item.pos }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
                <span style={{ position: "absolute", bottom: 6, left: 7, fontSize: 9, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", color: "rgba(255,255,255,0.95)" }}>{item.label}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "0.5px solid rgba(245,235,216,0.1)" }}>
            <span style={{ fontSize: 8, fontFamily: "monospace", color: "#A89280", letterSpacing: "0.08em" }}>EST. 2025</span>
          </div>
        </div>
      </div>
      <div style={{ width: isMobile ? "100%" : 260, flexShrink: 0, background: "#0F0B07", borderLeft: isMobile ? "none" : "0.5px solid rgba(255,255,255,0.06)", borderTop: isMobile ? "0.5px solid rgba(255,255,255,0.06)" : "none", padding: isMobile ? 18 : 16, display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 13, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", color: "#F5EBD8", marginBottom: 16, display: "block" }}>Hours</span>
        {[{ days: "Tue–Thu", hours: "7am–6pm" }, { days: "Fri–Sat", hours: "7am–7pm" }, { days: "Sun", hours: "8am–4pm" }].map((row) => (
          <div key={row.days} style={{ display: "flex", justifyContent: "space-between", paddingTop: 8, paddingBottom: 8, borderBottom: "0.5px solid rgba(245,235,216,0.06)" }}>
            <span style={{ fontSize: 10, color: "#A89280" }}>{row.days}</span>
            <span style={{ fontSize: 10, color: "#F5EBD8" }}>{row.hours}</span>
          </div>
        ))}
        <div style={{ borderTop: "0.5px solid rgba(245,235,216,0.1)", marginTop: 16, paddingTop: 12 }}>
          <div style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.08em", color: "#A89280" }}>412 GRANBY ST</div>
          <div style={{ fontSize: 10, color: "#F5EBD8", marginTop: 4 }}>Norfolk, VA 23510</div>
        </div>
        <div style={{ flex: 1 }} />
        <button style={{ width: "100%", background: "#C9A961", color: "#1A1410", fontSize: 11, padding: 10, borderRadius: 6, border: "none", cursor: "default", marginTop: 16, fontWeight: 500 }}>Order ahead →</button>
      </div>
    </div>
  );
}

export function StillwoodBody({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: isMobile ? 0 : 480 }}>
      <div style={{ flex: 1, background: "#E8EFEA", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ position: "relative", height: isMobile ? 130 : 160, flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80" alt="Salon" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(232,239,234,0.9))" }} />
          <div style={{ position: "absolute", bottom: 14, left: 24, right: 24, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <span style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.02em", color: "#2A4D34" }}>Stillwood</span>
            <div style={{ display: "flex", gap: 14 }}>{["Services", "Stylists", "Book"].map((l) => <span key={l} style={{ fontSize: 10, color: "#5C8B6B" }}>{l}</span>)}</div>
          </div>
        </div>
        <div style={{ padding: isMobile ? 18 : 24, display: "flex", flexDirection: "column", flex: 1 }}>
          <h2 style={{ fontSize: isMobile ? 30 : 36, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", color: "#2A4D34", letterSpacing: "-0.025em", lineHeight: 1.0, fontWeight: 400, marginBottom: 10 }}>Quiet hands.<br />Lasting work.</h2>
          <p style={{ fontSize: 12, color: "#5C8B6B", lineHeight: 1.5, marginBottom: 18 }}>Hair, color, and care in a small Norfolk studio.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[{ name: "Cut & Style", detail: "90 min · $85" }, { name: "Color & Gloss", detail: "2.5 hr · $180" }, { name: "Blowout", detail: "45 min · $55" }, { name: "Treatment", detail: "60 min · $70" }].map((svc) => (
              <div key={svc.name} style={{ background: "rgba(255,255,255,0.8)", border: "0.5px solid rgba(42,77,52,0.15)", borderRadius: 6, padding: 10 }}>
                <div style={{ fontSize: 10, color: "#2A4D34", fontWeight: 500 }}>{svc.name}</div>
                <div style={{ fontSize: 9, color: "#5C8B6B", marginTop: 2 }}>{svc.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "0.5px solid rgba(42,77,52,0.12)" }}>
            <span style={{ fontSize: 8, fontFamily: "monospace", color: "#5C8B6B", letterSpacing: "0.08em" }}>NORFOLK, VA</span>
          </div>
        </div>
      </div>
      <div style={{ width: isMobile ? "100%" : 260, flexShrink: 0, background: "#fff", borderLeft: isMobile ? "none" : "0.5px solid rgba(42,77,52,0.1)", borderTop: isMobile ? "0.5px solid rgba(42,77,52,0.1)" : "none", padding: isMobile ? 18 : 16, display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 11, color: "#2A4D34", fontWeight: 500, marginBottom: 16, display: "block" }}>Available this week</span>
        {[{ slot: "Tue 2:00 PM", stylist: "Maya" }, { slot: "Wed 11:30 AM", stylist: "Sara" }, { slot: "Fri 4:00 PM", stylist: "Maya" }].map((row) => (
          <div key={row.slot} style={{ display: "flex", justifyContent: "space-between", paddingTop: 10, paddingBottom: 10, borderBottom: "0.5px solid rgba(42,77,52,0.08)" }}>
            <span style={{ fontSize: 10, color: "#5C8B6B" }}>{row.slot}</span>
            <span style={{ fontSize: 10, color: "#2A4D34" }}>{row.stylist}</span>
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: "100%", background: "#2A4D34", color: "#fff", fontSize: 11, padding: 10, borderRadius: 6, border: "none", cursor: "default", marginTop: 16 }}>Book now →</button>
      </div>
    </div>
  );
}

export function ForgeAndBloomBody({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: isMobile ? 0 : 480 }}>
      <div style={{ flex: 1, background: "#F5E8E8", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ position: "relative", height: isMobile ? 130 : 160, flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=80" alt="Jewelry" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(245,232,232,0.85))" }} />
          <div style={{ position: "absolute", bottom: 14, left: 24, right: 24, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <span style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 15, letterSpacing: "0.02em", color: "#4A2C2C" }}>Forge & Bloom</span>
            <div style={{ display: "flex", gap: 14 }}>{["Shop", "Custom", "Visit"].map((l) => <span key={l} style={{ fontSize: 10, color: "#8B5A4B" }}>{l}</span>)}</div>
          </div>
        </div>
        <div style={{ padding: isMobile ? 18 : 24, display: "flex", flexDirection: "column", flex: 1 }}>
          <h2 style={{ fontSize: isMobile ? 30 : 36, fontFamily: "Georgia,'Times New Roman',serif", color: "#4A2C2C", letterSpacing: "-0.02em", lineHeight: 1.0, fontWeight: 400, marginBottom: 10 }}>Forever,<br />little things.</h2>
          <p style={{ fontSize: 12, color: "#8B5A4B", lineHeight: 1.5, marginBottom: 18 }}>Permanent jewelry. Printable goods. Made by hand.</p>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&q=80", pos: "left center", label: "14k Gold" }, { src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=200&q=80", pos: "center top", label: "Sterling" }, { src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&q=80", pos: "right bottom", label: "Rose Gold" }].map((item) => (
              <div key={item.label} style={{ flex: 1, borderRadius: 6, overflow: "hidden", position: "relative", height: 70 }}>
                <img src={item.src} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: item.pos }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(74,44,44,0.25)" }} />
                <span style={{ position: "absolute", bottom: 6, left: 7, fontSize: 9, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", color: "rgba(255,255,255,0.95)" }}>{item.label}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "0.5px solid rgba(74,44,44,0.12)" }}>
            <span style={{ fontSize: 8, fontFamily: "monospace", color: "#8B5A4B", letterSpacing: "0.08em" }}>HANDMADE · USA</span>
          </div>
        </div>
      </div>
      <div style={{ width: isMobile ? "100%" : 260, flexShrink: 0, background: "#fff", borderLeft: isMobile ? "none" : "0.5px solid rgba(74,44,44,0.08)", borderTop: isMobile ? "0.5px solid rgba(74,44,44,0.08)" : "none", padding: isMobile ? 18 : 16, display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 13, fontFamily: "Georgia,'Times New Roman',serif", fontStyle: "italic", color: "#4A2C2C", marginBottom: 16, display: "block" }}>Featured this week</span>
        {[{ name: "14k Gold Chain", price: "$85", src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=80&q=70" }, { name: "Habit Tracker", price: "$12", src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=80&q=70" }, { name: "Wellness Bundle", price: "$28", src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=80&q=70" }].map((item) => (
          <div key={item.name} style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 10, paddingBottom: 10, borderBottom: "0.5px solid rgba(74,44,44,0.08)" }}>
            <img src={item.src} alt={item.name} style={{ width: 36, height: 36, objectFit: "cover", borderRadius: 4, flexShrink: 0 }} loading="lazy" />
            <span style={{ flex: 1, fontSize: 10, color: "#4A2C2C" }}>{item.name}</span>
            <span style={{ fontSize: 10, color: "#8B5A4B" }}>{item.price}</span>
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <button style={{ width: "100%", background: "#4A2C2C", color: "#fff", fontSize: 11, padding: 10, borderRadius: 6, border: "none", cursor: "default", marginTop: 16 }}>Shop the store →</button>
      </div>
    </div>
  );
}

const MOCKUP_BODIES = [BattenBayBody, LaYalyBody, StillwoodBody, ForgeAndBloomBody];

// ─── Browser chrome ───────────────────────────────────────────────────────────

export function BrowserChrome({ url }: { url: string }) {
  return (
    <div style={{ height: 36, background: "#F5F5F7", borderRadius: "16px 16px 0 0", display: "flex", alignItems: "center", padding: "0 14px", gap: 6, flexShrink: 0, borderBottom: "0.5px solid rgba(0,0,0,0.06)", position: "relative", overflow: "hidden" }}>
      {[0, 1, 2].map((i) => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4D4D8", flexShrink: 0 }} />)}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", maxWidth: "60%", fontSize: 11, fontFamily: "monospace", color: "#86868B", whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis" }}>{url}</div>
    </div>
  );
}

// ─── Main Showcase ────────────────────────────────────────────────────────────

export function Showcase() {
  const [activeIdx, setActiveIdx] = useState(1); // start on Layaly — hero already shows Batten Bay
  const [fading, setFading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const showcaseRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  function goTo(idx: number) {
    if (idx === activeIdx || fading) return;
    setFading(true);
    pendingRef.current = setTimeout(() => {
      setActiveIdx(idx);
      setFading(false);
    }, 120);
  }

  function prev() { goTo((activeIdx - 1 + cases.length) % cases.length); }
  function next() { goTo((activeIdx + 1) % cases.length); }

  // Keyboard nav
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, { threshold: 0.3 });
    if (showcaseRef.current) observer.observe(showcaseRef.current);
    return () => observer.disconnect();
  }, [activeIdx, fading]);

  // Touch swipe
  const touchStartX = useRef(0);
  function onTouchStart(e: React.TouchEvent) { touchStartX.current = e.touches[0].clientX; }
  function onTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -50) next();
    if (dx > 50) prev();
  }

  useEffect(() => () => { if (pendingRef.current) clearTimeout(pendingRef.current); }, []);

  // Scroll-driven tilt
  const { scrollYProgress } = useScroll({ target: showcaseRef, offset: ["start end", "center center"] });
  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const baseScale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const baseOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Cursor tilt
  const springCfg = { stiffness: 150, damping: 20, mass: 0.5 };
  const cursorRotateY = useSpring(0, springCfg);
  const cursorRotateX = useSpring(0, springCfg);
  const combinedRotateX = useTransform(
    [scrollRotateX, cursorRotateX],
    ([base, cursor]: number[]) => base + cursor
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (isMobile || !mockupRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!mockupRef.current) return;
      const rect = mockupRef.current.getBoundingClientRect();
      const relX = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const relY = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      cursorRotateY.set(relX * 6);
      cursorRotateX.set(-relY * 6);
    });
  }, [isMobile, cursorRotateX, cursorRotateY]);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    cursorRotateY.set(0);
    cursorRotateX.set(0);
  }, [cursorRotateX, cursorRotateY]);

  const frameShadow = "0 48px 80px -24px rgba(0,0,0,0.18), 0 20px 40px -12px rgba(0,0,0,0.1), 0 0 0 0.5px rgba(0,0,0,0.06)";

  const activeCase = cases[activeIdx];
  const MockupBody = MOCKUP_BODIES[activeIdx];

  return (
    <section
      id="showcase"
      ref={showcaseRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        background: "#ECEAE7",
        padding: "clamp(56px, 8vw, 80px) clamp(22px, 5vw, 50px)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        {/* Section label */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          paddingBottom: 12,
          borderBottom: "1px solid var(--color-text-primary)",
          marginBottom: isMobile ? 32 : 48,
        }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "var(--color-text-muted)", letterSpacing: "0.08em" }}>
            SELECTED WORK
          </span>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "var(--color-text-muted)", letterSpacing: "0.06em" }}>
            {activeCase.number} / 04
          </span>
        </div>

        {isMobile ? (
          /* ── Mobile: mockup top, arrow control, info bottom ── */
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ perspective: 1200 }}>
              <motion.div
                ref={mockupRef}
                style={{
                  borderRadius: 16,
                  border: "0.5px solid rgba(0,0,0,0.08)",
                  boxShadow: frameShadow,
                  overflow: "hidden",
                  willChange: "transform",
                  scale: baseScale,
                  opacity: baseOpacity,
                }}
              >
                <BrowserChrome url={activeCase.url} />
                <div style={{ opacity: fading ? 0.3 : 1, transition: "opacity 0.12s ease" }}>
                  <MockupBody isMobile={isMobile} />
                </div>
              </motion.div>
            </div>

            <ArrowControls activeIdx={activeIdx} prev={prev} next={next} goTo={goTo} />

            <InfoPanel activeCase={activeCase} activeIdx={activeIdx} goTo={goTo} fading={fading} isMobile />
          </div>
        ) : (
          /* ── Desktop: mockup left, info right ── */
          <div style={{
            display: "grid",
            gridTemplateColumns: "58fr 42fr",
            gap: "clamp(40px, 5vw, 72px)",
            alignItems: "start",
          }}>
            {/* Mockup column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ perspective: 2400, perspectiveOrigin: "center center" }}>
                <motion.div
                  ref={mockupRef}
                  style={{
                    borderRadius: 16,
                    border: "0.5px solid rgba(0,0,0,0.08)",
                    boxShadow: frameShadow,
                    overflow: "hidden",
                    willChange: "transform",
                    rotateX: combinedRotateX,
                    rotateY: cursorRotateY,
                    scale: baseScale,
                    opacity: baseOpacity,
                  }}
                >
                  <BrowserChrome url={activeCase.url} />
                  <div style={{ opacity: fading ? 0.3 : 1, transition: "opacity 0.12s ease" }}>
                    <MockupBody isMobile={false} />
                  </div>
                </motion.div>
              </div>
              <ArrowControls activeIdx={activeIdx} prev={prev} next={next} goTo={goTo} />
            </div>

            {/* Info panel */}
            <InfoPanel activeCase={activeCase} activeIdx={activeIdx} goTo={goTo} fading={fading} isMobile={false} />
          </div>
        )}

      </div>
    </section>
  );
}

// ─── Arrow + dots control ────────────────────────────────────────────────────

function ArrowControls({
  activeIdx,
  prev,
  next,
  goTo,
}: {
  activeIdx: number;
  prev: () => void;
  next: () => void;
  goTo: (i: number) => void;
}) {
  const arrowBtn: React.CSSProperties = {
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: "0.5px solid rgba(0,0,0,0.15)",
    background: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    flexShrink: 0,
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    transition: "background 0.15s ease, border-color 0.15s ease",
  };
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 4px",
    }}>
      <button
        type="button"
        onClick={prev}
        aria-label="Previous project"
        style={arrowBtn}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1D1D1F"; (e.currentTarget.querySelector("path") as SVGPathElement).setAttribute("stroke", "#fff"); }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#fff"; (e.currentTarget.querySelector("path") as SVGPathElement).setAttribute("stroke", "#1D1D1F"); }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {cases.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            style={{
              width: i === activeIdx ? 22 : 6,
              height: 6,
              borderRadius: 3,
              border: "none",
              background: i === activeIdx ? "#1D1D1F" : "rgba(0,0,0,0.2)",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.2s ease, background 0.2s ease",
            }}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={next}
        aria-label="Next project"
        style={arrowBtn}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1D1D1F"; (e.currentTarget.querySelector("path") as SVGPathElement).setAttribute("stroke", "#fff"); }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#fff"; (e.currentTarget.querySelector("path") as SVGPathElement).setAttribute("stroke", "#1D1D1F"); }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3L11 8L6 13" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

// ─── Info panel ───────────────────────────────────────────────────────────────

function InfoPanel({
  activeCase,
  activeIdx,
  goTo,
  fading,
  isMobile,
}: {
  activeCase: Case;
  activeIdx: number;
  goTo: (i: number) => void;
  fading: boolean;
  isMobile: boolean;
}) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      paddingTop: isMobile ? 0 : 8,
      opacity: fading ? 0.4 : 1,
      transition: "opacity 0.12s ease",
    }}>

      {/* Category */}
      <span style={{
        fontFamily: MONO,
        fontSize: 10,
        color: "var(--color-text-muted)",
        letterSpacing: "0.1em",
        marginBottom: 12,
      }}>
        {activeCase.category}
      </span>

      {/* Project name */}
      <h2 style={{
        fontSize: "clamp(28px, 3.5vw, 42px)",
        fontWeight: 600,
        color: "var(--color-text-primary)",
        letterSpacing: "-0.04em",
        lineHeight: 1.0,
        marginBottom: 20,
      }}>
        {activeCase.name}
      </h2>

      {/* Description */}
      <p style={{
        fontSize: 15,
        color: "var(--color-text-secondary)",
        lineHeight: 1.65,
        marginBottom: 24,
        maxWidth: 400,
      }}>
        {activeCase.description}
      </p>

      {/* Outcome */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
        <span style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: activeCase.status === "live" ? "#16A34A" : "var(--color-text-muted)",
          flexShrink: 0,
        }} />
        <span style={{
          fontSize: 13,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.01em",
        }}>
          {activeCase.outcome}
        </span>
      </div>

      {/* CTA */}
      {activeCase.ctaLink !== "#" ? (
        <a
          href={activeCase.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            fontSize: 14,
            fontWeight: 500,
            color: "var(--color-text-primary)",
            textDecoration: "none",
            borderBottom: "1px solid var(--color-text-primary)",
            paddingBottom: 2,
            marginBottom: isMobile ? 40 : 0,
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.5")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          {activeCase.ctaText}
        </a>
      ) : (
        <span style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          fontSize: 14,
          color: "var(--color-text-muted)",
          marginBottom: isMobile ? 40 : 0,
        }}>
          {activeCase.ctaText}
        </span>
      )}

      {/* Project navigation — pushed to bottom on desktop */}
      {!isMobile && <div style={{ flex: 1, minHeight: 40 }} />}

      <div style={{
        borderTop: "0.5px solid rgba(0,0,0,0.1)",
        marginTop: isMobile ? 0 : 0,
      }}>
        {cases.map((c, i) => (
          <button
            key={c.id}
            onClick={() => goTo(i)}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
              width: "100%",
              padding: "14px 0",
              borderBottom: "0.5px solid rgba(0,0,0,0.06)",
              background: "none",
              border: "none",
              borderBottomWidth: "0.5px",
              borderBottomStyle: "solid",
              borderBottomColor: "rgba(0,0,0,0.06)",
              cursor: "pointer",
              textAlign: "left",
              transition: "opacity 0.15s ease",
              opacity: i === activeIdx ? 1 : 0.38,
            }}
            onMouseEnter={(e) => { if (i !== activeIdx) (e.currentTarget as HTMLButtonElement).style.opacity = "0.7"; }}
            onMouseLeave={(e) => { if (i !== activeIdx) (e.currentTarget as HTMLButtonElement).style.opacity = "0.38"; }}
          >
            <span style={{
              fontFamily: MONO,
              fontSize: 10,
              color: "var(--color-text-muted)",
              letterSpacing: "0.06em",
              flexShrink: 0,
              width: 20,
            }}>
              {c.number}
            </span>
            <span style={{
              fontSize: 14,
              fontWeight: i === activeIdx ? 500 : 400,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
            }}>
              {c.name}
            </span>
            <span style={{
              fontFamily: MONO,
              fontSize: 9,
              color: "var(--color-text-muted)",
              letterSpacing: "0.06em",
              marginLeft: "auto",
              flexShrink: 0,
            }}>
              {c.category}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
}
