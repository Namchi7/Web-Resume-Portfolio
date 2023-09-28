import { Link } from "react-router-dom";

import styles from "./css/footer.module.css";
import githubIcon from "../assets/images/github.svg";
import linkedInIcon from "../assets/images/linkedIn.svg";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.navLinks}>
          <Link to="/experience" className={styles.experience}>
            Experience
          </Link>
          {/* <Link to="/education" className={styles.education}>
            Education
          </Link> */}
          <Link to="/projects" className={styles.projects}>
            Projects
          </Link>
          {/* <Link to="/certificates" className={styles.certificates}>
            Certificates
          </Link> */}
          <Link to="/about" className={styles.about}>
            About
          </Link>
          <Link to="/contact" className={styles.contact}>
            Contact
          </Link>
        </div>
      </div>
      <div className={styles.sns}>
        <Link
          to="https://www.linkedin.com/in/aman-kumar-bb9738171/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.siteLinkContainer}
        >
          <img src={linkedInIcon} alt="LinkedIn" className={styles.siteLink} />
        </Link>

        <Link
          to="https://github.com/Namchi7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.siteLinkContainer}
        >
          <img src={githubIcon} alt="Github" className={styles.siteLink} />
        </Link>
      </div>
      <Link to="/" className={styles.logo}>
        AMAN KUMAR
      </Link>
    </div>
  );
}

export default Footer;
