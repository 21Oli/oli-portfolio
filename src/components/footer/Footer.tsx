import { navItems, logoConfig } from "@/data/navigation";
import { contactLinks } from "@/data/contact";
import styles from "./Footer.module.css";

/* ==========================================================================
   FOOTER — minimal footer with identity, navigation, external links,
   and copyright. External links now include verified GitHub and LinkedIn.
   HOMEPAGE_SPEC.md §42
   ========================================================================== */

export default function Footer() {
  const externalLinks = contactLinks.filter((l) => l.external);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top: identity + nav + external links */}
        <div className={styles.top}>
          {/* Identity */}
          <div className={styles.identity}>
            <span className={styles.name}>{logoConfig.desktop}</span>
            <span className={styles.role}>{logoConfig.descriptor} ENGINEERING</span>
          </div>

          <div className={styles.linkGroups}>
            {/* Navigation links */}
            <nav className={styles.nav} aria-label="Footer navigation">
              <ul className={styles.navList}>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={styles.navLink}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* External links — verified GitHub and LinkedIn */}
            {externalLinks.length > 0 && (
              <nav className={styles.nav} aria-label="External links">
                <ul className={styles.navList}>
                  {externalLinks.map((link) => (
                    <li key={link.type}>
                      <a
                        href={link.href}
                        className={styles.navLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} (opens in new tab)`}
                      >
                        {link.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Bottom: copyright + built with */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © 2026 {logoConfig.desktop}
          </span>
          <span className={styles.builtWith}>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
