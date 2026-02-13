import ScrollReveal from "@/components/ScrollReveal";
import SectionAccordion from "@/components/SectionAccordion";
import { useLanguage } from "@/i18n/LanguageContext";

const education = [
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
];

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title={t("sectionExperience")} defaultOpen>
            <div className="space-y-4">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="pl-4 border-l-2 border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
                    <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{item.org}</p>
                  <p className="text-sm text-secondary-foreground">{item.detail}</p>
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
