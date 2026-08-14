"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { sections, type SectionId } from "@/lib/sections";

const ActiveSectionCtx = createContext<SectionId>("about");

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<SectionId>("about");
  const ratios = useRef<Map<SectionId, number>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.current.set(
            entry.target.id as SectionId,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        }
        let best: SectionId | null = null;
        let bestRatio = 0;
        for (const s of sections) {
          const r = ratios.current.get(s.id) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            best = s.id;
          }
        }
        if (best) setActive(best);
      },
      { threshold: [0.15, 0.3, 0.5, 0.7, 0.9], rootMargin: "-72px 0px -20% 0px" }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ActiveSectionCtx.Provider value={active}>
      {children}
    </ActiveSectionCtx.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionCtx);
}

export function goToSection(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
