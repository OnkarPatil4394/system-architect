import ScrollReveal from "@/components/ScrollReveal";
import SectionAccordion from "@/components/SectionAccordion";
import { useLanguage } from "@/i18n/LanguageContext";

const skillCategories = [
  {
    titleKey: "hardware" as const,
    skills: [
      "Circuit Design & Analysis",
      "Relay & Sensor Interfacing",
      "PCB Basics (KiCad)",
      "Power Electronics",
      "Digital Electronics",
      "Motor Control",
    ],
  },
  {
    titleKey: "software" as const,
    skills: [
      "Embedded C / Arduino",
      "Python",
      "MATLAB / Simulink",
      "FreeRTOS Basics",
      "Serial Protocols (I2C, SPI, UART)",
      "Java Fundamentals",
    ],
  },
  {
    titleKey: "toolsPlatforms" as const,
    skills: [
      "ESP32 / Arduino UNO",
      "ESP RainMaker (IoT Cloud)",
      "Google Cloud (Gemini & Imagen)",
      "Git & GitHub",
      "LTspice",
      "MATLAB Onramp",
    ],
  },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title={t("sectionSkills")} defaultOpen>
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category) => (
                <div key={category.titleKey}>
                  <h3 className="font-mono text-sm font-medium text-foreground mb-4">
                    {t(category.titleKey)}
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
          </SectionAccordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;