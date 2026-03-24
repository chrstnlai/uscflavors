import styles from "./events.module.css";

export default function Events() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.heading}>events</h1>
        <p className={styles.subheading}>*hint: click around to explore.</p>
      </main>
    </div>
  );
}