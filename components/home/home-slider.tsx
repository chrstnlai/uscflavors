"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./home-slider.css";

const images = Array.from({ length: 10 }, (_, i) => `/images/home/${i + 1}.avif`);

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 900); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      {images.map((src, index) => (
        <div
          key={src}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <Image
            src={src}
            alt={`Flavors moment ${index + 1}`}
            fill
            className="slide-image"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
