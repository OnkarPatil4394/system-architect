import { Mail, Github, Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionAccordion from "@/components/SectionAccordion";
import { useLanguage } from "@/i18n/LanguageContext";

const contacts = [
  {
    icon: Mail,
    label: "onkarpatil.ee@gmail.com",
    href: "mailto:onkarpatil.ee@gmail.com",
  },
  {
    icon: Github,
    label: "github.com/onkarpatil-ee",
    href: "https://github.com/onkarpatil-ee",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/patilonkar4394",
    href: "https://www.linkedin.com/in/patilonkar4394",
  },
];

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title={t("sectionContact")} defaultOpen>
            <p className="text-secondary-foreground mb-8 max-w-md">
              {t("contactDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <contact.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                  <span className="font-mono text-xs">{contact.label}</span>
                </a>
              ))}
            </div>
          </SectionAccordion>
        </ScrollReveal>

        <div className="divider mt-24 mb-8" />
        <p className="font-mono text-xs text-muted-foreground">
          {t("copyright").replace("{year}", new Date().getFullYear().toString())}
        </p>
      </div>
    </section>
  );
};

export default Contact;
