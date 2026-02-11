import ScrollReveal from "@/components/ScrollReveal";
import SectionAccordion from "@/components/SectionAccordion";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <SectionAccordion title="// About" defaultOpen>
            <div className="max-w-2xl space-y-4 text-secondary-foreground leading-relaxed">
              <p>
                Electrical Engineering undergraduate with a focus on embedded systems
                design and hardware–software co-development. Experienced in
                architecting solutions from schematic capture through firmware
                deployment.
              </p>
              <p>
                Approach every problem with systems-level thinking — understanding
                how component-level decisions cascade through the full signal chain.
                Committed to building interfaces that are robust, testable, and
                production-ready.
              </p>
              <p>
                Actively pursuing R&amp;D opportunities where cross-domain
                integration (analog, digital, firmware) drives product innovation.
              </p>
            </div>
          </SectionAccordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
