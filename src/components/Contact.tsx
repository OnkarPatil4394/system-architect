import { Mail, Github, Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const contacts = [
  {
    icon: Mail,
    label: "alex.chen@email.com",
    href: "mailto:alex.chen@email.com",
  },
  {
    icon: Github,
    label: "github.com/alexchen",
    href: "https://github.com/alexchen",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/alexchen",
    href: "https://linkedin.com/in/alexchen",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-heading">// Contact</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-secondary-foreground mb-8 max-w-md">
            Open to R&amp;D internships, research collaborations, and engineering
            discussions. Reach out via any channel below.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
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
        </ScrollReveal>

        <div className="divider mt-24 mb-8" />
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alex Chen. Built with precision.
        </p>
      </div>
    </section>
  );
};

export default Contact;
