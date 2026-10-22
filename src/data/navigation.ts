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

/* External links — omitted until verified URLs are available.
   When ready, add entries like:
   { label: "GitHub", href: "https://github.com/...", type: "external" }
*/
export const externalNavItems: NavItem[] = [];

/* Footer link groups */
export const footerNavGroups: NavItem[][] = [
  navItems,
  /* External/social links — omitted until verified URLs are available */
  [],
];

/* Logo / identity */
export const logoConfig = {
  desktop: "OLI BAKALA",
  mobile: "OB",
  descriptor: "AI / ML / DATA",
  href: "/",
};
