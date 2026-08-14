import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chendy Lundy Janitra Putra Ashari — Fullstack Web Developer",
  description:
    "Portofolio Chendy Lundy Janitra Putra Ashari, fresh graduate Teknologi Informasi & Fullstack Web Developer yang berfokus pada Laravel, React.js, dan pengembangan aplikasi mobile & web.",
  keywords: [
    "Chendy Lundy Janitra Putra Ashari",
    "Fullstack Developer",
    "Laravel",
    "React.js",
    "Portfolio",
  ],
  authors: [{ name: "Chendy Lundy Janitra Putra Ashari" }],
  openGraph: {
    title: "Chendy Lundy Janitra Putra Ashari — Fullstack Web Developer",
    description:
      "Portofolio pribadi: proyek, pengalaman, dan keahlian dalam pengembangan web & mobile.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-bg">{children}</body>
    </html>
  );
}
