/* ==========================================================================
   HERO SYSTEM VISUALIZATION
   DATA → FEATURES → MODEL → API → APPLICATION
   Vertical flow diagram with thin lines, small nodes, monospace labels,
   and a subtle teal signal that moves through the system.
   Pure CSS animation — no client-side JavaScript needed.
   ========================================================================== */

import styles from "./HeroSystemVisualization.module.css";

const nodes = [
  { label: "DATA" },
  { label: "FEATURES" },
  { label: "MODEL" },
  { label: "API" },
  { label: "APPLICATION" },
];

export default function HeroSystemVisualization() {
  return (
    <div className={styles.visualization} aria-label="System pipeline: data to application">
      <div className={styles.flow}>
        {nodes.map((node, index) => (
          <div key={node.label} className={styles.nodeRow}>
            <div
              className={styles.node}
              style={{ animationDelay: `${index * 1}s` }}
            >
              <span className={styles.nodeDot} aria-hidden="true" />
            </div>
            <span
              className={styles.nodeLabel}
              style={{ animationDelay: `${index * 1}s` }}
            >
              {node.label}
            </span>
            {index < nodes.length - 1 && (
              <div
                className={styles.connector}
                style={{ animationDelay: `${index * 1 + 0.5}s` }}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
      {/* Signal dot that travels through the pipeline */}
      <span className={styles.signal} aria-hidden="true" />
    </div>
  );
}
