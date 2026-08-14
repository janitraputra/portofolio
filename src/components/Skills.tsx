"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { CodeFrame, CodeLine, str } from "@/components/ui/CodeFrame";
import { languages, skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="skills.json"
          title="Keahlian & Tools"
          description="Bahasa pemrograman, framework, dan tools yang saya gunakan sehari-hari untuk membangun produk digital."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <CodeFrame title="skills.json">
            <CodeLine n={1}>{"{"}</CodeLine>
            {skillGroups.map((group, gi) => (
              <CodeLine key={group.title} n={gi + 2} indent={1}>
                <span className={str}>
                  &quot;{group.title.toLowerCase().replace(/[^a-z]+/g, "_")}&quot;
                </span>
                : [
                {group.items.map((item, i) => (
                  <span key={item}>
                    <span className={str}>&quot;{item}&quot;</span>
                    {i < group.items.length - 1 ? ", " : ""}
                  </span>
                ))}
                ]{gi < skillGroups.length - 1 ? "," : ""}
              </CodeLine>
            ))}
            <CodeLine n={skillGroups.length + 2}>{"}"}</CodeLine>
          </CodeFrame>
        </motion.div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-display text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 rounded-2xl border border-border bg-surface p-6"
        >
          <h3 className="font-display text-sm font-semibold text-foreground">
            Bahasa
          </h3>
          <div className="mt-5 space-y-5">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-foreground">{lang.name}</span>
                  <span className="text-muted">{lang.level}</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-background">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
