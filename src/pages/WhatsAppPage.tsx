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

const features = [
  { icon: "📱", title: "Multi-Device Support", desc: "Run your bot across multiple WhatsApp accounts and devices simultaneously without any issues." },
  { icon: "👥", title: "Group Management", desc: "Add/remove members, set admins, mute groups, anti-spam, anti-link, and full moderation tools." },
  { icon: "🤖", title: "AI Integration", desc: "Powered by GPT-based AI for intelligent auto-replies, smart responses, and natural conversations." },
  { icon: "⚡", title: "Auto Responses", desc: "Instant keyword-triggered responses, welcome messages, and customizable reply templates." },
  { icon: "📥", title: "Media Downloader", desc: "Download YouTube, TikTok, Instagram, Twitter videos and audio directly through WhatsApp." },
  { icon: "🛠️", title: "Utility Commands", desc: "50+ commands: weather, calculator, translator, sticker maker, image generator, and more." },
  { icon: "🔒", title: "Anti-Spam & Flood", desc: "Built-in spam detection and flood protection to keep your groups clean and fast." },
  { icon: "📊", title: "Stats & Analytics", desc: "Track message counts, active users, command usage, and group activity over time." },
];

const steps = [
  { num: "01", title: "Message Us", desc: "Send us a WhatsApp message expressing interest. We'll respond within minutes." },
  { num: "02", title: "Setup & Config", desc: "We deploy and configure your bot with custom settings tailored to your needs." },
  { num: "03", title: "Go Live", desc: "Your bot is live and running. We provide documentation and ongoing support." },
];

const commands = [
  { cmd: ".ai Hello, who are you?", out: "I am your AI assistant powered by GPT. How can I help? ✨" },
  { cmd: ".ytmp3 https://youtube.com/...", out: "⬇️ Downloading audio... Done! Here is your MP3 file." },
  { cmd: ".sticker", out: "🎨 Converting image to sticker... Sent!" },
  { cmd: ".weather Nairobi", out: "🌤️ Nairobi: 24°C, Partly Cloudy. Wind: 12km/h" },
  { cmd: ".translate en sw Hello", out: "✅ Translation: Habari" },
];

export default function WhatsAppPage() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="section-tag reveal">100% Free</div>
          <h1 className="page-hero-title reveal reveal-delay-1">
            <span className="grad">WhatsApp Bot</span> Solutions
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            Powerful, intelligent, multi-device WhatsApp bots with AI, media downloading, group management, and 50+ utility commands — completely free.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20want%20a%20free%20WhatsApp%20Bot" target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ fontSize: "1rem", padding: "0.9rem 2.2rem" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.784a.5.5 0 00.609.625l6.098-1.598A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.851 9.851 0 01-5.028-1.373l-.36-.214-3.73.977.996-3.635-.235-.373A9.856 9.856 0 012.107 12C2.107 6.532 6.532 2.107 12 2.107S21.893 6.532 21.893 12 17.468 21.894 12 21.894z"/></svg>
              Get Your Free Bot
            </a>
            <Link href="/faq" className="btn-outline">View FAQ</Link>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* FEATURES */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div className="section-tag reveal">Features</div>
            <h2 className="section-title reveal reveal-delay-1">Everything Your Bot <span className="grad">Can Do</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.4rem" }}>
            {features.map((f, i) => (
              <div key={f.title} className={`glass-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.8rem", filter: "drop-shadow(0 0 10px rgba(0,212,255,0.5))" }}>{f.icon}</div>
                  <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "0.88rem", fontWeight: 700, marginBottom: "0.5rem", background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{f.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* TERMINAL DEMO */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg,transparent,rgba(0,212,255,0.02),transparent)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="section-tag reveal">Live Demo</div>
              <h2 className="section-title reveal reveal-delay-1">See the Bot <span className="grad">In Action</span></h2>
              <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: "2rem" }}>
                Type a command and get instant intelligent responses. The bot understands natural language and executes commands at lightning speed.
              </p>
              <a href="https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20want%20a%20free%20WhatsApp%20Bot" target="_blank" rel="noopener noreferrer" className="btn-wa reveal reveal-delay-3">Get This Bot Free →</a>
            </div>
            <div className="terminal reveal reveal-delay-2">
              <div className="terminal-bar">
                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
                <div className="terminal-dot" style={{ background: "#28c840" }} />
                <span style={{ marginLeft: "0.5rem", fontSize: "0.75rem", color: "rgba(200,220,255,0.4)" }}>WhatsApp Bot — Live</span>
              </div>
              <div className="terminal-body">
                {commands.map((c, i) => (
                  <div key={i} style={{ marginBottom: "0.4rem" }}>
                    <div><span className="terminal-prompt">user: </span><span className="terminal-cmd">{c.cmd}</span></div>
                    <div className="terminal-out terminal-green">{c.out}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* HOW IT WORKS */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div className="section-tag reveal">Process</div>
            <h2 className="section-title reveal reveal-delay-1">How It <span className="grad">Works</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {steps.map((s, i) => (
              <div key={s.num} className={`glass-card reveal reveal-delay-${i + 1}`} style={{ textAlign: "center", padding: "2.5rem 1.8rem" }}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontFamily: "Orbitron, monospace", fontSize: "3rem", fontWeight: 900, background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "1rem", opacity: 0.6 }}>{s.num}</div>
                  <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "0.9rem", fontWeight: 800, marginBottom: "0.6rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="glass-card reveal" style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid rgba(37,211,102,0.25)", boxShadow: "0 0 60px rgba(37,211,102,0.05)" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎉</div>
              <h2 className="section-title" style={{ marginBottom: "0.8rem" }}>It's Completely <span style={{ color: "var(--neon-green)" }}>FREE</span></h2>
              <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto 2rem", fontSize: "0.95rem" }}>
                No hidden fees, no subscriptions. Just message us on WhatsApp and we'll set up your bot for free.
              </p>
              <a href="https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20want%20a%20free%20WhatsApp%20Bot" target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ fontSize: "1rem", padding: "0.95rem 2.5rem" }}>
                Chat on WhatsApp Now →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
