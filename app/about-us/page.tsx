import styles from "./about.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.eyebrow}>Who we are</p>
          <h1 className={styles.heading}>About Us</h1>
          <p className={styles.paragraph}>
            Flavors is a cultural club dedicated to experiencing different cultures through taste, cuisine, and conversation. Food is not only a window into understanding culture but also an incredible way to build meaningful relationships. Our goal is to “break bread” with our peers, fostering connections through a shared enthusiasm for exploring diverse cuisines and cultures. Trying new foods can be an adventure—sometimes daunting but always exciting—and we aim to inspire open-mindedness in embracing these experiences.
          </p>
          <p className={styles.paragraph}>
            In a world increasingly divided by labels, Flavors strives to create an open atmosphere where people can transcend cultural barriers, engage in meaningful dialogue, and truly get to know one another. By breaking the ice, we hope to spark conversations that bring together people from all walks of life to share their stories, passions, and values, and simply enjoy great conversations.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/images/about/savorthemoment.avif"
              alt="Savor the moment"
              width={1000}
              height={562}
              className={styles.image}
              priority
            />
          </div>
        </main>
      </div>
    </>
  );
}