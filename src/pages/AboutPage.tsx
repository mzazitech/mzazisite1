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

const values = [
  { icon: "🌍", title: "Accessibility", desc: "Technology should be available to everyone, regardless of budget or location." },
  { icon: "⚡", title: "Innovation", desc: "We constantly explore new tools, frameworks, and approaches to stay ahead." },
  { icon: "🤝", title: "Community", desc: "We believe in giving back — free tools, open-source, and helping the local tech community." },
  { icon: "🔒", title: "Security", desc: "Every solution we build is designed with security as a core requirement, not an afterthought." },
  { icon: "💡", title: "Creativity", desc: "We approach every problem with a creative lens to build elegant, effective solutions." },
  { icon: "📈", title: "Growth", desc: "We grow with our clients — their success is our success, and we're invested in it." },
];

const timeline = [
  { year: "2022", event: "Founded", desc: "Mzazi Tech Inc was born from a passion for WhatsApp automation and helping Kenyan SMEs." },
  { year: "2023", event: "First 20 Clients", desc: "Expanded beyond bots into Pterodactyl hosting and custom web development." },
  { year: "2024", event: "API Services Launch", desc: "Launched public API services and automation tools used by developers across East Africa." },
  { year: "2025", event: "50+ Clients", desc: "Crossed 50 active clients. Started offering admin-level Pterodactyl panels and tech support." },
  { year: "2026", event: "Scaling Up", desc: "Expanding services, launching new products, and growing the team to serve more clients." },
];

const techStack = [
  "Node.js", "JavaScript", "Python", "WhatsApp Web.js", "Baileys", "Express.js",
  "React", "PostgreSQL", "Pterodactyl", "Ubuntu", "Nginx", "Docker",
];

export default function AboutPage() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="section-tag reveal">Our Story</div>
          <h1 className="page-hero-title reveal reveal-delay-1">
            About <span className="grad">Mzazi Tech Inc</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            A growing technology company founded by a passionate Kenyan developer on a mission to make powerful tech accessible to everyone.
          </p>
        </div>
      </section>

      <div className="glow-divider" />

      {/* FOUNDER INTRO */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="section-tag reveal">The Founder</div>
              <h2 className="section-title reveal reveal-delay-1">Meet <span className="grad">Mzazi</span></h2>
              <p className="reveal reveal-delay-2" style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.2rem", fontSize: "0.95rem" }}>
                Mzazi is a self-taught Kenyan developer with a deep passion for automation, open-source software, and making technology work for real people. Starting with WhatsApp bots built for personal use, the demand grew — and Mzazi Tech Inc was born.
              </p>
              <p className="reveal reveal-delay-3" style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.8rem", fontSize: "0.95rem" }}>
                The name "Mzazi" means <em style={{ color: "var(--neon-blue)" }}>parent/guardian</em> in Swahili — representing the company's commitment to nurturing ideas and helping clients grow their digital presence from the ground up.
              </p>
              <a href="https://wa.me/254108595201" target="_blank" rel="noopener noreferrer" className="btn-wa reveal reveal-delay-4">
                Chat with Mzazi →
              </a>
            </div>
            <div className="glass-card reveal reveal-delay-2" style={{ textAlign: "center", padding: "3rem 2rem" }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle at 40% 40%, rgba(0,212,255,0.4), rgba(180,0,255,0.3))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "3.5rem", boxShadow: "0 0 40px rgba(0,212,255,0.3)" }}>👨‍💻</div>
                <div style={{ fontFamily: "Orbitron, monospace", fontSize: "1.3rem", fontWeight: 800, background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Mzazi</div>
                <div style={{ fontSize: "0.82rem", color: "var(--neon-blue)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Founder & Lead Developer</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {["🇰🇪 Based in Kenya", "🤖 WhatsApp Bot Expert", "⚙️ Automation Specialist", "🌐 Full-Stack Developer"].map((t) => (
                    <div key={t} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", background: "rgba(0,212,255,0.05)", border: "1px solid rgba(0,212,255,0.1)", borderRadius: "8px", padding: "0.45rem 1rem" }}>{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* MISSION & VISION */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg,transparent,rgba(0,212,255,0.02),transparent)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div className="glass-card reveal reveal-delay-1" style={{ padding: "2.5rem", borderColor: "rgba(0,212,255,0.25)" }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎯</div>
                <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "1rem", fontWeight: 800, background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "1rem" }}>Our Mission</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.92rem" }}>
                  To make technology accessible, affordable, and powerful for everyone — from individual creators to growing businesses. We believe automation and smart digital tools should not be a luxury.
                </p>
              </div>
            </div>
            <div className="glass-card reveal reveal-delay-2" style={{ padding: "2.5rem", borderColor: "rgba(180,0,255,0.25)" }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔭</div>
                <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "1rem", fontWeight: 800, background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "1rem" }}>Our Vision</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.92rem" }}>
                  To become East Africa's most trusted tech company for automation, hosting, and digital solutions — empowering 1,000+ businesses and individuals to build smarter digital futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* TIMELINE */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <div className="section-tag reveal">History</div>
            <h2 className="section-title reveal reveal-delay-1">Our <span className="grad">Journey</span></h2>
          </div>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {timeline.map((t, i) => (
              <div key={t.year} className={`reveal reveal-delay-${(i % 3) + 1}`} style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <div style={{ flexShrink: 0, width: 70, textAlign: "right" }}>
                  <span style={{ fontFamily: "Orbitron, monospace", fontSize: "0.85rem", fontWeight: 800, background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{t.year}</span>
                </div>
                <div style={{ width: 2, background: "linear-gradient(180deg, var(--neon-blue), var(--neon-purple))", borderRadius: "99px", flexShrink: 0 }} />
                <div className="glass-card" style={{ flex: 1, padding: "1.2rem 1.5rem" }}>
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ fontFamily: "Orbitron, monospace", fontSize: "0.85rem", fontWeight: 700, color: "var(--neon-blue)", marginBottom: "0.3rem" }}>{t.event}</div>
                    <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{t.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* VALUES */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg,transparent,rgba(180,0,255,0.02),transparent)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <div className="section-tag purple reveal">Core Values</div>
            <h2 className="section-title reveal reveal-delay-1">What We <span className="grad">Stand For</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4rem" }}>
            {values.map((v, i) => (
              <div key={v.title} className={`glass-card reveal reveal-delay-${(i % 3) + 1}`} style={{ textAlign: "center", padding: "2rem 1.5rem" }}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: "2.2rem", marginBottom: "0.8rem" }}>{v.icon}</div>
                  <div style={{ fontFamily: "Orbitron, monospace", fontSize: "0.85rem", fontWeight: 700, background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "0.5rem" }}>{v.title}</div>
                  <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* TECH STACK */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div className="section-tag reveal">Technology</div>
            <h2 className="section-title reveal reveal-delay-1">Our <span className="grad">Tech Stack</span></h2>
            <p className="section-sub reveal reveal-delay-2">Tools and technologies we use to build world-class solutions.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "center" }} className="reveal reveal-delay-2">
            {techStack.map((t) => (
              <span key={t} style={{ padding: "0.5rem 1.2rem", background: "rgba(0,212,255,0.07)", border: "1px solid rgba(0,212,255,0.2)", borderRadius: "99px", fontSize: "0.84rem", fontWeight: 600, color: "var(--text-primary)", transition: "all 0.3s" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
