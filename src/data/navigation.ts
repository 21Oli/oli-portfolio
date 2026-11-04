/* ==========================================================================
   NAVIGATION DATA
   Central source of truth for navigation links.
   Section anchors will resolve when homepage sections are implemented (Phase 3+).
   External links are omitted until verified URLs are provided.
   ========================================================================== */

export type NavItem = {
  label: string;
  href: string;
  type: "anchor" | "external";
};

/* Desktop navigation section links (anchor links to homepage sections) */
export const navItems: NavItem[] = [
  { label: "About", href: "#about", type: "anchor" },
  { label: "Skills", href: "#skills", type: "anchor" },
  { label: "Experience", href: "#experience", type: "anchor" },
  { label: "Projects", href: "#projects", type: "anchor" },
  { label: "Learning Hub", href: "#learning", type: "anchor" },
  { label: "Contact", href: "#contact", type: "anchor" },
];

/* External links — verified GitHub and LinkedIn provided by project owner */
export const externalNavItems: NavItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/21Oli",
    type: "external",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/oli-bakala/",
    type: "external",
  },
];

/* Footer link groups */
export const footerNavGroups: NavItem[][] = [
  navItems,
  externalNavItems,
];

/* Logo / identity */
export const logoConfig = {
  desktop: "OLI BAKALA",
  mobile: "OB",
  descriptor: "AI / ML / DATA",
  href: "/",
};
