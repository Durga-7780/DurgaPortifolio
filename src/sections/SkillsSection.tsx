import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/utils/portfolioData";

export const SkillsSection = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          description="Technologies and tools I use to build AI-powered applications, backend systems, and production-ready APIs."
          eyebrow="Technical Skills"
          title="Technologies I Use to Build AI Systems"
        />

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.title} delay={index * 0.08}>
                <div className="glass-card skill-card">
                  <div className="skill-card-header">
                    <div className="skill-icon">
                      <Icon size={20} />
                    </div>
                    <h3>{category.title}</h3>
                  </div>
                  <div className="skill-badge-wrap">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        animate={{ opacity: 1, y: 0 }}
                        className="skill-badge"
                        initial={{ opacity: 0, y: 8 }}
                        transition={{ delay: index * 0.08 + skillIndex * 0.04, duration: 0.35 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
