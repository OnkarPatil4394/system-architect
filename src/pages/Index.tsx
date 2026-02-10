import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="divider section-container" />
      <About />
      <div className="divider section-container" />
      <Skills />
      <div className="divider section-container" />
      <Projects />
      <div className="divider section-container" />
      <Experience />
      <div className="divider section-container" />
      <Contact />
    </div>
  );
};

export default Index;
