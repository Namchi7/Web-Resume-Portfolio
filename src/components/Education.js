import { useEffect } from "react";

import styles from "./css/education.module.css";

function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Education</div>

      <div className={styles.education}>
        <div className={styles.eduHeading}>GRADUATION</div>
        <div className={styles.eduBody}>
          <div className={styles.degree}>
            <strong>Degree:</strong> Bachelor of Technologies
          </div>
          <div className={styles.Specialization}>
            <strong>Specialization:</strong> Computer Science and Engineering
          </div>
          <div className={styles.grade}>
            <strong>CGPA:</strong> 8.01/10
          </div>
          <div className={styles.degree}>
            <strong>School:</strong> Lovely Professional University, Phagwara,
            Punjab
          </div>
        </div>
      </div>

      <div className={styles.education}>
        <div className={styles.eduHeading}>HIGHER SECONDARY</div>
        <div className={styles.eduBody}>
          <div className={styles.degree}>
            <strong>Degree:</strong> 10+2
          </div>
          <div className={styles.Specialization}>
            <strong>Specialization:</strong> Science + Computer Science
          </div>
          <div className={styles.grade}>
            <strong>Percentage:</strong> 73%
          </div>
          <div className={styles.degree}>
            <strong>School:</strong> Kendriya Vidyalaya AFS Jorhat, Assam
          </div>
        </div>
      </div>

      <div className={styles.education}>
        <div className={styles.eduHeading}>SENIOR SECONDARY</div>
        <div className={styles.eduBody}>
          <div className={styles.degree}>
            <strong>Degree:</strong> 10
          </div>
          <div className={styles.Specialization}>
            <strong>Specialization:</strong> N/A
          </div>
          <div className={styles.grade}>
            <strong>Percentage:</strong> 89.3%
          </div>
          <div className={styles.degree}>
            <strong>School:</strong> Kendriya Vidyalaya AFS Jorhat, Assam
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
