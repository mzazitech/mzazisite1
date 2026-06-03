import { useEffect } from "react";
import { Link } from "wouter";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (e) => e.forEach((x) => { if (x.isIntersecting) x.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const contacts = [
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+254 108 595 201",
    desc: "Our primary channel — fastest response guaranteed.",
    cta: "Chat Now",
    href: "https://wa.me/254108595201",
    color: "#25D366",
    glow: "rgba(37,211,102,0.2)",
  },
  {
    icon: "✈️",
    label: "Telegram",
    value: "@mzazitech",
    desc: "Reach us on Telegram for updates and announcements.",
    cta: "Open Telegram",
    href: "https://t.me/254108595201",
    color: "#2CA5E0",
    glow: "rgba(44,165,224,0.2)",
  },
  {
    icon: "⌨️",
    label: "GitHub",
    value: "@mzazitech",
    desc: "Follow our open-source projects and contributions.",
    cta: "View GitHub",
    href: "https://github.com/mzazitech",
    color: "#00d4ff",
    glow: "rgba(0,212,255,0.15)",
  },
];

const services = [
  { label: "WhatsApp Bot", href: "https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20want%20a%20free%20WhatsApp%20Bot" },
  { label: "Pterodactyl Panel", href: "https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20want%20to%20buy%20a%20Pterodactyl%20Panel" },
  { label: "Web Development", href: "https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20need%20a%20website%20built" },
  { label: "API Services", href: "https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20need%20API%20integration%20services" },
  { label: "Automation", href: "https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20need%20automation%20solutions" },
  { label: "General Inquiry", href: "https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20have%20a%20question" },
];

export default function ContactPage() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="section-tag reveal">Get In Touch</div>
          <h1 className="page-hero-title reveal reveal-delay-1">
            Talk to <span className="grad">Mzazi Tech</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            We respond fast — usually within minutes on WhatsApp. Pick your preferred channel below and let's build something amazing together.
          </p>
        </div>
      </section>

      <div className="glow-divider" />

      {/* CONTACT CARDS */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.8rem", marginBottom: "4rem" }}>
            {contacts.map((c, i) => (
              <div key={c.label} className={`glass-card reveal reveal-delay-${i + 1}`} style={{ textAlign: "center", padding: "2.5rem 2rem" }}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ width: 70, height: 70, borderRadius: "50%", background: `${c.glow}`, border: `1px solid ${c.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 1.2rem", boxShadow: `0 0 24px ${c.glow}` }}>{c.icon}</div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: c.color, marginBottom: "0.3rem" }}>{c.label}</div>
                  <div style={{ fontFamily: "Orbitron, monospace", fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.6rem" }}>{c.value}</div>
                  <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1.5rem" }}>{c.desc}</p>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.7rem 1.5rem", background: `${c.glow}`, border: `1px solid ${c.color}50`, borderRadius: "8px", color: c.color, fontFamily: "Exo 2, sans-serif", fontSize: "0.88rem", fontWeight: 700, textDecoration: "none", transition: "all 0.3s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${c.glow}`; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >{c.cta} →</a>
                </div>
              </div>
            ))}
          </div>

          {/* QUICK LINKS */}
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <div className="section-tag reveal">Quick Contact</div>
            <h2 className="section-title reveal reveal-delay-1">What Can We <span className="grad">Help With?</span></h2>
            <p className="section-sub reveal reveal-delay-2">Click a service below to open a pre-filled WhatsApp message.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {services.map((s, i) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`glass-card reveal reveal-delay-${(i % 3) + 1}`}
                style={{ textAlign: "center", padding: "1.4rem 1rem", textDecoration: "none", color: "var(--text-primary)", display: "block" }}
              >
                <div style={{ position: "relative", zIndex: 1, fontFamily: "Exo 2, sans-serif", fontSize: "0.9rem", fontWeight: 600 }}>
                  💬 {s.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* HOURS & INFO */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <div className="section-tag reveal">Response Times</div>
              <h2 className="section-title reveal reveal-delay-1">We're <span className="grad">Always On</span></h2>
              <div className="glass-card reveal reveal-delay-2" style={{ marginTop: "1.5rem" }}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  {[
                    ["WhatsApp", "< 5 minutes", "#25D366"],
                    ["Telegram", "< 30 minutes", "#2CA5E0"],
                    ["Complex setups", "< 24 hours", "#00d4ff"],
                    ["Support issues", "< 2 hours", "#b400ff"],
                  ].map(([label, time, color]) => (
                    <div key={label as string} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 0", borderBottom: "1px solid rgba(0,212,255,0.07)" }}>
                      <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>{label}</span>
                      <span style={{ fontSize: "0.88rem", fontWeight: 700, color: color as string }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="section-tag reveal">Location</div>
              <h2 className="section-title reveal reveal-delay-1">Based in <span className="grad">Kenya 🇰🇪</span></h2>
              <div className="glass-card reveal reveal-delay-2" style={{ marginTop: "1.5rem" }}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  {[
                    ["Company", "Mzazi Tech Inc"],
                    ["Country", "Kenya, East Africa"],
                    ["Time Zone", "EAT (UTC+3)"],
                    ["Languages", "English, Swahili"],
                  ].map(([label, val]) => (
                    <div key={label as string} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 0", borderBottom: "1px solid rgba(0,212,255,0.07)" }}>
                      <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>{label}</span>
                      <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
