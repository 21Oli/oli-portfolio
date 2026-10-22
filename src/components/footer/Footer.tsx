import { navItems, logoConfig } from "@/data/navigation";
import styles from "./Footer.module.css";

/* ==========================================================================
   FOOTER — minimal footer with identity, navigation, and copyright
   External/social links omitted until verified URLs are available.
   ========================================================================== */

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top: identity + links */}
        <div className={styles.top}>
          {/* Identity */}
          <div className={styles.identity}>
            <span className={styles.name}>{logoConfig.desktop}</span>
            <span className={styles.role}>{logoConfig.descriptor} ENGINEERING</span>
          </div>

          {/* Navigation links */}
          <nav className={styles.nav} aria-label="Footer navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
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
