import ScrollReveal from "@/components/ScrollReveal";
import SectionAccordion from "@/components/SectionAccordion";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title={t("sectionAbout")} defaultOpen>
            <div className="max-w-2xl space-y-4 text-secondary-foreground leading-relaxed">
              <p>{t("aboutP1")}</p>
              <p>{t("aboutP2")}</p>
              <p>{t("aboutP3")}</p>
            </div>
          </SectionAccordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
