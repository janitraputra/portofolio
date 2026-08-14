"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14 max-w-2xl"
    >
      <span className="font-mono text-sm text-accent-2 tracking-wider">
        {`// ${eyebrow}`}
      </span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-muted leading-relaxed">{description}</p>
      ) : null}
    </motion.div>
  );
}
