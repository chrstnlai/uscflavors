"use client";

import { useEffect, useMemo, useRef } from "react";
import "./mouse-image-trail.css";

type MouseImageTrailProps = {
    count?: number;
    maxVisible?: number;
    step?: number;
    idleDelay?: number;
    className?: string;
    children?: React.ReactNode;
};

export default function MouseImageTrail({
    count = 11,
    maxVisible = 4,
    step = 80,
    idleDelay = 10000,
    className = "",
    children,
}: MouseImageTrailProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const currentIndex = useRef(0);
    const zIndex = useRef(1);
    const lastPosition = useRef({ x: 0, y: 0 });
    const idleTimeout = useRef<number | null>(null);
    const sequenceTimeouts = useRef<number[]>([]);
    const hideTimeouts = useRef<Map<HTMLImageElement, number>>(new Map());

    const images = useMemo(
        () => Array.from({ length: count }, (_, i) => `/images/gallery/${i + 1}.avif`),
        [count]
    );

    const clearSequenceTimeouts = () => {
        sequenceTimeouts.current.forEach((id) => window.clearTimeout(id));
        sequenceTimeouts.current = [];
    };

    const clearHideTimeout = (img: HTMLImageElement) => {
        const timeoutId = hideTimeouts.current.get(img);

        if (timeoutId) {
            window.clearTimeout(timeoutId);
            hideTimeouts.current.delete(img);
        }
    };

    const scheduleHide = (img: HTMLImageElement, delay: number) => {
        clearHideTimeout(img);

        const timeoutId = window.setTimeout(() => {
            img.style.display = "none";
            hideTimeouts.current.delete(img);
        }, delay);

        hideTimeouts.current.set(img, timeoutId);
    };

    const getVisibleImages = () => {
        return imageRefs.current.filter((img) => {
            return (
                img &&
                img.style.display !== "none" &&
                img.style.opacity !== "0"
            );
        }) as HTMLImageElement[];
    };

    const fadeImagesSequentially = () => {
        clearSequenceTimeouts();

        const visibleImages = getVisibleImages();
        const stagger = 120;
        const fadeDuration = 450;

        visibleImages.forEach((img, index) => {
            const fadeId = window.setTimeout(() => {
                img.style.opacity = "0";
                img.style.transform = "translate(-50%, -50%) scale(1.02)";
                img.style.filter = "blur(1px)";
                scheduleHide(img, fadeDuration);
            }, index * stagger);

            sequenceTimeouts.current.push(fadeId);
        });
    };


    const restartIdleTimer = () => {
        if (idleTimeout.current) {
            window.clearTimeout(idleTimeout.current);
        }

        idleTimeout.current = window.setTimeout(() => {
            fadeImagesSequentially();
        }, idleDelay);
    };

    const moveImage = (x: number, y: number) => {
        const image = imageRefs.current[currentIndex.current];
        if (!image) return;

        clearHideTimeout(image);

        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        image.style.transition = "none";
        image.style.opacity = "0";
        image.style.transform = "translate(-50%, -50%) scale(0.55)";
        image.style.display = "block";
        image.style.zIndex = "3";

        void image.offsetHeight;

        image.style.transition = "transform 0.2s ease, opacity 0.2s ease";
        image.style.opacity = "1";
        image.style.transform = "translate(-50%, -50%) scale(1)";
        image.style.filter = "blur(0px)";
    };

    const hideOldestIfNeeded = () => {
        const visible = getVisibleImages();

        if (visible.length > maxVisible) {
            const oldest = visible[0];
            const fadeDuration = 450;

            oldest.style.opacity = "0";
            oldest.style.transform = "translate(-50%, -50%) scale(1.02)";
            oldest.style.filter = "blur(1px)";

            scheduleHide(oldest, fadeDuration);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        clearSequenceTimeouts();
        restartIdleTimer();

        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dx = x - lastPosition.current.x;
        const dy = y - lastPosition.current.y;
        const distance = Math.hypot(dx, dy);

        if (distance < step) return;

        moveImage(x, y);
        hideOldestIfNeeded();

        currentIndex.current = (currentIndex.current + 1) % images.length;
        lastPosition.current = { x, y };
    };

    const handleMouseLeave = () => {
        if (idleTimeout.current) {
            window.clearTimeout(idleTimeout.current);
        }

        fadeImagesSequentially();
    };

    useEffect(() => {
        return () => {
            if (idleTimeout.current) {
                window.clearTimeout(idleTimeout.current);
            }

            clearSequenceTimeouts();

            hideTimeouts.current.forEach((id) => window.clearTimeout(id));
            hideTimeouts.current.clear();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`mouse-trail ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {images.map((src, i) => (
                <img
                    key={src}
                    ref={(el) => {
                        imageRefs.current[i] = el;
                    }}
                    src={src}
                    alt=""
                    className="mouse-trail-image"
                />
            ))}

            <div className="mouse-trail-content">
                {children}
            </div>
        </div>
    );

}
