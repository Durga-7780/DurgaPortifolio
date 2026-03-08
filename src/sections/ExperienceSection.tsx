import { AIVoicebotWorkflow } from "@/components/AIVoicebotWorkflow";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experienceItems } from "@/utils/portfolioData";

export const ExperienceSection = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          description="Recent work focused on backend platform engineering, low-latency streaming, and AI integration in production systems."
          eyebrow="Professional Experience"
          title="Delivery across platform workflows, reporting, and real-time AI systems"
        />

        <div className="timeline">
          {experienceItems.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <article className="timeline-item">
                <div className="timeline-rail" />
                <div className="timeline-dot" />
                <div className="glass-card timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3>{item.company}</h3>
                      <p>{item.location}</p>
                    </div>
                    <span>{item.duration}</span>
                  </div>
                  <div className="timeline-card-layout">
                    <div className="timeline-projects">
                      {item.projects.map((project) => (
                        <div key={project.title} className="timeline-project">
                          <h4>{project.title}</h4>
                          <ul>
                            {project.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <AIVoicebotWorkflow />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
