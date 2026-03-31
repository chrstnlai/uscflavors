"use client";

import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Get In Touch</p>
          <h1 className={styles.heading}>ORDER HERE</h1>
          <div className={styles.heroDivider} />
          <p className={styles.subheading}>
            For any questions or inquiries, reach out below or email us at{" "}
            <a className={styles.emailLink} href="mailto:uscflavors@gmail.com">
              uscflavors@gmail.com
            </a>
          </p>
        </section>

        {/* Form Card */}
        <div className={styles.formCard}>
          <form className={styles.form}>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Name</label>
                <input className={styles.input} type="text" placeholder="Your name" />
              </div>
              <div className={styles.inputDivider} />
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className={styles.rowDivider} />

            <div className={styles.textareaGroup}>
              <label className={styles.label}>Order</label>
              <textarea
                className={styles.textarea}
                placeholder="Compliments to the chefs + notes for the kitchen..."
                onInput={(e) => {
                  const el = e.currentTarget;
                  el.style.height = "auto";
                  el.style.height = `${el.scrollHeight}px`;
                }}
              />
            </div>

            <div className={styles.rowDivider} />

            <div className={styles.submitRow}>  
              <span className={styles.submitNote}>yes, we read <u>every</u> message.</span>
              <button className={styles.submitButton} type="submit">
                Submit →
              </button>
            </div>

          </form>
        </div>

        {/* Contact alt */}
        <div className={styles.altRow}>
          <div className={styles.altCard}>
            <p className={styles.altLabel}>Email</p>
            <a href="mailto:uscflavors@gmail.com" className={styles.altValue}>
              uscflavors@gmail.com
            </a>
          </div>
          <div className={styles.altCard}>
            <p className={styles.altLabel}>Instagram</p>
            <a
              href="https://www.instagram.com/uscflavors"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.altValue}
            >
              @uscflavors
            </a>
          </div>
          <div className={styles.altCard}>
            <p className={styles.altLabel}>Prep Time</p>
            <p className={styles.altValue}>1–3 business days</p>
          </div>
        </div>

      </main>
    </div>
  );
}
