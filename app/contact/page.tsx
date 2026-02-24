"use client";

import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.heading}>ORDER HERE</h1>
        <p className={styles.subheading}>
          For any questions or inquiries, please reach out to us here and we'll get back to you within the next 1-3
          business days. uscflavors@gmail.com
        </p>

        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>NAME:</label>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>EMAIL:</label>
              <input className={styles.input} type="email" />
            </div>
          </div>

          <div className={styles.textareaGroup}>
            <label className={styles.label}>ORDER:</label>
            <textarea
              className={styles.textarea}
              placeholder="COMPLIMENTS TO THE CHEFS + NOTES FOR THE KITCHEN..."
              onInput={(e) => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = `${el.scrollHeight}px`;
              }}
            />
          </div>

          <div className={styles.submitRow}>
            <button className={styles.submitButton} type="submit">
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
