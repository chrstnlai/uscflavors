"use client";
import { useState } from "react";
import "./announcement-bar.css";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [dismissing, setDismissing] = useState(false);

  const handleDismiss = () => {
    setDismissing(true);
    setTimeout(() => setVisible(false), 500); 
  };

  if (!visible) return null;

  return (
    <div className={`announcement-bubble ${dismissing ? "dismissing" : ""}`}>
      <p>
        {/* Spring 26 Cohort applications are open */}
        Spring 2026 Cohort applications are closed.{" "}
        <a href="/membership">Learn more →</a>
        {/*<a href="/membership">Apply Now →</a>*/}
      </p>
      <button
        className="announcement-close"
        onClick={handleDismiss}
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
