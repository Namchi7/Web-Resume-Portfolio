import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useDocumentTitle } from "./hooks/setDocumentTitle";
import styles from "./css/home.module.css";
import dp from "../assets/images/DP.png";
import dp_small_bg from "../assets/images/DP-small-bg.png";
import htmlIcon from "../assets/images/HTML5.svg";
import cssIcon from "../assets/images/CSS3.svg";
import jsIcon from "../assets/images/JavaScript.svg";
import reactIcon from "../assets/images/ReactJs.svg";
import nodeIcon from "../assets/images/NodeJs.svg";
import expressIcon from "../assets/images/ExpressJs.svg";
import mongoDBIcon from "../assets/images/MongoDB.svg";
import socketIOIcon from "../assets/images/socket-dot-io.svg";
import tailwindCSSIcon from "../assets/images/Tailwind-css.svg";
import typescriptIcon from "../assets/images/typescript.svg";
import jwtIcon from "../assets/images/JWT.svg";
import figmaIcon from "../assets/images/Figma.svg";
import downloadIcon from "../assets/images/Download.svg";
import reduxIcon from "../assets/images/Redux-Toolkit.svg";
import reactRouterIcon from "../assets/images/React-Router-Dom.svg";
import aboutImg from "../assets/images/Compressed/about.png";
import openLinkIcon from "../assets/images/Open-Link-White.svg";
// import openLinkIcon from "../assets/images/Open-Link.svg";
import githubIcon from "../assets/images/github.svg";
// import githubIcon from "../assets/images/Github-Black.svg";

import vartaPreview from "../assets/images/Varta Preview 600px.png";
import taskItPreview from "../assets/images/taskit preview 600px.png";
import aboutPreview from "../assets/images/About Page preview.png";

function Home() {
  const resumeFolder =
    "https://drive.google.com/drive/folders/1qkjaIZpz7R03DGHVFcdKHqM1s2vByyHx?usp=drive_link";

  const [document_title, setDocumentTitle] = useDocumentTitle("Aman Kumar");

  useEffect(() => {
    window.scrollTo(0, 0);
    setDocumentTitle("Aman Kumar");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.landingView}>
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <h1 className={styles.name}>Aman Kumar</h1>

            <div className={styles.roles}>
              <div className={styles.role}>FrontEnd ~ Full Stack Developer</div>
              {/* <div className={styles.role}>Cybersecurity Enthusiast</div> */}
            </div>
          </div>

          <div className={styles.imgContainer}>
            <div
              style={{
                background: `url(${dp_small_bg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className={styles.image}
            >
              <img src={dp} alt="Aman Kumar DP" className={styles.dp} />
            </div>
            <div className={styles.imageBG} />
          </div>
        </div>

        <div className={styles.skillSet}>
          <div>Skills</div>

          <hr />

          <div className={styles.skillIcons}>
            <div className={styles.skillIconsRow}>
              <div
                className={styles.skillIconContainer}
                data-skill-name="ReactJs"
              >
                <img
                  src={reactIcon}
                  alt="ReactJs"
                  className={styles.skillIcon}
                />
              </div>
              <div
                className={styles.skillIconContainer}
                data-skill-name="NodeJs"
              >
                <img src={nodeIcon} alt="NodeJs" className={styles.skillIcon} />
              </div>
              <div
                className={`${styles.skillIconContainer} ${styles.expressIcon}`}
                data-skill-name="ExpressJs"
              >
                <img
                  src={expressIcon}
                  alt="ExpressJs"
                  className={styles.skillIcon}
                />
              </div>
              <div
                className={styles.skillIconContainer}
                data-skill-name="MongoDB"
              >
                <img
                  src={mongoDBIcon}
                  alt="MongoDB"
                  className={styles.skillIcon}
                />
              </div>
              <div
                className={styles.skillIconContainer}
                data-skill-name="JavaScript"
              >
                <img
                  src={jsIcon}
                  alt="JavaScript"
                  className={styles.skillIcon}
                />
              </div>
            </div>
            <div className={styles.skillIconsRow}>
              <div
                className={styles.skillIconContainer}
                data-skill-name="TypeScript"
              >
                <img
                  src={typescriptIcon}
                  alt="TypeScript"
                  className={styles.skillIcon}
                />
              </div>
              <div
                className={styles.skillIconContainer}
                data-skill-name="Tailwind CSS"
              >
                <img
                  src={tailwindCSSIcon}
                  alt="Tailwind CSS"
                  className={styles.skillIcon}
                />
              </div>
              <div
                className={styles.skillIconContainer}
                data-skill-name="Socket.IO"
              >
                <img
                  src={socketIOIcon}
                  alt="Socket.IO"
                  className={styles.skillIcon}
                />
              </div>
              <div
                className={styles.skillIconContainer}
                data-skill-name="HTML5"
              >
                <img src={htmlIcon} alt="HTML5" className={styles.skillIcon} />
              </div>
              <div className={styles.skillIconContainer} data-skill-name="CSS3">
                <img src={cssIcon} alt="CSS3" className={styles.skillIcon} />
              </div>
              <div
                className={styles.skillIconContainer}
                data-skill-name="Figma"
              >
                <img src={figmaIcon} alt="Figma" className={styles.skillIcon} />
              </div>
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
            src={vartaPreview}
            alt="Varta Preview"
            className={styles.previewImg}
          />

          <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>Varta - ChatApp</div>
            <div className={styles.projectLinks}>
              <Link
                to="https://varta-chatapp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteLinkContainer}
              >
                <img
                  src={openLinkIcon}
                  alt="Varta - ChatApp"
                  className={styles.siteLink}
                />
              </Link>
              <Link
                to="https://github.com/Namchi7/varta-chatapp"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteLinkContainer}
              >
                <img
                  src={githubIcon}
                  alt="Github/varta"
                  className={styles.siteLink}
                />
              </Link>
            </div>
            <div className={styles.techUsed}>
              <strong className={styles.techUsedText}>Tech Used:</strong>
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
                  data-tech-name="NodeJs"
                >
                  <img
                    src={nodeIcon}
                    alt="NodeJs"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={`${styles.techIconContainer} ${styles.expressIcon}`}
                  data-tech-name="ExpressJs"
                >
                  <img
                    src={expressIcon}
                    alt="ExpressJs"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="MongoDB"
                >
                  <img
                    src={mongoDBIcon}
                    alt="MongoDB"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="TypeScript"
                >
                  <img
                    src={typescriptIcon}
                    alt="TypeScript"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="Tailwind CSS"
                >
                  <img
                    src={tailwindCSSIcon}
                    alt="Tailwind CSS"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="Socket.IO"
                >
                  <img
                    src={socketIOIcon}
                    alt="Socket.IO"
                    className={styles.techIcon}
                  />
                </div>
                <div className={styles.techIconContainer} data-tech-name="JWT">
                  <img src={jwtIcon} alt="JWT" className={styles.techIcon} />
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
              This is a Chat App in MERN, Tailwind CSS and TypeScript, which
              connects you with other users in real-time <br />
              Features: - Chat in real-time using Socket.IO <br />
              User Authentication, <br />
              User Password hashed and stored, <br />
              Login session implemented using JWT (JSON Web Token).
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.project}>
          <img
            src={taskItPreview}
            alt="TaskIt Preview"
            className={styles.previewImg}
          />

          <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>TaskIt</div>
            <div className={styles.projectLinks}>
              <Link
                to="https://taskit0.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteLinkContainer}
              >
                <img
                  src={openLinkIcon}
                  alt="TaskIt"
                  className={styles.siteLink}
                />
              </Link>
              <Link
                to="https://github.com/Namchi7/taskit"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteLinkContainer}
              >
                <img
                  src={githubIcon}
                  alt="Github/taskit"
                  className={styles.siteLink}
                />
              </Link>
            </div>

            <div className={styles.techUsed}>
              <strong className={styles.techUsedText}>Tech Used:</strong>

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
                  data-tech-name="NodeJs"
                >
                  <img
                    src={nodeIcon}
                    alt="NodeJs"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={`${styles.techIconContainer} ${styles.expressIcon}`}
                  data-tech-name="ExpressJs"
                >
                  <img
                    src={expressIcon}
                    alt="ExpressJs"
                    className={styles.techIcon}
                  />
                </div>
                <div
                  className={styles.techIconContainer}
                  data-tech-name="MongoDB"
                >
                  <img
                    src={mongoDBIcon}
                    alt="MongoDB"
                    className={styles.techIcon}
                  />
                </div>
                <div className={styles.techIconContainer} data-tech-name="JWT">
                  <img src={jwtIcon} alt="JWT" className={styles.techIcon} />
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
              This is a task management app in MERN, which organizes tasks into
              to-do, ongoing and done categories. <br />
              Features: - Create Task, Edit Task, Delete Task, User
              Authentication, User Password hashed and stored, Login session
              implemented using JWT (JSON Web Token).
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
            style={{
              background: `url(${aboutImg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            src={aboutPreview}
            alt="About Preview"
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
