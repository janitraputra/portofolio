import AppShell from "@/components/shell/AppShell";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <AppShell>
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </AppShell>
  );
}
