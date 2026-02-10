import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-container pt-14">
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-muted-foreground tracking-wide"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]"
        >
          Alex Chen
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-px bg-primary" />
          <p className="font-mono text-sm md:text-base text-primary">
            Electrical Engineer · Embedded &amp; Systems
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
        >
          Building reliable hardware–software interfaces for next-generation integrated systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="pt-4"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        href="#about"
        className="mt-24 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-xs tracking-wider"
      >
        SCROLL
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
