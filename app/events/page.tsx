import styles from "./events.module.css";

export default function Events() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.heading}>EVENTS</h1>
        <hr className={styles.divider} />
        <p className={styles.subheading}>CLICK ON EACH EVENT TO LEARN MORE.</p>
      </main>
    </div>
  );
}