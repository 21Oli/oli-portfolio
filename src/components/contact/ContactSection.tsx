/* ==========================================================================
   CONTACT SECTION
   HOMEPAGE_SPEC.md §41 — anchor: #contact
   Data-driven from src/data/contact.ts.
   Email omitted — no confirmed address in project documentation.
   Résumé CTA omitted — no résumé PDF in public/resume/.
   ========================================================================== */

import { contactLinks } from "@/data/contact";
import styles from "./ContactSection.module.css";

/* Icon labels for accessibility */
const LINK_LABELS: Record<string, string> = {
  linkedin: "Connect on LinkedIn (opens in new tab)",
  github: "View GitHub profile (opens in new tab)",
  email: "Send an email",
};

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className={styles.container}>
        {/* Heading group */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>CONTACT</p>
          <h2 className={styles.heading}>Let&apos;s build something useful.</h2>
          <p className={styles.subheading}>
            Interested in AI, machine learning, data, or software engineering?
            Feel free to connect.
          </p>
        </div>

        {/* Contact links — only verified destinations rendered */}
        <div className={styles.links} role="list" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a
              key={link.type}
              href={link.href}
              className={styles.link}
              role="listitem"
              aria-label={LINK_LABELS[link.type] ?? link.label}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.linkArrow} aria-hidden="true">
                {link.external ? "↗" : "→"}
              </span>
            </a>
          ))}
        </div>

        {/* "OPEN TO AI / ML / DATA OPPORTUNITIES" — spec marks this as
            optional and conditional. Rendered as a status indicator.
            Remove or adjust based on current job-search situation. */}
        <p className={styles.opportunity}>
          OPEN TO AI / ML / DATA OPPORTUNITIES
        </p>
      </div>
    </section>
  );
}
