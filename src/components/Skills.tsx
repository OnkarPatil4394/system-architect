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
        <p className="section-heading">// Skills</p>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
