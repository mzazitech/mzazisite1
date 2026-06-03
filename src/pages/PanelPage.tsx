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

const plans = [
  {
    name: "Unlimited Server",
    price: "100",
    period: "KES / one-time",
    badge: null,
    features: ["Unlimited server installations", "Basic Pterodactyl panel", "Standard performance", "Email support", "Secure environment", "Community access"],
    cta: "Get Started",
  },
  {
    name: "Unlimited Premium",
    price: "150",
    period: "KES / one-time",
    badge: "Most Popular",
    features: ["Unlimited server installations", "Premium Pterodactyl panel", "High performance nodes", "Priority WhatsApp support", "Secure environment", "Custom branding"],
    cta: "Go Premium",
  },
  {
    name: "Admin Panel",
    price: "300",
    period: "KES / one-time",
    badge: "Full Control",
    features: ["Full admin access", "Create & manage users", "Allocate server resources", "Custom egg/nest support", "Advanced node config", "Dedicated support"],
    cta: "Get Admin Access",
  },
];

const specs = [
  { label: "Panel Version", value: "Pterodactyl Latest" },
  { label: "OS Support", value: "Ubuntu / Debian" },
  { label: "Server Types", value: "Minecraft, Node.js, Python, Java, Go & more" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Setup Time", value: "< 24 hours" },
  { label: "Support Channel", value: "WhatsApp Direct" },
];

const features = [
  { icon: "🚀", title: "Fast Deployment", desc: "Your panel is set up and ready within 24 hours of purchase." },
  { icon: "🔒", title: "Secure Environment", desc: "Isolated server environments with full firewall protection." },
  { icon: "⚙️", title: "Easy Management", desc: "Intuitive dashboard to start, stop, reinstall, and manage servers." },
  { icon: "📦", title: "Unlimited Installs", desc: "Install as many game servers and bots as you need, no limits." },
  { icon: "🌐", title: "Custom Eggs", desc: "Support for custom Pterodactyl eggs for any application type." },
  { icon: "💬", title: "WhatsApp Support", desc: "Direct support on WhatsApp for fast troubleshooting and help." },
];

export default function PanelPage() {
  useReveal();
  const waLink = "https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20want%20to%20buy%20a%20Pterodactyl%20Panel";

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="section-tag purple reveal">High Performance Hosting</div>
          <h1 className="page-hero-title reveal reveal-delay-1">
            <span className="grad">Pterodactyl</span> Panel Hosting
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            Blazing-fast Pterodactyl panels with unlimited server installations, easy management, and rock-solid uptime — starting at just KES 100.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">🛒 Buy a Panel</a>
            <Link href="/contact" className="btn-outline">💬 Ask a Question</Link>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* PRICING */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div className="section-tag reveal">Pricing</div>
            <h2 className="section-title reveal reveal-delay-1">Simple, <span className="grad">Affordable</span> Plans</h2>
            <p className="section-sub reveal reveal-delay-2">One-time payment, lifetime access. No monthly fees, no surprises.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.8rem" }}>
            {plans.map((p, i) => (
              <div key={p.name} className={`pricing-card reveal reveal-delay-${i + 1}${p.badge === "Most Popular" ? " featured" : ""}`} style={{ position: "relative" }}>
                {p.badge && (
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", background: "var(--gradient-main)", color: "#fff", padding: "0.28rem 0.9rem", borderRadius: "99px", whiteSpace: "nowrap" }}>
                    {p.badge}
                  </div>
                )}
                <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "0.9rem", fontWeight: 800, marginBottom: "0.2rem" }}>{p.name}</h3>
                <div className="pricing-price">KES {p.price}</div>
                <div className="pricing-period">{p.period}</div>
                <ul className="pricing-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className={p.badge === "Most Popular" ? "btn-primary" : "btn-outline"} style={{ width: "100%", justifyContent: "center" }}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* FEATURES */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg,transparent,rgba(180,0,255,0.02),transparent)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div className="section-tag reveal">Why Our Panels</div>
            <h2 className="section-title reveal reveal-delay-1">Built for <span className="grad">Performance</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.4rem" }}>
            {features.map((f, i) => (
              <div key={f.title} className={`glass-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.8rem", filter: "drop-shadow(0 0 10px rgba(180,0,255,0.5))" }}>{f.icon}</div>
                  <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "0.88rem", fontWeight: 700, marginBottom: "0.5rem", background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{f.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* TECH SPECS */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="section-tag reveal">Tech Stack</div>
              <h2 className="section-title reveal reveal-delay-1">Technical <span className="grad">Specifications</span></h2>
              <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: "2rem" }}>
                Our panels run on battle-tested infrastructure with modern hardware to deliver the best performance for your servers.
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary reveal reveal-delay-3">Order Your Panel Now</a>
            </div>
            <div className="glass-card reveal reveal-delay-2" style={{ padding: "2rem" }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                {specs.map((s, i) => (
                  <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.9rem 0", borderBottom: i < specs.length - 1 ? "1px solid rgba(0,212,255,0.08)" : "none" }}>
                    <span style={{ fontSize: "0.84rem", color: "var(--text-secondary)" }}>{s.label}</span>
                    <span style={{ fontSize: "0.84rem", fontWeight: 600, color: "var(--neon-blue)" }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="glass-card reveal" style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid rgba(180,0,255,0.25)", boxShadow: "0 0 60px rgba(180,0,255,0.06)" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🖥️</div>
              <h2 className="section-title">Ready to <span className="grad">Host?</span></h2>
              <p style={{ color: "var(--text-secondary)", maxWidth: 460, margin: "0 auto 2rem", fontSize: "0.95rem" }}>
                Message us now and get your Pterodactyl panel set up within 24 hours.
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ fontSize: "1rem", padding: "0.95rem 2.5rem" }}>
                Buy on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
