import { ExternalLink } from "lucide-react";

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

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <p className="section-heading">// Projects</p>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Problem
                  </span>
                  <p className="text-secondary-foreground mt-1">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Approach
                  </span>
                  <p className="text-secondary-foreground mt-1">
                    {project.approach}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Outcome
                  </span>
                  <p className="text-secondary-foreground mt-1">
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
