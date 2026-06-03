import { useEffect, useRef } from "react";
import { Link } from "wouter";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function AnimatedOrb() {
  return (
    <div className="hide-mobile" style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <div style={{
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle at 40% 40%, rgba(0,212,255,0.22), rgba(180,0,255,0.12), transparent 70%)",
        border: "1px solid rgba(0,212,255,0.18)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "float 6s ease-in-out infinite", position: "relative",
      }}>
        {[360, 420].map((s, i) => (
          <div key={i} style={{
            position: "absolute", width: s, height: s, borderRadius: "50%",
            border: `1px solid rgba(${i === 0 ? "180,0,255,0.1" : "0,212,255,0.1"})`,
            animation: `spin ${i === 0 ? "8s" : "12s"} linear infinite${i === 0 ? " reverse" : ""}`,
          }} />
        ))}
        <div style={{
          width: 180, height: 180, borderRadius: "50%",
          background: "radial-gradient(circle at 40% 40%, rgba(0,212,255,0.4), rgba(180,0,255,0.3))",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 60px rgba(0,212,255,0.4), 0 0 120px rgba(180,0,255,0.2)",
        }}>
          <span style={{ fontSize: "4rem", animation: "spin 12s linear infinite" }}>⚡</span>
        </div>
      </div>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </div>
  );
}

const features = [
  { icon: "🤖", name: "WhatsApp Bot Dev" },
  { icon: "🖥️", name: "Pterodactyl Hosting" },
  { icon: "🔌", name: "API Services" },
  { icon: "🌐", name: "Website Development" },
  { icon: "🛠️", name: "Technical Support" },
  { icon: "⚙️", name: "Automation Solutions" },
];

const why = [
  { icon: "⚡", title: "Fast Delivery", desc: "Bots and panels deployed within hours, not days. We value your time." },
  { icon: "🛡️", title: "Reliable Services", desc: "Maximum uptime and consistent performance you can count on every day." },
  { icon: "💸", title: "Affordable Pricing", desc: "Premium technology at prices accessible for startups and individuals." },
  { icon: "💬", title: "Active Support", desc: "Real human support on WhatsApp, available around the clock." },
  { icon: "🔒", title: "Secure Systems", desc: "Security-first approach keeping your data protected at all times." },
  { icon: "✅", title: "Trusted Tech", desc: "Industry-proven tools built by an experienced Kenyan developer." },
];

export default function HomePage() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: "calc(100vh - 72px)", display: "flex", alignItems: "center", padding: "60px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--neon-purple)", background: "rgba(180,0,255,0.08)", border: "1px solid rgba(180,0,255,0.28)", borderRadius: "99px", padding: "0.32rem 0.9rem", marginBottom: "1.5rem" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--neon-purple)", boxShadow: "0 0 8px var(--neon-purple)", animation: "blink 1.2s ease-in-out infinite", display: "inline-block" }} />
                Kenyan Tech Innovation
                <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}`}</style>
              </div>
              <h1 className="reveal reveal-delay-1" style={{ fontFamily: "Orbitron, monospace", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem" }}>
                BUILD SMARTER
                <span style={{ display: "block", background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>DIGITAL FUTURES</span>
              </h1>
              <p className="reveal reveal-delay-2" style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: 520 }}>
                Mzazi Tech Inc makes technology accessible, affordable, and powerful — from WhatsApp automation bots to blazing-fast Pterodactyl hosting panels and beyond.
              </p>
              <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/whatsapp" className="btn-primary">🚀 Get Started</Link>
                <Link href="/contact" className="btn-outline">💬 Contact Us</Link>
              </div>
              <div className="reveal reveal-delay-4" style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
                {[["100+", "Bots Deployed"], ["50+", "Happy Clients"], ["24/7", "Support"]].map(([n, l]) => (
                  <div key={l} className="stat-card">
                    <span className="stat-num">{n}</span>
                    <span className="stat-label">{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <AnimatedOrb />
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* SERVICES OVERVIEW */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <div className="section-tag reveal">Our Services</div>
            <h2 className="section-title reveal reveal-delay-1">Powerful <span className="grad">Solutions</span></h2>
            <p className="section-sub reveal reveal-delay-2">Two flagship products — both built to supercharge your digital presence.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {/* WhatsApp Card */}
            <div className="glass-card reveal reveal-delay-1" style={{ position: "relative" }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                  <span style={{ fontSize: "2.8rem", filter: "drop-shadow(0 0 12px rgba(0,212,255,0.6))" }}>🤖</span>
                  <span className="badge badge-free">FREE</span>
                </div>
                <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "1.25rem", fontWeight: 800, background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "1rem" }}>WhatsApp Bots</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                  Multi-device bots with AI integration, group management, media downloading, auto-responses, and 50+ utility commands — completely free.
                </p>
                <Link href="/whatsapp" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Explore Bots →</Link>
              </div>
            </div>
            {/* Panel Card */}
            <div className="glass-card reveal reveal-delay-2" style={{ position: "relative" }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                  <span style={{ fontSize: "2.8rem", filter: "drop-shadow(0 0 12px rgba(180,0,255,0.6))" }}>🖥️</span>
                  <span className="badge badge-paid">PAID</span>
                </div>
                <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "1.25rem", fontWeight: 800, background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "1rem" }}>Pterodactyl Panels</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                  High-performance Pterodactyl panels with unlimited server installations, easy management, fast deployment, and a secure environment — starting at KES 100.
                </p>
                <Link href="/panel" className="btn-purple" style={{ width: "100%", justifyContent: "center" }}>View Pricing →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* FEATURES */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg,transparent,rgba(0,212,255,0.02),transparent)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <div className="section-tag reveal">Capabilities</div>
            <h2 className="section-title reveal reveal-delay-1">Core <span className="grad">Features</span></h2>
            <p className="section-sub reveal reveal-delay-2">Everything you need to automate and grow your digital business.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4rem" }}>
            {features.map((f, i) => (
              <div key={f.name} className={`glass-card reveal reveal-delay-${(i % 3) + 1}`} style={{ textAlign: "center", padding: "2rem 1.5rem" }}>
                <div style={{ fontSize: "2.4rem", marginBottom: "0.8rem", filter: "drop-shadow(0 0 10px rgba(0,212,255,0.5))" }}>{f.icon}</div>
                <div style={{ fontFamily: "Orbitron, monospace", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.03em" }}>{f.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* WHY CHOOSE US */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <div className="section-tag purple reveal">Why Us</div>
            <h2 className="section-title reveal reveal-delay-1">Why <span className="grad">Choose</span> Mzazi Tech</h2>
            <p className="section-sub reveal reveal-delay-2">We deliver results, not promises. Here's what sets us apart.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4rem" }}>
            {why.map((w, i) => (
              <div key={w.title} className={`glass-card reveal reveal-delay-${(i % 3) + 1}`} style={{ textAlign: "center", padding: "2rem 1.5rem" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(180,0,255,0.1)", border: "1px solid rgba(180,0,255,0.28)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", margin: "0 auto 1rem", boxShadow: "0 0 20px rgba(180,0,255,0.12)" }}>{w.icon}</div>
                <div style={{ fontFamily: "Orbitron, monospace", fontSize: "0.85rem", fontWeight: 700, background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "0.5rem" }}>{w.title}</div>
                <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="glass-card reveal" style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid rgba(0,212,255,0.25)", boxShadow: "0 0 60px rgba(0,212,255,0.06)" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="section-tag">Ready?</div>
              <h2 className="section-title" style={{ margin: "0.5rem auto 1rem" }}>
                Start Your <span className="grad">Digital Journey</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: 500, margin: "0 auto 2rem" }}>
                Join 50+ clients already using Mzazi Tech solutions to power their businesses.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/whatsapp" className="btn-primary">🤖 Get Free Bot</Link>
                <Link href="/panel" className="btn-outline">🖥️ Buy a Panel</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
