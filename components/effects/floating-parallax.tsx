"use client";

import { useRef, useEffect, useCallback } from "react";
import "./floating-parallax.css";

type FloatingImage = {
    src: string;
    alt?: string;
    top: string;
    left: string;
    width: string;
    height: string;
    depth: number; 
    zIndex?: number;
};

type FloatingParallaxProps = {
    images: FloatingImage[];
    className?: string;
    children?: React.ReactNode;
};

export default function FloatingParallax({
    images,
    className = "",
    children,
}: FloatingParallaxProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const mouse = useRef({ x: 0, y: 0 });
    const current = useRef<{ x: number; y: number }[]>(
        images.map(() => ({ x: 0, y: 0 }))
    );
    const rafId = useRef<number | null>(null);

    const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
    };

    const animate = useCallback(() => {
        images.forEach((img, i) => {
            const el = imageRefs.current[i];
            if (!el) return;

            const targetX = mouse.current.x * img.depth;
            const targetY = mouse.current.y * img.depth;

            current.current[i].x = lerp(current.current[i].x, targetX, 0.06);
            current.current[i].y = lerp(current.current[i].y, targetY, 0.06);

            el.style.transform = `translate(${current.current[i].x}px, ${current.current[i].y}px)`;
        });

        rafId.current = requestAnimationFrame(animate);
    }, [images]);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Normalize to range roughly -1 to 1
            mouse.current.x = (e.clientX - centerX) / (rect.width / 2);
            mouse.current.y = (e.clientY - centerY) / (rect.height / 2);
        },
        []
    );

    const handleMouseLeave = useCallback(() => {
        // Ease back to center
        mouse.current.x = 0;
        mouse.current.y = 0;
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
        rafId.current = requestAnimationFrame(animate);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);

            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [animate, handleMouseMove, handleMouseLeave]);

    return (
        <div
            ref={containerRef}
            className={`floating-parallax ${className}`}
        >
            {images.map((img, i) => (
                <div
                    key={img.src}
                    ref={(el) => {
                        imageRefs.current[i] = el;
                    }}
                    className="floating-image-wrap"
                    style={{
                        top: img.top,
                        left: img.left,
                        width: img.width,
                        height: img.height,
                        zIndex: img.zIndex ?? 0,
                    }}
                >
                    <img
                        src={img.src}
                        alt={img.alt || ""}
                        className="floating-image"
                    />
                </div>
            ))}

            <div className="floating-content">
                {children}
            </div>
        </div>
    );
}
