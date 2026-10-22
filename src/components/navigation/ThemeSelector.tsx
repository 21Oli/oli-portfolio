"use client";

import { useSyncExternalStore, useCallback } from "react";
import styles from "./ThemeSelector.module.css";

/* ==========================================================================
   THEME SELECTOR
   Supports System, Light, and Dark themes.
   - System: removes [data-theme] attribute, CSS @media handles preference
   - Light/Dark: sets [data-theme] on <html> and persists to localStorage
   - No-FOUC script in layout.tsx handles initial render before hydration
   - Uses useSyncExternalStore to avoid setState-in-effect (React 19 lint rule)
   ========================================================================== */

const STORAGE_KEY = "oli-portfolio-theme";

type ThemeChoice = "system" | "light" | "dark";

const options: { value: ThemeChoice; label: string }[] = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

/* --- Simple in-memory theme store --- */
let currentTheme: ThemeChoice = "system";
const listeners = new Set<() => void>();

/* Initialize from localStorage on the client (module scope) */
if (typeof window !== "undefined") {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      currentTheme = stored;
    }
  } catch {
    /* localStorage unavailable — default to system */
  }
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): ThemeChoice {
  return currentTheme;
}

function getServerSnapshot(): ThemeChoice {
  return "system";
}

function notifyThemeChange(choice: ThemeChoice) {
  currentTheme = choice;
  listeners.forEach((l) => l());
}

export default function ThemeSelector() {
  const currentChoice = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const applyTheme = useCallback((choice: ThemeChoice) => {
    const html = document.documentElement;
    try {
      if (choice === "system") {
        html.removeAttribute("data-theme");
        localStorage.removeItem(STORAGE_KEY);
      } else {
        html.setAttribute("data-theme", choice);
        localStorage.setItem(STORAGE_KEY, choice);
      }
    } catch {
      /* localStorage unavailable — apply attribute only */
      if (choice === "system") {
        html.removeAttribute("data-theme");
      } else {
        html.setAttribute("data-theme", choice);
      }
    }
    notifyThemeChange(choice);
  }, []);

  return (
    <div
      className={styles.selector}
      role="radiogroup"
      aria-label="Color theme"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="radio"
          aria-checked={currentChoice === opt.value}
          aria-label={`${opt.label} theme`}
          className={`${styles.option} ${
            currentChoice === opt.value ? styles.active : ""
          }`}
          onClick={() => applyTheme(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
