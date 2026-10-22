"use client";

import { useEffect } from "react";

function PhotoDrift() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const photos = () => document.querySelectorAll<HTMLElement>(".hero-media, .band > img");
    const clear = () => photos().forEach((img) => { img.style.transform = ""; });
    if (media.matches) {
      clear();
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const view = window.innerHeight;
      photos().forEach((img) => {
        const parent = img.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        const progress = (view - rect.top) / (view + rect.height);
        const clamped = Math.min(1, Math.max(0, progress));
        const shift = (clamped - 0.5) * 6;
        img.style.transform = `translate3d(0, ${shift.toFixed(2)}%, 0)`;
      });
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    const onMotion = () => {
      if (media.matches) clear();
      else update();
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    media.addEventListener("change", onMotion);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      media.removeEventListener("change", onMotion);
      if (frame) window.cancelAnimationFrame(frame);
      clear();
    };
  }, []);
  return null;
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-enter">
      <PhotoDrift />
      {children}
    </div>
  );
}
