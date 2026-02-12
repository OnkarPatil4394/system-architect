import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionAccordion from "@/components/SectionAccordion";
import { useLanguage } from "@/i18n/LanguageContext";

interface Project {
  title: string;
  problem: string;
  approach: string;
  technologies: string[];
  outcome: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "1BHK Smart Home Automation System",
    problem: "Traditional home appliance control lacks remote access, automation, and energy efficiency — especially in affordable setups for students and small apartments.",
    approach: "Designed a 3-block system: (1) Hall Automation with ESP32 + 4-Channel Relay for Wi-Fi & cloud-based light/fan control, (2) Smart RFID Door Lock using Arduino UNO + Servo for authorized-only access, (3) Parking & Washroom Automation with PIR sensors for motion-based lighting. Integrated ESP RainMaker for mobile app control and Google Home voice assistant support.",
    technologies: ["ESP32", "Arduino UNO", "RFID", "PIR Sensor", "Relay Module", "ESP RainMaker", "Google Home", "Embedded C"],
    outcome: "Delivered a fully functional, affordable smart home prototype supporting automatic + manual control, cloud connectivity, voice commands, and RFID security. Demonstrated end-to-end hardware–software integration with real-time IoT automation.",
    link: "https://github.com/onkarpatil-ee",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="project-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start justify-between text-left cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </motion.span>
        </div>
      </button>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-3 text-sm mt-4 pt-4 border-t border-border">
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {t("problem")}
                </span>
                <p className="text-secondary-foreground mt-1">{project.problem}</p>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {t("approach")}
                </span>
                <p className="text-secondary-foreground mt-1">{project.approach}</p>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {t("outcome")}
                </span>
                <p className="text-secondary-foreground mt-1">{project.outcome}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title={t("sectionProjects")} defaultOpen>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ScrollReveal key={index} delay={0.05 + index * 0.08}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </SectionAccordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;