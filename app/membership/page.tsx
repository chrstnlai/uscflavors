import styles from "./membership.module.css";

const values = [
  { label: "Open-Mindedness", desc: "Embracing new experiences." },
  { label: "Cultural Curiosity", desc: "Celebrating diverse perspectives and learning about other cultures." },
  { label: "Warmth", desc: "Connecting and building a thriving community." },
  { label: "Commitment", desc: "Actively contributing and supporting the Flavors experience." },
];

const events = [
  "Food Wars",
  "Flavors Café",
  "Party Bus Food Crawl",
  "Sunday Jams",
  "Meet to Eats",
  "Member Retreat",
  "4/20 Boiler Room",
];

export default function Membership() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>Join the Feastivities</p>
          <h1 className={styles.heading}>MEMBERSHIP</h1>
          <div className={styles.heroDivider} />
        </section>

        <section className={styles.introCard}>
          <p className={styles.introText}>
            Join a close-knit group of foodies and like-minded individuals built around cuisine, culture, and conversation.
            This semester we're reducing our cohort to just <span className={styles.highlight}>50 members</span> for a more
            intimate experience — deeper connections, better events, and a community that actually knows your name.
          </p>
          <p className={styles.introText}>
            Members are placed into our <span className={styles.highlight}>Head Chef / Sous Chef program</span> and sorted
            into families who compete and collaborate through Food Wars, cultural potlucks, and exciting missions all semester long.
            Members also receive <span className={styles.highlight}>priority + free entry</span> to all our parties.
          </p>
        </section>

        {/* Two-col: Flavors Pack + Key Details */}
        <section className={styles.twoCol}>
          <div className={styles.card}>
            <span className={styles.cardTag}>Perks</span>
            <h2 className={styles.cardTitle}>Flavors Pack</h2>
            <p className={styles.cardBody}>
              Exclusive discounts and special treats from our partner brands — delivered to every member.
            </p>
          </div>

          <div className={`${styles.card} ${styles.cardDark}`}>
            <span className={`${styles.cardTag} ${styles.cardTagLight}`}>Pricing</span>
            <h2 className={`${styles.cardTitle} ${styles.cardTitleLight}`}>Key Details</h2>
            <div className={styles.pricingRow}>
              <div className={styles.pricingItem}>
                <span className={styles.pricingAmount}>$55</span>
                <span className={styles.pricingLabel}>New Members</span>
              </div>
              <div className={styles.pricingDivider} />
              <div className={styles.pricingItem}>
                <span className={styles.pricingAmount}>$45</span>
                <span className={styles.pricingLabel}>Returning Members</span>
              </div>
            </div>
            <div className={styles.statusBadge}><a href="/contact">Apply Now</a></div>
            
          </div>
        </section>

        {/* Events */}
        <section className={styles.section}>
          <p className={styles.sectionEyebrow}>What's Coming</p>
          <h2 className={styles.sectionTitle}>Events to Look Forward To</h2>
          <p className={styles.sectionDesc}>
            Thoughtfully curated to bring the community together in exciting and meaningful ways — from high-energy
            competitions to cozy Sunday hangs.
          </p>
          <div className={styles.eventGrid}>
            {events.map((e) => (
              <div key={e} className={styles.eventChip}>{e}</div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className={styles.section}>
          <p className={styles.sectionEyebrow}>What We Stand For</p>
          <h2 className={styles.sectionTitle}>In Our Community, We Value</h2>
          <div className={styles.valuesGrid}>
            {values.map(({ label, desc }) => (
              <div key={label} className={styles.valueCard}>
                <div className={styles.valueDot} />
                <h3 className={styles.valueLabel}>{label}</h3>
                <p className={styles.valueDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className={styles.contactBanner}>
          <p className={styles.contactText}> Hungry For More?</p>
          <a href="/contact" className={styles.contactLink}>
            Place an Order
          </a>
        </section>

      </main>
    </div>
  );
}
