"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading eyebrow="education.md" title="Latar Belakang Pendidikan" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div className="flex items-center gap-2 border-b border-border px-5 py-3 font-mono text-xs text-muted">
            <GraduationCap size={13} />
            education.md — preview
          </div>

          <div className="p-6 sm:p-8">
            <p className="font-mono text-xs text-syn-comment">### institution</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              {education.institution}
            </h3>
            <p className="mt-1 text-sm text-muted">{education.location}</p>

            <div className="mt-6 space-y-2 font-mono text-sm">
              <p className="text-muted">
                <span className="text-accent-2">-</span> degree:{" "}
                <span className="text-foreground">{education.degree}</span>
              </p>
              <p className="text-muted">
                <span className="text-accent-2">-</span> period:{" "}
                <span className="text-foreground">{education.period}</span>
              </p>
            </div>

            <blockquote className="mt-6 rounded-r-lg border-l-2 border-accent bg-background/60 py-3 pl-4 pr-4">
              <p className="font-mono text-xs text-syn-comment">&gt; GPA</p>
              <p className="mt-1 font-display text-xl font-semibold text-foreground">
                {education.gpa}
              </p>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
