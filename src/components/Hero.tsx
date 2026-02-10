import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-container pt-14">
      <div className="space-y-6">
        <p className="font-mono text-sm text-muted-foreground tracking-wide">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
          Alex Chen
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-primary" />
          <p className="font-mono text-sm md:text-base text-primary">
            Electrical Engineer · Embedded &amp; Systems
          </p>
        </div>
        <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
          Building reliable hardware–software interfaces for next-generation integrated systems.
        </p>
      </div>

      <a
        href="#about"
        className="mt-24 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-xs tracking-wider"
      >
        SCROLL
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
