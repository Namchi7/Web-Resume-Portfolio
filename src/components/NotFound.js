import styles from "./css/notFound.module.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.notFountText}>Error 404 - Page Not Found</h2>
      <Link to="/" className={styles.homepageBtn}>
        Go To Homepage
      </Link>
    </div>
  );
}

export default NotFound;
