/* ==========================================================================
   CONTACT DATA — source of truth for contact links
   HOMEPAGE_SPEC.md §41

   Rules:
   - Only include verified URLs and addresses.
   - Email is omitted — no confirmed address was found in any spec document.
     Add it here when Oli's address is confirmed:
       { type: "email", label: "EMAIL", href: "mailto:you@example.com" }
   - GitHub and LinkedIn are verified URLs provided by the project owner.
   ========================================================================== */

export type ContactLink = {
  type: "email" | "linkedin" | "github";
  label: string;
  href: string;
  /** Opens in a new tab */
  external?: boolean;
};

export const contactLinks: ContactLink[] = [
  /* Email — omitted until a confirmed address is provided.
     Uncomment and replace the href when ready:
  {
    type: "email",
    label: "EMAIL",
    href: "mailto:your-email@example.com",
    external: false,
  },
  */
  {
    type: "linkedin",
    label: "LINKEDIN",
    href: "https://linkedin.com/in/oli-bakala/",
    external: true,
  },
  {
    type: "github",
    label: "GITHUB",
    href: "https://github.com/21Oli",
    external: true,
  },
];
