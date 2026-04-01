"use client";

import styles from "./gallery.module.css";
import MouseImageTrail from "../../components/effects/mouse-image-trail";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MouseImageTrail count={21} maxVisible={21} step={170}>
      <div className={styles.container}>

        <main className={styles.main}>
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Faces of Flavors</p>
            <h1 className={styles.heading}>GALLERY</h1>
          </section>
        </main>

        <div className={`${styles.mouseHint} ${!visible ? styles.mouseHintHidden : ""}`}>
          <svg
            className={styles.mouseIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="2" width="12" height="18" rx="6" ry="6" />
            <line x1="12" y1="6" x2="12" y2="10" />
          </svg>
          <p className={styles.mouseLabel}>move your mouse ;)</p>
          <p className={styles.mouseLabelMobile}>ummm, so you lowkey need a mouse to see the gallery :| #nophonegang</p>
        </div>

      </div>
    </MouseImageTrail>
  );
}
