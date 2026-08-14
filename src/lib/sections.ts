export type SectionId =
  | "about"
  | "experience"
  | "skills"
  | "education"
  | "contact";

export const sections: {
  id: SectionId;
  fileName: string;
  label: string;
  ext: string;
  color: string;
}[] = [
  { id: "about", fileName: "about.tsx", label: "About", ext: "TSX", color: "var(--syn-func)" },
  { id: "experience", fileName: "experience.log", label: "Experience", ext: "LOG", color: "var(--syn-number)" },
  { id: "skills", fileName: "skills.json", label: "Skills", ext: "JSON", color: "var(--syn-string)" },
  { id: "education", fileName: "education.md", label: "Education", ext: "MD", color: "var(--syn-keyword)" },
  { id: "contact", fileName: "contact.sh", label: "Contact", ext: "SH", color: "var(--syn-tag)" },
];
