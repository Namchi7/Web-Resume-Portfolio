import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useDocumentTitle } from "./hooks/setDocumentTitle";
import styles from "./css/home.module.css";
import dp from "../assets/images/DP.png";
import htmlIcon from "../assets/images/HTML5.svg";
import cssIcon from "../assets/images/CSS3.svg";
import jsIcon from "../assets/images/JavaScript.svg";
import reactIcon from "../assets/images/ReactJs.svg";
import figmaIcon from "../assets/images/Figma.svg";
import downloadIcon from "../assets/images/Download.svg";
import reduxIcon from "../assets/images/Redux-Toolkit.svg";
import reactRouterIcon from "../assets/images/React-Router-Dom.svg";
import openLinkIcon from "../assets/images/Open-Link.svg";
import githubIcon from "../assets/images/Github-Black.svg";

function Home() {
  const resumeFolder =
    "https://drive.google.com/drive/folders/1qkjaIZpz7R03DGHVFcdKHqM1s2vByyHx?usp=drive_link";

  const [document_title, setDoucmentTitle] = useDocumentTitle("Aman Kumar");

  useEffect(() => {
    window.scrollTo(0, 0);
    setDoucmentTitle("Aman Kumar | Education");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.landingView}>
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <div className={styles.name}>Aman Kumar</div>

            <div className={styles.roles}>
              <div className={styles.role}>Front-End Developer</div>
              <div className={styles.role}>Cybersecurity Enthusiast</div>
            </div>
          </div>

          <div className={styles.imgContainer}>
            <div className={styles.image}>
              <img src={dp} alt="Aman Kumar DP" className={styles.dp} />
            </div>
            <div className={styles.imageBG} />
          </div>
        </div>

        <div className={styles.skillSet}>
          <div>Skills</div>

          <hr />

          <div className={styles.skillIcons}>
            <div className={styles.skillIconContainer} data-skill-name="HTML5">
              <img src={htmlIcon} alt="HTML5" className={styles.skillIcon} />
            </div>
            <div className={styles.skillIconContainer} data-skill-name="CSS3">
              <img src={cssIcon} alt="CSS3" className={styles.skillIcon} />
            </div>
            <div
              className={styles.skillIconContainer}
              data-skill-name="JavaScript"
            >
              <img src={jsIcon} alt="JavaScript" className={styles.skillIcon} />
            </div>
            <div
              className={styles.skillIconContainer}
              data-skill-name="ReactJs"
            >
              <img src={reactIcon} alt="ReactJs" className={styles.skillIcon} />
            </div>
            <div className={styles.skillIconContainer} data-skill-name="Figma">
              <img src={figmaIcon} alt="Figma" className={styles.skillIcon} />
            </div>
          </div>

          <hr />

          <Link
            to={resumeFolder}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadContainer}
            data-dl="Download Resume"
          >
            <img
              src={downloadIcon}
              alt="Download Resume"
              className={styles.downloadIcon}
            />
          </Link>
        </div>
      </div>

      <div className={styles.projectsPreview}>
        <div className={styles.projectHeading}>PROJECTS</div>
        <div className={styles.project}>
          <img
            src="https://drive.google.com/uc?export=download&id=1G_4UHNZ-J04tivp-U5-k44QkvPbAdpJS"
            alt="lsAnime Preview Image"
            className={styles.previewImg}
          />

          <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>lsAnime</div>
            <div className={styles.projectLinks}>
              <Link
                to="https://lsanime.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteLinkContainer}
              >
                <img
                  src={openLinkIcon}
                  alt="lsAnime"
                  className={styles.siteLink}
                />
              </Link>
              <Link
                to="https://github.com/Namchi7/lsAnime"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteLinkContainer}
              >
                <img
                  src={githubIcon}
                  alt="Github/lsAnime"
                  className={styles.siteLink}
                />
              </Link>
            </div>
            <div className={styles.techUsed}>
              <strong>Tech Used:</strong>
              <div className={styles.techIcons}>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="ReactJs"
                >
                  <img
                    src={reactIcon}
                    alt="ReactJs"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="Redux-Toolkit"
                >
                  <img
                    src={reduxIcon}
                    alt="Redux-Toolkit"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="Redux-Router-Dom"
                >
                  <img
                    src={reactRouterIcon}
                    alt="React-Router-Dom"
                    className={styles.techIcon}
                  />
                </div>
              </div>
            </div>
            <div className={styles.briefInfo}>
              Get information about your favorite animes.
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }} className={styles.project}>
          <img
            src="https://drive.google.com/uc?export=download&id=1qW58ac-poWlMAHcqPSLqUqEzwxd3n3FF"
            alt="Countries Preview Image"
            className={styles.previewImg}
          />

          <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>Countries</div>
            <div className={styles.projectLinks}>
              <Link
                to="https://countriesaman.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteLinkContainer}
              >
                <img
                  src={openLinkIcon}
                  alt="lsAnime"
                  className={styles.siteLink}
                />
              </Link>
              <Link
                to="https://github.com/Namchi7/Countries"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteLinkContainer}
              >
                <img
                  src={githubIcon}
                  alt="Github/lsAnime"
                  className={styles.siteLink}
                />
              </Link>
            </div>
            <div className={styles.techUsed}>
              <strong>Tech Used:</strong>
              <div className={styles.techIcons}>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="ReactJs"
                >
                  <img
                    src={reactIcon}
                    alt="ReactJs"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="Redux-Toolkit"
                >
                  <img
                    src={reduxIcon}
                    alt="Redux-Toolkit"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="Redux-Router-Dom"
                >
                  <img
                    src={reactRouterIcon}
                    alt="React-Router-Dom"
                    className={styles.techIcon}
                  />
                </div>
              </div>
            </div>
            <div className={styles.briefInfo}>
              Get information on over 200+ countries in one place.
            </div>
          </div>
        </div>
        <Link to="/projects" className={styles.projectsBtn}>
          ALL PROJECTS
        </Link>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeading}>ABOUT</div>
        <div className={styles.aboutInfo}>
          <img
            src="https://drive.google.com/uc?export=download&id=1933q-Cc04PYx-9_8_7MilTb_SmnXkDWx"
            alt="About Preview Image"
            className={styles.aboutImg}
          />
          <div className={styles.aboutShortInfo}>
            <div className={styles.shortIntro}>
              I am a front-end developer based in Sirsa, Haryana, India📍
            </div>
            <p className={styles.longIntro}>
              I am a 2022 B.Tech. CSE graduate from Lovely Professional
              University, with overall 8.01 CGPA. I started learning{" "}
              <strong>Frond-End</strong> development after my graduation as
              seeing my work take form in front of my eyes fueled my interest.
              While learning Front-End, I am also interested in the field of{" "}
              <strong>Cybersecurity</strong>.
            </p>
          </div>
        </div>
        <Link to="/about" className={styles.aboutBtn}>
          ABOUT PAGE
        </Link>
      </div>
    </div>
  );
}

export default Home;
