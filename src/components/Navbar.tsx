import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigationItems } from "@/utils/portfolioData";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled ? "site-header-scrolled" : ""}`}>
      <div className="container flex items-center justify-between gap-6">
        <a className="brand-mark" href="#hero" onClick={closeMenu}>
          <span className="brand-dot" />
          <span>Software Engineer (Python & AI)</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle navigation"
          className="mobile-menu-button md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            className="mobile-nav md:hidden"
            exit={{ opacity: 0, y: -12 }}
            initial={{ opacity: 0, y: -12 }}
          >
            {navigationItems.map((item) => (
              <a key={item.href} className="nav-link" href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
