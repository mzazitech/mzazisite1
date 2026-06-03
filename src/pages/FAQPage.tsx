import { useEffect, useState } from "react";
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

const faqs = [
  {
    category: "General",
    icon: "ℹ️",
    items: [
      { q: "What is Mzazi Tech Inc?", a: "Mzazi Tech Inc is a Kenyan technology company founded by a developer known as Mzazi. We specialize in WhatsApp bot development, Pterodactyl panel hosting, web development, automation solutions, and API services." },
      { q: "How do I contact Mzazi Tech?", a: "The fastest way is WhatsApp at +254108595201. We also have Telegram and GitHub. WhatsApp responses are typically within 5 minutes." },
      { q: "Do you work with international clients?", a: "Yes! We work with clients across the world. Payments in KES are preferred for local clients, but we can accommodate international arrangements." },
      { q: "What makes Mzazi Tech different?", a: "We combine fast delivery, affordable pricing, and real human support. We genuinely care about our clients' success — not just completing a transaction." },
    ],
  },
  {
    category: "WhatsApp Bots",
    icon: "🤖",
    items: [
      { q: "Is the WhatsApp bot really free?", a: "Yes, 100% free. We set up and deploy your WhatsApp bot at no cost. There are no hidden fees or subscriptions. Just message us and we'll get it running." },
      { q: "What devices/number can I use for the bot?", a: "The bot supports multi-device mode, so you can use any WhatsApp number. You can even run multiple bots on different numbers simultaneously." },
      { q: "Can I customize the bot commands?", a: "Yes. We can customize the bot to include your own commands, response templates, welcome messages, and AI personalities based on your requirements." },
      { q: "Does the bot work for groups?", a: "Absolutely. The bot includes full group management features: anti-spam, anti-link, welcome/goodbye messages, admin tools, mute/kick, and activity tracking." },
      { q: "How long does setup take?", a: "Usually within a few hours of your request. Just message us and we'll have your bot running the same day in most cases." },
      { q: "What happens if the bot goes offline?", a: "We provide support to get it back online. For long-term reliability, we recommend our Pterodactyl hosting panel to keep the bot running 24/7." },
    ],
  },
  {
    category: "Pterodactyl Panels",
    icon: "🖥️",
    items: [
      { q: "What is a Pterodactyl panel?", a: "Pterodactyl is a free, open-source game server management panel. It lets you host and manage Minecraft, Node.js bots, Python scripts, and more through a beautiful web interface." },
      { q: "What's the difference between the three plans?", a: "Unlimited Server (KES 100) gives you a basic panel with unlimited server installations. Unlimited Premium (KES 150) adds higher performance and priority support. Admin Panel (KES 300) gives you full admin access to create users and manage everything." },
      { q: "Is this a one-time payment or monthly?", a: "It's a one-time payment with lifetime access. No subscriptions, no monthly fees." },
      { q: "How long until my panel is ready?", a: "Setup is completed within 24 hours of payment confirmation. Usually much faster." },
      { q: "Can I host my WhatsApp bot on the panel?", a: "Yes! Many clients use our Pterodactyl panels specifically to keep their WhatsApp bots running 24/7 on a stable server environment." },
      { q: "What types of servers can I run?", a: "Minecraft (Java & Bedrock), Node.js apps, Python scripts, Discord bots, WhatsApp bots, and any custom application with a supported Pterodactyl egg." },
    ],
  },
  {
    category: "Payments",
    icon: "💸",
    items: [
      { q: "How do I pay for services?", a: "We accept M-Pesa (Kenya), and other local payment methods. All payment details are shared via WhatsApp after you place your order." },
      { q: "Do you offer refunds?", a: "We work hard to ensure you're satisfied. If there's an issue with delivery or setup, we'll resolve it. Contact us on WhatsApp to discuss any concerns." },
      { q: "Can I upgrade my panel plan later?", a: "Yes. You pay the difference to upgrade. For example, upgrading from Unlimited (KES 100) to Admin Panel (KES 300) costs KES 200." },
    ],
  },
  {
    category: "Support",
    icon: "🛠️",
    items: [
      { q: "What kind of after-sale support do you offer?", a: "We offer ongoing WhatsApp support for all clients. For bot issues, panel problems, or configuration help — just message us and we'll assist." },
      { q: "Do you provide documentation?", a: "Yes. After setup, we provide documentation and a list of commands or admin guides depending on your product." },
      { q: "Can you build custom features?", a: "Definitely. Custom bots, web apps, APIs, and automations are all available. Message us with your idea and we'll give you a quote." },
    ],
  },
];

function FAQSection({ cat }: { cat: typeof faqs[0] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div style={{ marginBottom: "3rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.2rem" }}>
        <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
        <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "1rem", fontWeight: 800, background: "var(--gradient-main)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{cat.category}</h3>
      </div>
      {cat.items.map((item, i) => (
        <div key={i} className={`faq-item${openIdx === i ? " open" : ""}`}>
          <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            {item.q}
            <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="section-tag reveal">Help Center</div>
          <h1 className="page-hero-title reveal reveal-delay-1">
            Frequently <span className="grad">Asked Questions</span>
          </h1>
          <p className="page-hero-sub reveal reveal-delay-2">
            Everything you need to know about our bots, panels, pricing, and support. Still have questions? Just ask on WhatsApp.
          </p>
        </div>
      </section>

      <div className="glow-divider" />

      {/* FAQ SECTIONS */}
      <section className="section-pad">
        <div className="container">
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            {faqs.map((cat) => (
              <FAQSection key={cat.category} cat={cat} />
            ))}
          </div>

          {/* STILL HAVE QUESTIONS */}
          <div className="glass-card reveal" style={{ maxWidth: 600, margin: "2rem auto 0", textAlign: "center", padding: "3rem 2rem", border: "1px solid rgba(0,212,255,0.22)" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💬</div>
              <h3 style={{ fontFamily: "Orbitron, monospace", fontSize: "1rem", fontWeight: 800, marginBottom: "0.6rem" }}>Still Have Questions?</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "1.8rem", lineHeight: 1.7 }}>
                Our team is always available on WhatsApp. Send us a message and we'll reply within minutes.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://wa.me/254108595201?text=Hello%20Mzazi%20Tech,%20I%20have%20a%20question" target="_blank" rel="noopener noreferrer" className="btn-wa">Ask on WhatsApp</a>
                <Link href="/contact" className="btn-outline">View All Contacts</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
