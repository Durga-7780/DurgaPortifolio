import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { strengths } from "@/utils/portfolioData";

export const StrengthsSection = () => {
  return (
    <section className="section" id="strengths">
      <div className="container">
        <SectionHeading
          description="Key strengths that help me solve complex problems, build AI systems, and collaborate effectively in engineering teams."
          eyebrow="Strengths"
          title="How I Approach Engineering Problems"
        />

        <div className="strength-grid">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <Reveal key={strength.title} delay={index * 0.08}>
                <div className="glass-card strength-card">
                  <div className="strength-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{strength.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
