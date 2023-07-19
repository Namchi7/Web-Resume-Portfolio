import { useEffect } from "react";

import styles from "./css/certificates.module.css";

function Certificates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>CERTIFICATES</div>

      <div className={styles.certificate}>
        <img
          className={styles.certImg}
          src="https://drive.google.com/uc?export=download&id=1MWt4dUNcaH0h1T-kVzsJpEyAMGNmKV7T"
          alt="CompTIA CertMaster Linux+"
        />

        <div className={styles.certHead}>
          CompTIA CertMaster Learn Linux+ (XK0-004)
        </div>
        <p className={styles.certInfo}>
          This certificate was provided for successfully learning the contents
          of the CompTIA Learn Linux+ (XK0-004) syllabus.
        </p>
      </div>

      <div className={styles.certificate}>
        <img
          className={styles.certImg}
          src="https://drive.google.com/uc?export=download&id=1nd2d1KM2TjlreNEnE0UCneG9yXeuKFAi"
          alt="Codewars 2k19"
        />

        <div className={styles.certHead}>Certificate Name</div>
        <p className={styles.certInfo}>
          This certificate was provided for participating in the Hackathon
          organized CodingNinjas and solving given problems.
        </p>
      </div>

      {/* <div className={styles.certificate}>
        <div className={styles.certImg}></div>
        <div className={styles.certHead}>Certificate Name</div>
        <p className={styles.certInfo}>Certificate information</p>
      </div> */}
    </div>
  );
}

export default Certificates;
