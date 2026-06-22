"use client";
import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, raf = 0;

    interface Particle { x: number; y: number; vx: number; vy: number; r: number; alpha: number; }
    const particles: Particle[] = [];

    function resize() {
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W;
      canvas!.height = H;
    }

    function spawn(): Particle {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        r: Math.random() * 1.2 + 0.4,
        alpha: Math.random() * 0.4 + 0.1,
      };
    }

    resize();
    for (let i = 0; i < 55; i++) particles.push(spawn());

    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,240,${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.0008;
        if (p.y < -5 || p.alpha <= 0) {
          Object.assign(p, spawn());
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} id="particles-canvas" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}
