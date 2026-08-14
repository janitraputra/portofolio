"use client";

import { motion } from "framer-motion";
import { CodeFrame, CodeLine, kw, str, num, cm } from "@/components/ui/CodeFrame";
import ProfilePhoto from "@/components/ProfilePhoto";
import { profile } from "@/lib/data";
import { goToSection } from "@/components/shell/ActiveSectionContext";

const focusAreas = [
  "Fullstack Development",
  "Mobile Development",
  "Database & Algorithms",
  "OOP & Cybersecurity Basics",
];

const stats = [
  { value: "8", label: "Bahasa & Tools Inti" },
  { value: "5+", label: "Framework Utama" },
  { value: "2025", label: "Lulus (Expected)" },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent-2"
        >
          {"// about.tsx"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-foreground"
        >
          Saya menulis kode yang{" "}
          <span className="gradient-text">rapi, jelas, dan berdampak.</span>
        </motion.h1>

        <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <CodeFrame title="developer.ts">
              <CodeLine n={1}>
                <span className={kw}>const</span> developer = {"{"}
              </CodeLine>
              <CodeLine n={2} indent={1}>
                name: <span className={str}>&quot;{profile.name}&quot;</span>,
              </CodeLine>
              <CodeLine n={3} indent={1}>
                role: <span className={str}>&quot;Fullstack Web Developer&quot;</span>,
              </CodeLine>
              <CodeLine n={4} indent={1}>
                status: <span className={str}>&quot;open_to_work&quot;</span>,
              </CodeLine>
              <CodeLine n={5} indent={1}>
                location: <span className={str}>&quot;{profile.location}&quot;</span>,
              </CodeLine>
              <CodeLine n={6} indent={1}>
                graduate: <span className={num}>true</span>,{" "}
                <span className={cm}>{"// IT, UMY 2025"}</span>
              </CodeLine>
              <CodeLine n={7} indent={1}>
                coreStack: [
                <span className={str}>&quot;Laravel&quot;</span>,{" "}
                <span className={str}>&quot;React.js&quot;</span>,{" "}
                <span className={str}>&quot;Flutter&quot;</span>],
              </CodeLine>
              <CodeLine n={8}>{"};"}</CodeLine>
            </CodeFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <div className="window-dots flex gap-1.5">
                  <span style={{ background: "#ff5f56" }} />
                  <span style={{ background: "#ffbd2e" }} />
                  <span style={{ background: "#27c93f" }} />
                </div>
                <span className="ml-2 truncate font-mono text-xs text-muted">
                  chendy.jpg — preview
                </span>
              </div>
              <div className="relative aspect-[4/5] w-full">
                <ProfilePhoto />
              </div>
            </div>
            <p className="mt-3 font-mono text-xs text-muted">
              <span className="text-syn-comment">{"// currently building"}</span>{" "}
              <span className="text-accent-2">EduLearnt</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 max-w-3xl"
        >
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>

          <p className="mt-6 overflow-x-auto whitespace-pre font-mono text-xs text-muted sm:text-sm">
            <span className={kw}>type</span> Focus ={" "}
            {focusAreas.map((f, i) => (
              <span key={f}>
                <span className={str}>&quot;{f}&quot;</span>
                {i < focusAreas.length - 1 ? " | " : ";"}
              </span>
            ))}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => goToSection("experience")}
              className="rounded-lg bg-foreground px-5 py-2.5 font-mono text-sm font-medium text-background transition-transform hover:scale-105"
            >
              $ view-experience
            </button>
            <button
              onClick={() => goToSection("contact")}
              className="rounded-lg border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              $ contact-me
            </button>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
