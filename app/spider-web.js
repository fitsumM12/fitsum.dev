"use client";

import { useEffect, useRef } from "react";

export function SpiderWebBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let reducedMotion = false;

    const mouse = { x: 0, y: 0 };
    const points = [];
    let cols = 0;
    let rows = 0;
    const spacing = 45;
    const drift = 5;
    const cursorRadius = 240;
    const lineRadius = 140;

    const buildGrid = () => {
      points.length = 0;
      cols = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(height / spacing) + 1;
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const px = x * spacing;
          const py = y * spacing;
          points.push({
            x: px,
            y: py,
            ox: px,
            oy: py,
            seed: Math.random() * 10
          });
        }
      }
      mouse.x = width * 0.5;
      mouse.y = height * 0.4;
    };

    const resize = () => {
      const nextDpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = nextDpr;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    };

    const updatePointer = (x, y) => {
      if (typeof x !== "number" || typeof y !== "number") return;
      mouse.x = x;
      mouse.y = y;
    };

    const handlePointer = (event) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handleTouch = (event) => {
      const touch = event.touches && event.touches[0];
      if (!touch) return;
      updatePointer(touch.clientX, touch.clientY);
    };

    const drawLine = (a, b, time) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy);
      if (dist > lineRadius) return;

      const mx = (a.x + b.x) * 0.5;
      const my = (a.y + b.y) * 0.5;
      const md = Math.hypot(mouse.x - mx, mouse.y - my);
      const focus = Math.max(0, 1 - md / cursorRadius);
      const alpha = 0.06 + focus * 0.28;

      ctx.strokeStyle = `rgba(69, 214, 182, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();

      if (focus > 0.1) {
        ctx.strokeStyle = `rgba(240, 180, 41, ${focus * 0.25})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        if (reducedMotion) {
          point.x = point.ox;
          point.y = point.oy;
          continue;
        }

        const wobbleX = Math.cos(time * 0.0008 + point.seed) * drift;
        const wobbleY = Math.sin(time * 0.0007 + point.seed) * drift;
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const dist = Math.hypot(dx, dy);
        const pull = dist < cursorRadius ? (1 - dist / cursorRadius) * 14 : 0;
        const angle = Math.atan2(dy, dx);

        const tx = point.ox + wobbleX + Math.cos(angle) * pull;
        const ty = point.oy + wobbleY + Math.sin(angle) * pull;

        point.x += (tx - point.x) * 0.08;
        point.y += (ty - point.y) * 0.08;
      }

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const index = row * cols + col;
          const p = points[index];
          if (!p) continue;
          if (col + 1 < cols) drawLine(p, points[index + 1], time);
          if (row + 1 < rows) drawLine(p, points[index + cols], time);
        }
      }

      raf = requestAnimationFrame(animate);
    };

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion = media.matches;
    const handleMotion = (event) => {
      reducedMotion = event.matches;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("pointerdown", handlePointer, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    media.addEventListener("change", handleMotion);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerdown", handlePointer);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      media.removeEventListener("change", handleMotion);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="spiderWeb" ref={canvasRef} aria-hidden="true" />;
}
