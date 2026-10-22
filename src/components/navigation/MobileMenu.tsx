"use client";

import { useEffect, useRef } from "react";
import { navItems, logoConfig } from "@/data/navigation";
import ThemeSelector from "./ThemeSelector";
import styles from "./MobileMenu.module.css";

/* ==========================================================================
   MOBILE MENU — full-screen navigation overlay for mobile
   - Opens/closes with smooth animation
   - Closes on Escape, link click, or backdrop click
   - Keyboard accessible: focus management, Escape to close
   - Includes theme selector
   ========================================================================== */

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  /* Focus the close button when menu opens */
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  /* Trap focus within the menu */
  useEffect(() => {
    if (!isOpen) return;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'button, a, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      id="mobile-menu"
    >
      <div
        className={styles.backdrop}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={styles.menu}
        ref={menuRef}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          aria-label="Close menu"
          onClick={onClose}
        >
          CLOSE
        </button>

        {/* Logo */}
        <a
          href={logoConfig.href}
          className={styles.logo}
          onClick={onClose}
        >
          {logoConfig.desktop}
          <span className={styles.descriptor}>
            {logoConfig.descriptor}
          </span>
        </a>

        {/* Navigation links */}
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.navLink}
                onClick={onClose}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme selector */}
        <div className={styles.themeSection}>
          <span className={styles.themeLabel}>THEME</span>
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
}
