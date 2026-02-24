import styles from "./membership.module.css";

export default function Membership() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.heading}>MEMBERSHIP</h1>

        <h2 className={styles.sectionTitle}>FALL 25 COHORT</h2>
        <p className={styles.paragraph}>
          JOIN A CLOSE-KNIT GROUP OF FOODIES AND LIKE-MINDED INDIVIDUALS BUILT AROUND CUISINE,
          CULTURE, AND CONVERSATION. THIS SEMESTER, WE'RE FOCUSED ON CREATING AN EVEN MORE
          INTIMATE AND UNIQUE EXPERIENCE BY REDUCING OUR COHORT SIZE TO JUST 50 MEMBERS. THIS
          SMALLER GROUP WILL ALLOW US TO FOCUS ON BUILDING DEEPER CONNECTIONS AND DELIVERING
          BETTER QUALITY EVENTS FOR OUR COMMUNITY. MEMBERS WILL BE PLACED INTO OUR HEAD CHEF/SOUS
          CHEF PROGRAM AND BE PLACED INTO FAMILIES WHERE THEY WILL COME TOGETHER FOR EVENTS LIKE
          FOOD WARS, CULTURAL POTLUCKS, AND MORE EXCITING MISSIONS/ACTIVITIES THAT WE'LL HAVE
          PLANNED THROUGHOUT THE SEMESTER. MEMBERS WILL ALSO HAVE PRIORITY ENTRY AND FREE ENTRY
          TO ALL OUR PARTIES.
        </p>

        <h2 className={styles.sectionTitle}>FLAVORS PACK:</h2>
        <p className={styles.paragraph}>
          DISCOUNTS AND SPECIAL TREATS FROM OUR PARTNERS.
        </p>

        <h2 className={styles.sectionTitle}>EVENTS TO LOOK FORWARD TO:</h2>
        <p className={styles.paragraph}>
          THIS SEMESTER, OUR EVENTS ARE THOUGHTFULLY CURATED TO BRING THE COMMUNITY TOGETHER IN
          EXCITING AND MEANINGFUL WAYS. FROM THE HIGH-ENERGY COMPETITION OF FOOD WARS TO THE
          COZY VIBES OF FLAVORS CAFÉ, THERE'S SOMETHING FOR EVERYONE. EXPERIENCE THE THRILL OF A
          PARTY BUS FOOD CRAWL OR THE RELAXED AMBIANCE OF SUNDAY JAMS WITH LIVE MUSIC. BUILD
          DEEPER CONNECTIONS THROUGH OUR ROTATING GROUP MEALS IN MEET TO EATS, AND BOND WITH
          FELLOW MEMBERS ON OUR MEMBER RETREAT. FOR A TRULY UNFORGETTABLE EXPERIENCE, DON'T MISS
          THE IMMERSIVE 4/20 BOILER ROOM EVENT. AND OF COURSE, ALL MEMBERS WILL HAVE FREE ENTRY TO
          OUR PARTIES.
        </p>

        <h2 className={styles.sectionTitle}>IN OUR COMMUNITY, WE VALUE:</h2>
        <p className={styles.paragraph}>OPEN-MINDEDNESS: EMBRACING NEW EXPERIENCES.</p>
        <p className={styles.paragraph}>
          CULTURAL CURIOSITY: CELEBRATING DIVERSE PERSPECTIVES AND LEARNING ABOUT OTHER CULTURES.
        </p>
        <p className={styles.paragraph}>WARMTH: CONNECTING AND BUILDING A THRIVING COMMUNITY.</p>
        <p className={styles.paragraph}>
          COMMITMENT: ACTIVELY CONTRIBUTING AND SUPPORTING THE FLAVORS EXPERIENCE.
        </p>

        <h2 className={styles.sectionTitle}>KEY DETAILS:</h2>
        <p className={styles.paragraph}>$55 FOR NEW MEMBERS</p>
        <p className={styles.paragraph}>$45 FOR RETURNING MEMBERS</p>
        <p className={styles.paragraph}>APPLICATIONS ARE CLOSED</p>

        <p className={`${styles.paragraph} ${styles.footer}`}>
          IF YOU HAVE ANY QUESTIONS, PLEASE REACH OUT TO US AT USCFLAVORS@GMAIL.COM.
        </p>
      </main>
    </div>
  );
}
