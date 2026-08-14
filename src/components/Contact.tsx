"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import SectionHeading from "./ui/SectionHeading";
import { profile } from "@/lib/data";

const contactRows = [
  { icon: Mail, label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "phone", value: profile.phone, href: `tel:+62${profile.phone.slice(1)}` },
  { icon: MapPin, label: "location", value: profile.location, href: undefined },
];

const socials = [
  { href: profile.github, icon: GithubIcon, label: "github" },
  { href: profile.linkedin, icon: LinkedinIcon, label: "linkedin" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="contact.sh"
          title="Mari berkolaborasi"
          description="Terbuka untuk peluang kerja, magang, maupun proyek freelance seputar pengembangan web & mobile."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-border bg-[#08080d]"
        >
          <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
            <div className="window-dots flex gap-1.5">
              <span style={{ background: "#ff5f56" }} />
              <span style={{ background: "#ffbd2e" }} />
              <span style={{ background: "#27c93f" }} />
            </div>
            <span className="ml-2 font-mono text-xs text-muted">
              zsh — contact.sh
            </span>
          </div>

          <div className="p-5 font-mono text-[13px] sm:text-sm sm:p-8">
            <p>
              <span className="text-accent-2">$</span>{" "}
              <span className="text-foreground">./contact.sh --run</span>
            </p>
            <p className="mt-2 text-syn-comment">
              {"// terbuka untuk kolaborasi, magang & pekerjaan fulltime"}
            </p>

            <div className="mt-6 space-y-3">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-center gap-x-3 gap-y-1"
                >
                  <row.icon size={14} className="shrink-0 text-accent-2" />
                  <span className="text-muted">{row.label}:</span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-foreground">{row.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-accent-2">$</span>
              <span className="text-foreground">open --socials</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-muted transition-colors hover:border-accent hover:text-foreground"
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg bg-foreground px-5 py-2.5 font-mono text-sm font-medium text-background transition-transform hover:scale-105"
              >
                $ send-email
              </a>
              <span className="caret text-accent-2" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
