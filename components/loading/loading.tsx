"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./loading.css";

declare global {
  interface Window {
    __appLoaded?: boolean;
  }
}

export default function LoadingScreen() {
  const [show, setShow] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    if (window.__appLoaded) return;

    window.__appLoaded = true;
    setShow(true);

    const animationTimer = setTimeout(() => {
      setSlideUp(true);
    }, 2500);

    const unmountTimer = setTimeout(() => {
      setShow(false);
    }, 3200);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(unmountTimer);
      setShow(false);
      setSlideUp(false);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`loading-container ${slideUp ? "slide-up-active" : ""}`}>
      <div className="video-wrapper">
        <video autoPlay loop muted playsInline className="loading-video">
          <source src="/videos/loading.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="image-wrapper">
        <Image
          src="/images/load/load-overlay.png"
          alt="Loading..."
          fill
          priority
          className="loading-image"
        />
      </div>

      <div className="loading-text">
        <p>savor the moment</p>
        <p>usc flavors</p>
      </div>
    </div>
  );
}
