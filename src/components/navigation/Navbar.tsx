"use client";

import { useState, useEffect } from "react";
import { navItems, logoConfig } from "@/data/navigation";
import ThemeSelector from "./ThemeSelector";
import MobileMenu from "./MobileMenu";
import styles from "./Navbar.module.css";

/* ==========================================================================
   NAVBAR — desktop navigation + mobile menu toggle
   - Transparent at top; surface background + backdrop blur after 24px scroll
   - Logo links to /
   - Section anchor links from navigation data
   - Theme selector on the right
   - Mobile: shows "OB" logo + MENU button, full-screen overlay
   ========================================================================== */

const SCROLL_THRESHOLD = 24;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  /* Track scroll position for sticky styling */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy: detect active section via IntersectionObserver.
     No active items until homepage sections are implemented (Phase 3+). */
  useEffect(() => {
    const sections = navItems
      .filter((item) => item.type === "anchor")
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close menu on Escape key */
  useEffect(() => {
    if (!menuOpen) return;
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        data-scrolled={scrolled}
      >
        <nav className={styles.nav} aria-label="Main navigation">
          {/* Logo */}
          <a
            href={logoConfig.href}
            className={styles.logo}
            aria-label={`${logoConfig.desktop} — home`}
          >
            <span className={styles.logoDesktop}>{logoConfig.desktop}</span>
            <span className={styles.logoMobile}>{logoConfig.mobile}</span>
          </a>

          {/* Desktop navigation links */}
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${
                    activeSection === item.href.slice(1) ? styles.navLinkActive : ""
                  }`}
                  aria-current={
                    activeSection === item.href.slice(1) ? "true" : undefined
                  }
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <span className={styles.navIndicator} aria-hidden="true">
                      •
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: theme selector + mobile toggle */}
          <div className={styles.actions}>
            <ThemeSelector />
            <button
              type="button"
              className={styles.menuButton}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              MENU
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
