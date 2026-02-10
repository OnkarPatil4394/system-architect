import ScrollReveal from "@/components/ScrollReveal";

const skillCategories = [
  {
    title: "Hardware",
    skills: [
      "Circuit Design & Analysis",
      "PCB Layout (KiCad, Altium)",
      "Signal Integrity",
      "Power Electronics",
      "FPGA (Verilog/VHDL)",
      "Oscilloscope & Logic Analyzer",
    ],
  },
  {
    title: "Software",
    skills: [
      "Embedded C / C++",
      "Python",
      "MATLAB / Simulink",
      "RTOS (FreeRTOS)",
      "Linux Kernel Basics",
      "Serial Protocols (I2C, SPI, UART)",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git & Version Control",
      "Docker",
      "STM32 / ESP32 / Arduino",
      "LTspice / PSPICE",
      "Cadence Virtuoso",
      "JIRA / Confluence",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-heading">// Skills</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={0.1 + i * 0.1}>
              <h3 className="font-mono text-sm font-medium text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
