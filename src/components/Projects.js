import { Link } from "react-router-dom";
import { useEffect } from "react";

import styles from "./css/projects.module.css";
import openLinkIcon from "../assets/images/Open-Link.svg";
import githubIcon from "../assets/images/Github-Black.svg";
import htmlIcon from "../assets/images/HTML5.svg";
import cssIcon from "../assets/images/CSS3.svg";
import jsIcon from "../assets/images/JavaScript.svg";
import reactIcon from "../assets/images/ReactJs.svg";
import reduxIcon from "../assets/images/Redux-Toolkit.svg";
import reactRouterIcon from "../assets/images/React-Router-Dom.svg";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>PROJECTS</div>
      <div className={styles.project}>
        <img
          src="https://drive.google.com/uc?export=download&id=1G_4UHNZ-J04tivp-U5-k44QkvPbAdpJS"
          alt="lsAnime Preview Image"
          className={styles.projectImg}
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
          <div className={styles.projectShortInfo}>
            One stop website to check out the information on all your favorite
            animes. This project is made using ReactJs, Redux-Toolkit and React
            Router. API is provided by{" "}
            <Link
              to="https://jikan.moe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jikan.moe
            </Link>
            (
            <Link
              to="https://github.com/Namchi7/lsAnime"
              target="_blank"
              rel="noopener noreferrer"
            >
              API Link
            </Link>
            ).
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <img
          src="https://drive.google.com/uc?export=download&id=1qW58ac-poWlMAHcqPSLqUqEzwxd3n3FF"
          alt="Countries Preview Image"
          className={styles.projectImg}
        />
        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>Countries</div>
          <div className={styles.projectLinks}>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.siteLinkContainer}
            >
              <img
                src={openLinkIcon}
                alt="Countries"
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
                alt="Github/Countries"
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
          <div className={styles.projectShortInfo}>
            Some information regarding the project like, the working, flow and
            technologies used. Also information about the API used, if any.
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <img
          src="https://drive.google.com/uc?export=download&id=1rgTXAXUOdUFurcgDgy3TOGUl0VtGa4cp"
          alt="Shopping List Preview Image"
          className={styles.projectImg}
        />
        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>Shopping List</div>
          <div className={styles.projectLinks}>
            <Link
              to="https://namchi7.github.io/Shopping-List/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.siteLinkContainer}
            >
              <img
                src={openLinkIcon}
                alt="Shopping List"
                className={styles.siteLink}
              />
            </Link>
            <Link
              to="https://github.com/Namchi7/Shopping-List"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.siteLinkContainer}
            >
              <img
                src={githubIcon}
                alt="Github/Shopping-List"
                className={styles.siteLink}
              />
            </Link>
          </div>
          <div className={styles.techUsed}>
            <strong>Tech Used:</strong>
            <div className={styles.techIcons}>
              <div className={styles.techIconContainer} data-tech-name="HTML">
                <img src={htmlIcon} alt="HTML" className={styles.techIcon} />
              </div>
              <div className={styles.techIconContainer} data-tech-name="CSS">
                <img src={cssIcon} alt="CSS" className={styles.techIcon} />
              </div>
              <div
                className={styles.techIconContainer}
                data-tech-name="JavaScript"
              >
                <img
                  src={jsIcon}
                  alt="JavaScript"
                  className={styles.techIcon}
                />
              </div>
            </div>
          </div>
          <div className={styles.projectShortInfo}>
            Some information regarding the project like, the working, flow and
            technologies used. Also information about the API used, if any.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
