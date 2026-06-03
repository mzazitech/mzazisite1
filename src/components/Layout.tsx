import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
      size = Math.random() * 1.8 + 0.4;
      speedX = (Math.random() - 0.5) * 0.35;
      speedY = (Math.random() - 0.5) * 0.35;
      opacity = Math.random() * 0.45 + 0.1;
      color = Math.random() > 0.5 ? "#00d4ff" : "#b400ff";
      life = 0;
      maxLife = Math.random() * 220 + 100;

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.life = 0;
        this.maxLife = Math.random() * 220 + 100;
        this.color = Math.random() > 0.5 ? "#00d4ff" : "#b400ff";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height || this.life > this.maxLife) {
          this.reset();
        }
      }

      draw() {
        const fade = Math.min(this.life / 30, 1) * Math.min((this.maxLife - this.life) / 30, 1);
        ctx.save();
        ctx.globalAlpha = this.opacity * fade;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particles = Array.from({ length: 110 }, () => new Particle());

    let raf: number;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 90) * 0.07;
            ctx.strokeStyle = "#00d4ff";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
}

function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loader-wrap${hidden ? " hidden" : ""}`}>
      <div className="loader-logo">MZAZI TECH INC</div>
      <div className="loader-track"><div className="loader-fill" /></div>
      <div className="loader-sub">Initializing systems…</div>
    </div>
  );
}

function ScrollTopBtn() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      id="scroll-top"
      className={visible ? "visible" : ""}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Loader />
      <ParticleCanvas />
      <Navbar />
      <div className="page-wrapper">{children}</div>
      <Footer />
      <ScrollTopBtn />
    </>
  );
}
