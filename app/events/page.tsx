"use client";
import styles from "./events.module.css";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";

const events = [
  {
    src: "/images/events/1.avif",
    alt: "Flavors @ Night",
    title: "Flavors @ Night",
    tag: "Semesterly",
    depth: 28,
    bio: "Experience LA's food scene on the move with Flavors @ Night on our semesterly party bus food crawl! This event takes you on a curated tour featuring five diverse food stops across the city. Enjoy music, great vibes, and a series of local flavors as you hop from one venue to the next. It's a moving celebration of culinary diversity designed to keep the night exciting and engaging as you dance it away.",
  },
  {
    src: "/images/events/2.mp4",
    alt: "Food Wars",
    title: "Food Wars",
    tag: "Competition",
    depth: 35,
    bio: "A thrilling culinary competition where members face off to create the most innovative and delicious dishes. Taste, judge, and celebrate the amazing cooking talents within our community!",
  },
  {
    src: "/images/events/3.avif",
    alt: "Cham",
    title: "Cultural Potluck",
    tag: "Community",
    depth: 24,
    bio: "Discover a new world of flavors at Cultural Potluck. Pick an ethnic cuisine you've been curious about with your family, prepare a dish that reflects your culinary adventure, and share it with a welcoming community of food enthusiasts. This event is all about exploring fresh tastes, exchanging ideas, and building connections through the universal language of food.",
  },
  {
    src: "/images/events/4.avif",
    alt: "Steak N Skate",
    title: "Steak N Skate",
    tag: "Collab",
    depth: 38,
    bio: "At Steak and Skate, urban culture meets culinary excellence. Set at the iconic Stone Skate Plaza, this event pairs a mouthwatering BBQ with an exhilarating skate competition featuring both professionals and local talent. Enjoy free skate gear and drinks from our sponsors, Powell and Rockstar Energy, while immersing yourself in a day of great food, impressive tricks, and community spirit.",
  },
  {
    src: "/images/events/5.avif",
    alt: "Meet to Eat",
    title: "Meet to Eat",
    tag: "Exploration",
    depth: 30,
    bio: "Explore the hidden culinary gems of LA with Meet to Eat. Connect with fellow food enthusiasts who share your interest in a specific ethnic cuisine and embark on a guided tour of local eateries. Enjoy authentic dishes, engaging conversations, and the thrill of discovering new favorites in a relaxed, community-focused setting.",
  },
];

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isVideo = event.src.endsWith(".mp4");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || flipped) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      const factor = event.depth / 10;
      cardRef.current.style.transform = `rotateY(${dx * factor}deg) rotateX(${-dy * factor}deg)`;
    },
    [flipped, event.depth]
  );

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  }, []);

  return (
    <div 
      className={styles.eventCard}
      style={{ "--i": index } as React.CSSProperties}
    >
      {/* Image/Video pane — parallax + flip */}
      <div
        className={styles.imageWrap}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setFlipped((f) => !f)}
        style={{ perspective: "800px", cursor: "pointer" }}
      >
        <div
          ref={cardRef}
          className={`${styles.imageInner} ${flipped ? styles.flipped : ""}`}
          style={{ transition: flipped ? "transform 0.6s ease" : "transform 0.12s ease" }}
        >
          {/* Front */}
          <div className={styles.imageFront}>
            {isVideo ? (
              <video
                src={event.src}
                autoPlay
                loop
                muted
                playsInline
                className={styles.eventVideo}
              />
            ) : (
              <Image src={event.src} alt={event.alt} fill style={{ objectFit: "cover" }} />
            )}
            <div className={styles.imageOverlay} />
            <span className={styles.eventIndex}>0{index + 1}</span>
            <span className={styles.flipHint}>Click to flip ↩</span>
            <span className={styles.flipHintMobile}>Tap to flip ↩</span>  
          </div>
          {/* Back */}
          <div className={styles.imageBack}>
            <p className={styles.bioText}>{event.bio}</p>
          </div>
        </div>
      </div>

      {/* Content pane */}
      <div className={styles.eventContent}>
        <div className={styles.eventHeader}>
          <p className={styles.eventTag}>{event.tag}</p>
          <h3 className={styles.eventTitle}>{event.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>What We're Cookin'</p>
          <h1 className={styles.heading}>EVENTS</h1>
          <p className={styles.subheading}>
            Thoughtfully curated events built around food, culture, and community.
          </p>
        </section>

        <section className={styles.cardList}>
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </section>
      </main>
    </div>
  );
}
