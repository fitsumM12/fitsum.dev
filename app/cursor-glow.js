"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const update = () => {
      root.style.setProperty("--cursor-x", `${x}px`);
      root.style.setProperty("--cursor-y", `${y}px`);
      raf = 0;
    };

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (!raf) {
        raf = requestAnimationFrame(update);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    update();

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
