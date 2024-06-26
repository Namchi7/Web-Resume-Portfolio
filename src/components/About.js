import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useDocumentTitle } from "./hooks/setDocumentTitle";

import styles from "./css/about.module.css";
import GithubIcon from "../assets/images/github.svg";
import LinkedInIcon from "../assets/images/linkedIn.svg";

function About() {
  const [document_title, setDocumentTitle] = useDocumentTitle("Aman Kumar");

  useEffect(() => {
    window.scrollTo(0, 0);
    setDocumentTitle("Aman Kumar | About");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.name}>Aman Kumar</div>

      <div className={styles.aboutHead}>
        I am a front-end developer based in Sirsa, Haryana, India📍
      </div>

      <div className={styles.aboutInfo}>
        <p className={styles.about}>
          I am a 2022 B.Tech. CSE graduate from Lovely Professional University,
          with overall 8.01 CGPA. I am a self-taught Frontend developer in
          ReactJs, and learning <strong>MERN</strong> technologies to become a
          Full Stack developer and I am flexible in learning new technologies so
          as to grow myself and meet the requirements of the project.
        </p>

        <p className={styles.about}>
          I am self-motivated, adaptive and a team player, while being a team
          player, I am also capable of solo play. I have been in the field of
          Computer Science since 11th standard and have been making continuous
          efforts in this field. I have tried many programming languages like C,
          C++, Python, Java, HTML, CSS, JavaScript and most of which I have
          learned through the B.Tech. curriculum and advance in them on my own.
          Currently, I am building my skills in web development around
          JavaScript.
        </p>
      </div>

      <div className={styles.sns}>
        <Link
          to="https://www.linkedin.com/in/aman-kumar-bb9738171"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${styles.link} ${styles.linkedIn}`} data-linkedin>
            <div className={styles.iconContainer}>
              <img src={LinkedInIcon} alt="LinkedIn" className={styles.icon} />
            </div>
            <div className={styles.linkText}>
              <span>LinkedIn</span>
            </div>
          </div>
        </Link>

        <Link
          to="https://github.com/Namchi7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${styles.link} ${styles.github}`} data-github>
            <div className={styles.iconContainer}>
              <img src={GithubIcon} alt="Github" className={styles.icon} />
            </div>
            <div className={styles.linkText}>
              <span>Github</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default About;
