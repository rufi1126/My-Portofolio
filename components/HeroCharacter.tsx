"use client";

import dynamic from "next/dynamic";
import { useCallback } from "react";
import type { Application } from "@splinetool/runtime";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="spline-loading">
      <div className="spline-spinner" />
      <p>Loading 3D Robot...</p>
    </div>
  ),
});

export default function HeroCharacter() {
  const hideWatermark = useCallback((app: Application) => {
    const timer = setInterval(() => {
      const el = document.querySelector(".hero-character-wrapper");
      if (!el) return;
      const bad = el.querySelectorAll(
        'a[href*="spline"], [class*="watermark"], [class*="Watermark"], [class*="branding"], [class*="credit"], [class*="logo"]'
      );
      bad.forEach((n) => {
        const wrapper = n.closest("div");
        if (wrapper && wrapper !== el) wrapper.style.display = "none";
        else (n as HTMLElement).style.display = "none";
      });
      if (bad.length > 0) clearInterval(timer);
    }, 500);
    setTimeout(() => clearInterval(timer), 10000);
  }, []);

  return (
    <div className="hero-character-wrapper">
      <Spline
        scene="https://prod.spline.design/DUBEkd7gs71gjVCS/scene.splinecode"
        className="robot-spline"
        onLoad={hideWatermark}
      />
    </div>
  );
}
