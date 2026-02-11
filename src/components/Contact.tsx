import { Mail, Github, Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionAccordion from "@/components/SectionAccordion";

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
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title="// Contact" defaultOpen>
            <p className="text-secondary-foreground mb-8 max-w-md">
              Open to R&amp;D internships, research collaborations, and engineering
              discussions. Reach out via any channel below.
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
          © {new Date().getFullYear()} Onkar Patil. Built with precision.
        </p>
      </div>
    </section>
  );
};

export default Contact;
