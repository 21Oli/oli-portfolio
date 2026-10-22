/* ==========================================================================
   HERO PORTRAIT
   PLACEHOLDER — No approved portrait image is available yet.
   This is a deliberate, documented visual placeholder consistent with the
   "AI Engineering Lab × Editorial Minimalism" design direction.

   The placeholder:
   - Uses the approved 4:5 aspect ratio from HOMEPAGE_SPEC.md §16
   - Has a surface background with subtle border
   - Contains the system visualization as the primary visual element
   - Does NOT fake a photo or use a stock image

   When a real portrait is available, replace the placeholder content
   with a next/image component and the approved image.
   ========================================================================== */

import HeroSystemVisualization from "./HeroSystemVisualization";
import styles from "./HeroPortrait.module.css";

export default function HeroPortrait() {
  return (
    <div className={styles.portrait} aria-label="Portrait and system visualization">
      {/* Portrait placeholder area (4:5) */}
      <div className={styles.portraitArea}>
        {/* The system visualization sits inside the portrait composition
            to create one unified visual per HOMEPAGE_SPEC.md §16 */}
        <div className={styles.systemContainer}>
          <span className={styles.systemLabel}>SYSTEM FLOW</span>
          <HeroSystemVisualization />
        </div>
      </div>
    </div>
  );
}
