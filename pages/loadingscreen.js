import styles from "./page7.module.css";

export function LoadingScreen() {
  return (
    <div>
      <h3 className={styles.loadingText}>Booking Your Ideal Flight</h3>
      <img src="/loading.gif" className={styles.loading} alt="Loading..." />
    </div>
  );
}
