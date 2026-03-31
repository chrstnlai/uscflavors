import styles from "./collaborations.module.css";
import Image from "next/image";

const stats = [
  { value: "650+", label: "Product Cans Distributed" },
  { value: "60K+", label: "Unique Impressions" },
  { value: "2,000+", label: "Event Attendees Reached" },
  { value: "$1K+", label: "Revenue Generated for Partners" },
];

const tags = [
  "Brand Awareness",
  "Event Activation",
  "Product Engagement",
  "Content Creation",
  "Guerilla Marketing",
  "Lead Generation",
  "Community-Centric Campaigns",
  "Top-of-Funnel Visibility",
];

const collabs = [
  {
    brand: "Rockstar Energy",
    event: "Steak N Skate",
    image: "/images/collaborations/1.avif",
    tags: ["Go-to-Market Strategy", "Earned Media", "Event Activation", "Guerilla Marketing"],
    stats: [
      "Distributed 650+ product cans to a high-value, hard-to-reach audience of skateboarders.",
      "Generated 60K+ unique impressions through event-based content.",
      "Executed a co-branded sponsorship attracting 250+ event attendees.",
      "Partnered with Powell Peralta and Kingswell Skate Shop for seamless community-driven integration.",
    ],
  },
  {
    brand: "Cerca Dating",
    event: "Kiss N Tell — Valentine's Day Party",
    image: "/images/collaborations/2.avif",
    tags: ["Go-to-Market Strategy", "Customer Acquisition", "Guerilla Marketing", "Innovative Brand Engagement"],
    stats: [
      "Integrated Cerca into a campus party activation — 75+ downloads and 50+ sign-ups at ≈$1.50 CAC.",
      "Drove 25K+ impressions via an all-expenses-paid date giveaway and experiential content.",
      "Executed a high-impact campus event with 200+ attendees; net-profitable for all partners.",
    ],
  },
  {
    brand: "The Living Room",
    event: "Flavors Café Pop-Up",
    image: "/images/collaborations/3.avif",
    tags: ["Experiential Retail", "Pop-Up Campaigns", "Event Marketing", "Brand Experience Design"],
    stats: [
      "Co-hosted an outdoor pop-up café with live music and specialty drinks.",
      "Drove $500+ in revenue for a local business in just three hours.",
      "Managed end-to-end execution — marketing, content, logistics — attracting 65+ paying customers.",
    ],
  },
  {
    brand: "Din Tai Fung",
    event: "Flavors Talks",
    image: "/images/collaborations/4.avif",
    tags: ["Speaker Series", "Talent Acquisition", "Content Production", "Audience Engagement"],
    stats: [
      "Hosted a speaker event with DTF's corporate chef and head recruiter — 75+ attendees, 10 job applications.",
      "Partnered with 5 cultural student orgs at USC to amplify reach.",
      "Generated 20K+ views on curated event content for DTF's career initiative.",
    ],
  },
  {
    brand: "Messob, Hoy-Ka, Amphai, Simpang Asia, Road to Seoul",
    event: "Meet to Eat",
    image: "/images/collaborations/5.avif",
    tags: ["Customer Acquisition", "Consumer Loyalty", "Community Engagement", "Promotional Campaigns"],
    stats: [
      "Generated $1,000+ in revenue for local restaurant partners.",
      "Orchestrated a one-day dining event driving 100 cohort members across multiple restaurants.",
      "Facilitated long-term loyalty between local restaurants and the USC student market.",
    ],
  },
  {
    brand: "NRG Esports",
    event: "Intel Night Market + Monster Hunter Wilds Launch",
    image: "/images/collaborations/6.avif",
    tags: ["Strategic Partnerships", "Demand Generation", "Vendor Management", "Community Engagement"],
    stats: [
      "Helped conceptualize and execute the food experience for a 2,000+ person NRG x Monster Hunter event.",
      "Drove 100 members to Intel's NRG collaboration and night market.",
      "Supported promotion and launch of Intel's new hardware through community activation.",
    ],
  },
];

export default function Collaborations() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>WORK WITH US</p>
          <h1 className={styles.heading}>COLLABORATIONS</h1>
          <div className={styles.heroDivider} />
        </section>

        {/* Pitch */}
        <section className={styles.pitchSection}>
          <div className={styles.pitchText}>
            <p className={styles.pitchLead}>
              We don't just connect brands with college students — we serve up a world of culture.
            </p>
            <p className={styles.pitchBody}>
              We're your gateway to the trendsetters, tastemakers, and loyal customers of tomorrow.
              From bold promotional campaigns to freelance creative solutions and lead generation,
              we bring targeted engagement directly to you — and we make sure it's anything but typical.
            </p>
            <p className={styles.pitchBody}>
              We believe in <span className={styles.highlight}>low-cost, high-impact strategies</span> rooted
              in creativity, authenticity, and real connections.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Contact Us →
            </a>
          </div>

          <div className={styles.statsGrid}>
            {stats.map(({ value, label }) => (
              <div key={label} className={styles.statCard}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tags */}
        <section className={styles.tagsSection}>
          <p className={styles.sectionEyebrow}>What We Bring to the Table</p>
          <div className={styles.tagRow}>
            {tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </section>

        {/* Collaborations */}
        <section className={styles.collabSection}>
          <p className={styles.sectionEyebrow}>Past Collaborations</p>
          <h2 className={styles.sectionTitle}>Some of our favorite work.</h2>

          <div className={styles.collabList}>
            {collabs.map((c, i) => (
              <div 
                key={c.brand}
                className={styles.collabCard}
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className={styles.collabImage}>
                  <Image
                    src={c.image}
                    alt={c.event}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.collabImageOverlay} />
                  <span className={styles.collabIndex}>0{i + 1}</span>
                </div>

                <div className={styles.collabContent}>
                  <div className={styles.collabHeader}>
                    <p className={styles.collabBrand}>{c.brand}</p>
                    <h3 className={styles.collabEvent}>{c.event}</h3>
                  </div>

                  <div className={styles.collabTags}>
                    {c.tags.map((t) => (
                      <span key={t} className={styles.collabTag}>{t}</span>
                    ))}
                  </div>

                  <ul className={styles.collabStats}>
                    {c.stats.map((s) => (
                      <li key={s} className={styles.collabStat}>
                        <span className={styles.statDot} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className={styles.ctaBanner}>
          <div>
            <p className={styles.ctaBannerEyebrow}>Let's Cook Together</p>
            <p className={styles.ctaBannerTitle}>Shape the future of brand engagement.</p>
          </div>
          <a href="/contact" className={styles.ctaBannerLink}>
            Contact →
          </a>
        </section>

      </main>
    </div>
  );
}
