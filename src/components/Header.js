import { Link } from "react-router-dom";

import styles from "./css/header.module.css";
import amanLogo from "../assets/images/logo 500x500.svg";
import menuIcon from "../assets/images/Menu.svg";
import closeIcon from "../assets/images/Cross.svg";

function Header() {
  function openSideBar() {
    const sideBar = document.querySelector("[data-side-bar]");
    const overlay = document.querySelector("[data-overlay]");
    sideBar.style.display = "flex";
    sideBar.classList.remove(styles.close);
    sideBar.classList.add(styles.open);
    overlay.style.display = "block";
  }

  function closeSideBar() {
    const sideBar = document.querySelector("[data-side-bar]");
    const overlay = document.querySelector("[data-overlay]");
    sideBar.classList.remove(styles.open);
    sideBar.classList.add(styles.close);
    overlay.style.display = "none";
  }

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Link to="/" className={styles.logo}>
          <img src={amanLogo} alt="Logo" className={styles.amanLogo} />
          MAN KUMAR
        </Link>

        <nav className={styles.navLinks}>
          <Link
            to="/experience"
            className={styles.navLink}
            data-linkname="Experience"
          >
            Experience
          </Link>
          {/* <Link to="/education" className={styles.navLink}>
            Education
          </Link> */}
          <Link
            to="/projects"
            className={styles.navLink}
            data-linkname="Projects"
          >
            Projects
          </Link>
          {/* <Link to="/certificates" className={styles.navLink}>
            Certificates
          </Link> */}
          <Link to="/about" className={styles.navLink} data-linkname="About">
            About
          </Link>
          <Link
            to="/contact"
            className={styles.navLink}
            data-linkname="Contact"
          >
            Contact
          </Link>
        </nav>

        <img
          src={menuIcon}
          alt="Menu"
          className={styles.menuIcon}
          onClick={openSideBar}
        />

        <div className={styles.overlay} onClick={closeSideBar} data-overlay />

        <div className={`${styles.sideBar} ${styles.close}`} data-side-bar>
          <img
            src={closeIcon}
            alt="Close"
            className={styles.closeIcon}
            onClick={closeSideBar}
          />

          <nav className={styles.sideNavLinks}>
            <Link
              to="/experience"
              onClick={closeSideBar}
              className={styles.sideNavLink}
            >
              Experience
            </Link>
            {/* <Link
              to="/education"
              onClick={closeSideBar}
              className={styles.sideNavLink}
            >
              Education
            </Link> */}
            <Link
              to="/projects"
              onClick={closeSideBar}
              className={styles.sideNavLink}
            >
              Projects
            </Link>
            {/* <Link
              to="/certificates"
              onClick={closeSideBar}
              className={styles.sideNavLink}
            >
              Certificates
            </Link> */}
            <Link
              to="/about"
              onClick={closeSideBar}
              className={styles.sideNavLink}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={closeSideBar}
              className={styles.sideNavLink}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
