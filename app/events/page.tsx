import styles from "./events.module.css";
import FloatingParallax from "../../components/effects/floating-parallax";

const eventsImages = [
  {
    src: "/images/home/1.avif",
    alt: "Flavors @ Night",
    top: "18%",
    left: "12%",
    width: "200px",
    height: "200px",
    depth: 28,
    title: "Flavors @ Night",
    bio: "Experience LA's food scene on the move with Flavors @ Night on our semesterly party bus food crawl! This event takes you on a curated tour featuring five diverse food stops across the city. Enjoy music, great vibes, and a series of local flavors as you hop from one venue to the next. It's a moving celebration of culinary diversity designed to keep the night exciting and engaging as you dance it away.",
  },
  {
    src: "/images/home/2.avif",
    alt: "Food Wars",
    top: "18%",
    left: "47%",
    width: "200px",
    height: "200px",
    depth: 35,
    title: "Food Wars",
    bio: "A thrilling culinary competition where members face off to create the most innovative and delicious dishes. Taste, judge, and celebrate the amazing cooking talents within our community!",
  },
  {
    src: "/images/home/3.avif",
    alt: "Cultural Potluck",
    top: "42%",
    left: "12%",
    width: "200px",
    height: "200px",
    depth: 24,
    title: "Cultural Potluck",
    bio: "Discover a new world of flavors at Cultural Potluck. Pick an ethnic cuisine you've been curious about with your family, prepare a dish that reflects your culinary adventure, and share it with a welcoming community of food enthusiasts. This event is all about exploring fresh tastes, exchanging ideas, and building connections through the universal language of food.",
  },
  {
    src: "/images/home/4.avif",
    alt: "Steak N Skate",
    top: "42%",
    left: "47%",
    width: "200px",
    height: "200px",
    depth: 38,
    title: "Steak N Skate",
    bio: "At Steak and Skate, urban culture meets culinary excellence. Set at the iconic Stone Skate Plaza, this event pairs a mouthwatering BBQ with an exhilarating skate competition featuring both professionals and local talent. Enjoy free skate gear and drinks from our sponsors, Powell and Rockstar Energy, while immersing yourself in a day of great food, impressive tricks, and community spirit.",
  },
  {
    src: "/images/home/5.avif",
    alt: "Meet to Eat",
    top: "66%",
    left: "12%",
    width: "200px",
    height: "200px",
    depth: 30,
    title: "Meet to Eat",
    bio: "Explore the hidden culinary gems of LA with Meet to Eat. Connect with fellow food enthusiasts who share your interest in a specific ethnic cuisine and embark on a guided tour of local eateries. Enjoy authentic dishes, engaging conversations, and the thrill of discovering new favorites in a relaxed, community-focused setting.",
  },
  {
    src: "/images/home/6.avif",
    alt: "Sushi Workshop",
    top: "66%",
    left: "47%",
    width: "200px",
    height: "200px",
    depth: 22,
    title: "Sushi Workshop",
    bio: "Learn how to roll your own sushi with guidance from expert chefs. All ingredients are provided, just bring your appetite and enthusiasm!",
  }
];



export default function Events() {
  return (
    <div className={styles.container}>
      <FloatingParallax images={eventsImages}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Events</h1>
          <p className={styles.subheading}>*hint: click around to explore.</p>
        </main>
      </FloatingParallax>
    </div>
  );
}
