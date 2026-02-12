import ScrollReveal from "@/components/ScrollReveal";
import SectionAccordion from "@/components/SectionAccordion";
import { useLanguage } from "@/i18n/LanguageContext";

const experiences = [
  {
    categoryKey: "academic" as const,
    items: [
      {
        title: "B.Tech Electrical Engineering",
        org: "Dr. D.Y. Patil Pratishthan's College of Engineering, Kolhapur (Shivaji University)",
        period: "2023 – Present",
        detail: "3rd year. Focus areas: Embedded Systems, Digital Electronics, Power Electronics. Active in hands-on IoT and automation projects.",
      },
      {
        title: "SSC (Secondary School Certificate)",
        org: "Adarsh Gurukul Vidyalay Va JR. College, Peth Vadgaon",
        period: "2020 – 2021",
        detail: "Completed with 92.6% — strong foundation in mathematics and science.",
      },
    ],
  },
  {
    categoryKey: "labsResearch" as const,
    items: [
      {
        title: "Embedded System Design",
        org: "SkillDzire",
        period: "Aug 2025",
        detail: "Certified course covering ARM architecture, microcontroller programming, and hardware-software integration. Credential ID: SD-100177.",
      },
      {
        title: "MATLAB Onramp",
        org: "MathWorks",
        period: "Nov 2024",
        detail: "Official MathWorks certification covering MATLAB fundamentals for engineering computation and data analysis.",
      },
      {
        title: "Google Cloud Gemini & Imagen Skill Badge",
        org: "Google Cloud",
        period: "2024",
        detail: "Earned skill badge for building real-world AI applications with Gemini and Imagen on Google Cloud platform.",
      },
    ],
  },
  {
    categoryKey: "certifications" as const,
    items: [
      {
        title: "Java DevOps and Programming",
        org: "SkillAcademy (Testbook)",
        period: "2023",
        detail: "Bootcamp covering Java fundamentals, DevOps workflows, and programming best practices.",
      },
    ],
  },
];

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title={t("sectionExperience")} defaultOpen>
            <div className="space-y-10">
              {experiences.map((group) => (
                <div key={group.categoryKey}>
                  <h3 className="font-mono text-sm font-medium text-foreground mb-4">
                    {t(group.categoryKey)}
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