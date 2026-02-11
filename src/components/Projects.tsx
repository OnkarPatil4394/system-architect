import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionAccordion from "@/components/SectionAccordion";

interface Project {
  title: string;
  problem: string;
  approach: string;
  technologies: string[];
  outcome: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "BLDC Motor Controller",
    problem:
      "Existing open-loop motor drivers for small robotics lacked precise speed regulation under variable load conditions.",
    approach:
      "Designed a closed-loop BLDC controller with Hall-effect feedback, implementing a PID algorithm on STM32. Custom PCB with integrated gate drivers and current sensing.",
    technologies: ["STM32", "KiCad", "Embedded C", "PID Control"],
    outcome:
      "Achieved ±2% speed accuracy under 80% load variation. Reduced component count by 30% over reference design.",
  },
  {
    title: "IoT Environmental Monitor",
    problem:
      "Campus lab environments lacked real-time monitoring for temperature, humidity, and air quality — impacting sensitive equipment calibration.",
    approach:
      "Built a mesh network of ESP32 sensor nodes communicating over MQTT to a central dashboard. Implemented OTA firmware updates and watchdog timers for reliability.",
    technologies: ["ESP32", "MQTT", "Python", "FreeRTOS", "Grafana"],
    outcome:
      "Deployed 12-node network with 99.7% uptime over 3-month pilot. Data used to optimize HVAC scheduling.",
  },
  {
    title: "FPGA-Based Signal Processor",
    problem:
      "Software-based FFT processing introduced unacceptable latency for a real-time audio classification pipeline.",
    approach:
      "Implemented a pipelined 1024-point FFT on Xilinx Artix-7 FPGA using Verilog. Designed testbenches for functional verification and timing closure.",
    technologies: ["Verilog", "Vivado", "FPGA", "DSP"],
    outcome:
      "Reduced processing latency from 12ms to 0.8ms. Successfully classified 5 audio categories with 94% accuracy.",
  },
  {
    title: "Li-Ion Battery Management System",
    problem:
      "Custom battery packs for a solar-powered rover needed cell balancing and protection without commercial BMS modules.",
    approach:
      "Designed passive cell-balancing circuitry with over-voltage/under-voltage protection. Firmware monitors SOC via coulomb counting on ATmega328.",
    technologies: ["Altium", "ATmega328", "Power Electronics", "LTspice"],
    outcome:
      "Extended pack cycle life by ~20%. System passed all safety thresholds in 48-hour stress testing.",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start justify-between text-left cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </motion.span>
        </div>
      </button>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-3 text-sm mt-4 pt-4 border-t border-border">
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Problem
                </span>
                <p className="text-secondary-foreground mt-1">{project.problem}</p>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Approach
                </span>
                <p className="text-secondary-foreground mt-1">{project.approach}</p>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Outcome
                </span>
                <p className="text-secondary-foreground mt-1">{project.outcome}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title="// Projects" defaultOpen>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ScrollReveal key={index} delay={0.05 + index * 0.08}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </SectionAccordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
