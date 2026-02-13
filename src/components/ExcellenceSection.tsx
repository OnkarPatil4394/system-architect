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

interface CertItem {
  title: string;
  org: string;
  period: string;
  detail: string;
}

interface ExcellenceSectionProps {
  id: string;
  titleKey: string;
  descriptionKey: string;
  skills: string[];
  projects: Project[];
  certifications: CertItem[];
  courses: CertItem[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="project-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start justify-between text-left cursor-pointer"
      >
        <h4 className="text-base font-semibold text-foreground">{project.title}</h4>
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
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
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
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("problem")}</span>
                <p className="text-secondary-foreground mt-1">{project.problem}</p>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("approach")}</span>
                <p className="text-secondary-foreground mt-1">{project.approach}</p>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("outcome")}</span>
                <p className="text-secondary-foreground mt-1">{project.outcome}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CertList = ({ items, label }: { items: CertItem[]; label: string }) => {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">{label}</h4>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="pl-4 border-l-2 border-border hover:border-primary/50 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h5 className="text-sm font-medium text-foreground">{item.title}</h5>
              <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-1">{item.org}</p>
            <p className="text-sm text-secondary-foreground">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExcellenceSection = ({
  id,
  titleKey,
  descriptionKey,
  skills,
  projects,
  certifications,
  courses,
}: ExcellenceSectionProps) => {
  const { t } = useLanguage();

  return (
    <section id={id} className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title={t(titleKey as any)} defaultOpen>
            <div className="space-y-10">
              {/* Description */}
              <p className="text-sm text-secondary-foreground leading-relaxed max-w-2xl">
                {t(descriptionKey as any)}
              </p>

              {/* Skills */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  {t("coreSkills")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              {projects.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                    {t("sectionProjects")}
                  </h4>
                  <div className="space-y-4">
                    {projects.map((project, i) => (
                      <ScrollReveal key={i} delay={0.05 + i * 0.08}>
                        <ProjectCard project={project} />
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              <CertList items={certifications} label={t("labsResearch")} />

              {/* Courses */}
              <CertList items={courses} label={t("certifications")} />
            </div>
          </SectionAccordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExcellenceSection;
