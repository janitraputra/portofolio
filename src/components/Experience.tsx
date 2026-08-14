"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  FolderGit2,
  GitCommitHorizontal,
  Users,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { experiences, projects } from "@/lib/data";
import { pseudoHash } from "@/lib/hash";

const typeIcon = {
  fulltime: Building2,
  internship: Briefcase,
  organization: Users,
} as const;

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="experience.log"
          title="Pengalaman & Proyek"
          description="Proyek freelance yang pernah saya kerjakan, serta perjalanan karier saya dari organisasi, magang, hingga posisi saat ini."
        />

        <div
          className={
            projects.length > 1
              ? "grid gap-6 lg:grid-cols-2 mb-14"
              : "mb-14"
          }
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-[90px]" />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 text-accent-2">
                    <FolderGit2 size={20} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {project.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-2/30 bg-accent-2/10 px-2.5 py-0.5 font-mono text-[11px] text-accent-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                        {project.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {project.role} · {project.period}
                    </p>
                  </div>
                </div>
              </div>

              <p className="relative mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-surface/40">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3 font-mono text-xs text-muted">
            <GitCommitHorizontal size={13} />
            git log --oneline --graph
          </div>

          <ul className="divide-y divide-border">
            {experiences.map((exp, i) => {
              const Icon = typeIcon[exp.type as keyof typeof typeIcon];
              return (
                <motion.li
                  key={exp.org}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
                    <span className="text-accent-2">
                      {pseudoHash(exp.org)}
                    </span>
                    {i === 0 && (
                      <span className="rounded border border-border px-1.5 py-0.5 text-[10px] text-foreground">
                        HEAD -&gt; main
                      </span>
                    )}
                    <span>{exp.period}</span>
                  </div>

                  <div className="mt-2 flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border text-accent-2">
                      <Icon size={15} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-accent-2">{exp.org}</p>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
