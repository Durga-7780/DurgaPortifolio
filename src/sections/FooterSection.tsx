import { socials } from "@/utils/portfolioData";

export const FooterSection = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <p>© 2026 Your Name Here. Built for AI engineering roles.</p>
        <div className="footer-socials">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} aria-label={item.label} href={item.href} rel="noreferrer" target="_blank">
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
