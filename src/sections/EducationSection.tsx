import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/utils/portfolioData";

export const EducationSection = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading
          description="Academic foundation in computer applications supporting my work in AI and backend systems."
          eyebrow="Education"
          title="Formal foundation in computer applications"
        />

        <div className="grid gap-6">
          {education.map((item, index) => (
            <Reveal key={`${item.degree}-${item.school}-${index}`}>
              <div className="glass-card education-card">
                <div className="education-icon">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                </div>
                <div className="education-meta">
                  <span>CGPA: {item.cgpa}</span>
                  <span>{item.duration}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
