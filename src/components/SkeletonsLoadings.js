import styles from "./css/skeletonLoadings.module.css";

export function CertificateLoading() {
  return (
    <div className={styles.certificateContainer}>
      <div className={styles.certificateContainer}>
        <div className={styles.certificateLogo}></div>

        <div className={styles.certificateName}></div>

        <div className={styles.certificateParagraph}>
          <div className={styles.certificateLine1}></div>
          <div className={styles.certificateLine2}></div>
          <div className={styles.certificateLine3}></div>
        </div>

        <div className={styles.certificateLastRow}>
          <div className={styles.certificateSignBox}></div>
        </div>
      </div>
    </div>
  );
}
