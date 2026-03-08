import { Award, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { certificates } from "@/utils/portfolioData";

export const CertificatesSection = () => {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <SectionHeading
          description="IBM credentials earned through Coursera, presented as professional learning milestones that support the AI and backend work in this portfolio."
          eyebrow="Certificates"
          title="IBM certifications earned through Coursera"
        />

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.title} delay={index * 0.08}>
              <article className="glass-card certificate-card">
                <div className="certificate-topline">
                  <div className="certificate-icon">
                    <Award size={20} />
                  </div>
                  <span>{certificate.issuer}</span>
                </div>
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
                <a className="certificate-link" href={certificate.credentialUrl} rel="noreferrer" target="_blank">
                  View Credential
                  <ExternalLink size={16} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
