import ScrollReveal from "@/components/ScrollReveal";
import SectionAccordion from "@/components/SectionAccordion";

const experiences = [
  {
    category: "Academic",
    items: [
      {
        title: "B.E. Electrical Engineering",
        org: "University of Engineering & Technology",
        period: "2021 – 2025",
        detail:
          "Focus areas: Power Systems, Embedded Systems, Digital Signal Processing. Dean's List — 3 semesters.",
      },
    ],
  },
  {
    category: "Labs & Research",
    items: [
      {
        title: "Embedded Systems Lab",
        org: "Dept. of Electrical Engineering",
        period: "2023 – 2024",
        detail:
          "Developed firmware for sensor interfacing and motor control. Contributed to lab infrastructure for 200+ students.",
      },
      {
        title: "Power Electronics Research Group",
        org: "University R&D Cell",
        period: "2024",
        detail:
          "Investigated wide-bandgap semiconductor switching characteristics for EV inverter applications.",
      },
    ],
  },
  {
    category: "Certifications",
    items: [
      {
        title: "Embedded Systems Design",
        org: "NPTEL / IIT Kharagpur",
        period: "2023",
        detail: "Elite certification. Covered ARM architecture, RTOS, and peripheral interfacing.",
      },
      {
        title: "PCB Design with KiCad",
        org: "Udemy",
        period: "2023",
        detail: "Multi-layer PCB design, DFM considerations, and Gerber generation.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title="// Experience & Learning" defaultOpen>
            <div className="space-y-10">
              {experiences.map((group) => (
                <div key={group.category}>
                  <h3 className="font-mono text-sm font-medium text-foreground mb-4">
                    {group.category}
                  </h3>
                  <div className="space-y-4">
                    {group.items.map((item, i) => (
                      <div
                        key={i}
                        className="pl-4 border-l-2 border-border hover:border-primary/50 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                          <h4 className="text-sm font-medium text-foreground">
                            {item.title}
                          </h4>
                          <span className="font-mono text-xs text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">
                          {item.org}
                        </p>
                        <p className="text-sm text-secondary-foreground">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionAccordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
