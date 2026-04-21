import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <span className={styles.siteFooterCenter}>
        Website designed and built by Jhene Ekuwem (Cohort S&apos;25), Olivia
        Nazari (Cohort F&apos;25), Christine Lai (Cohort S&apos;24)
      </span>
    </footer>
  );
}
