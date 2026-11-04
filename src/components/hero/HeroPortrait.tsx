/* ==========================================================================
   HERO PORTRAIT
   Professional portrait photograph integrated from public/images/portrait.png
   (1122×1402px, 4:5 aspect ratio, PNG, RGB).
   HOMEPAGE_SPEC.md §16:
   - 4:5 aspect ratio
   - Editorial crop, monochrome or near-monochrome, subtle contrast
   - Portrait and system visualization as one unified composition
   ========================================================================== */

import Image from "next/image";
import HeroSystemVisualization from "./HeroSystemVisualization";
import styles from "./HeroPortrait.module.css";

export default function HeroPortrait() {
  return (
    <div className={styles.portrait} role="group" aria-label="Portrait and system visualization">
      <div className={styles.portraitArea}>
        {/* Professional portrait — priority load (above the fold) */}
        <Image
          src="/images/portrait.png"
          alt="Oli Bakala — Software Engineering graduate focused on AI, machine learning, and data-driven systems"
          width={1122}
          height={1402}
          priority
          quality={85}
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 420px"
          className={styles.image}
        />

        {/* System visualization overlay — sits below the portrait on mobile,
            overlays as a subtle panel on desktop per §16 composition requirement */}
        <div className={styles.systemOverlay} aria-hidden="true">
          <span className={styles.systemLabel}>SYSTEM FLOW</span>
          <HeroSystemVisualization />
        </div>
      </div>
    </div>
  );
}
