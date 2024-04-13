import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useDocumentTitle } from "./hooks/setDocumentTitle";
import styles from "./css/projects.module.css";
import openLinkIcon from "../assets/images/Open-Link-White.svg";
// import openLinkIcon from "../assets/images/Open-Link.svg";
import githubIcon from "../assets/images/github.svg";
// import githubIcon from "../assets/images/Github-Black.svg";
import htmlIcon from "../assets/images/HTML5.svg";
import cssIcon from "../assets/images/CSS3.svg";
import jsIcon from "../assets/images/JavaScript.svg";
import reactIcon from "../assets/images/ReactJs.svg";
import nodeIcon from "../assets/images/NodeJs.svg";
import expressIcon from "../assets/images/ExpressJs.svg";
import mongoDBIcon from "../assets/images/MongoDB.svg";
import typescriptIcon from "../assets/images/typescript.svg";
import socketIOIcon from "../assets/images/socket-dot-io.svg";
import tailwindCSSIcon from "../assets/images/Tailwind-css.svg";
import jwtIcon from "../assets/images/JWT.svg";
import reduxIcon from "../assets/images/Redux-Toolkit.svg";
import reactRouterIcon from "../assets/images/React-Router-Dom.svg";

import vartaPreview from "../assets/images/Varta Preview 600px.png";
import taskItPreview from "../assets/images/taskit preview 600px.png";
import lsAnimePreview from "../assets/images/lsAnime preview 600px.png";
import countriesPreview from "../assets/images/countries preview 600px.png";
import shoppingListPreview from "../assets/images/Shopping List 600px.png";
import ticTacToePreview from "../assets/images/Tic-Tac-Toe preview 600px.png";

function Projects() {
  const [document_title, setDocumentTitle] = useDocumentTitle("Aman Kumar");

  useEffect(() => {
    window.scrollTo(0, 0);
    setDocumentTitle("Aman Kumar | Projects");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>PROJECTS</div>

      <div className={styles.project}>
        <img
          src={vartaPreview}
          alt="Varta Preview"
          className={styles.projectImg}
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
              <div className={styles.techIconContainer} data-tech-name="NodeJs">
                <img src={nodeIcon} alt="NodeJs" className={styles.techIcon} />
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
          <div className={styles.projectShortInfo}>
            This is a Chat App in MERN, Tailwind CSS and TypeScript, which
            connects you with other users in real-time <br />
            Features: - Chat in real-time using Socket.IO <br />
            User Authentication, <br />
            User Password hashed and stored, <br />
            Login session implemented using JWT (JSON Web Token).
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <img
          src={taskItPreview}
          alt="TaskIt Preview"
          className={styles.projectImg}
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
                alt="taskIt"
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
              <div className={styles.techIconContainer} data-tech-name="NodeJs">
                <img src={nodeIcon} alt="NodeJs" className={styles.techIcon} />
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
          <div className={styles.projectShortInfo}>
            This is a task management app in MERN, which organizes tasks into
            to-do, ongoing and done categories. <br />
            Features: - Create Task, Edit Task, Delete Task, User
            Authentication, User Password hashed and stored, Login session
            implemented using JWT (JSON Web Token).
          </div>
        </div>
      </div>

      {/* <hr /> */}

      <div className={styles.project}>
        <img
          src={lsAnimePreview}
          alt="lsAnime Preview"
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
              to="https://docs.api.jikan.moe"
              target="_blank"
              rel="noopener noreferrer"
            >
              API Link
            </Link>
            ).
          </div>
        </div>
      </div>

      {/* <hr /> */}

      <div className={styles.project}>
        <img
          src={countriesPreview}
          alt="Countries Preview"
          className={styles.projectImg}
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

      {/* <hr /> */}

      <div className={styles.project}>
        <img
          src={shoppingListPreview}
          alt="Shopping List Preview"
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
            Create, edit and manage tou shopping lists in one place so you do
            not forget your important items saving you an extra trip to the
            market.
          </div>
        </div>
      </div>

      {/* <hr /> */}

      <div className={styles.project}>
        <img
          src={ticTacToePreview}
          alt="Shopping List Preview"
          className={styles.projectImg}
        />
        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>Tic-Tac-Toe</div>
          <div className={styles.projectLinks}>
            <Link
              to="https://namchi7.github.io/Tic-Tac-Toe-JS-Game/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.siteLinkContainer}
            >
              <img
                src={openLinkIcon}
                alt="Tic-Tac-Toe"
                className={styles.siteLink}
              />
            </Link>
            <Link
              to="https://github.com/Namchi7/Tic-Tac-Toe-JS-Game"
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
            This is a two player Tic-Tac-Toe game where you can select custom
            icons provided giving a whole new gaming experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
