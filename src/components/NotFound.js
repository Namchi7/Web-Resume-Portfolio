import { Link } from "react-router-dom";
import { useEffect } from "react";

import styles from "./css/notFound.module.css";
import { useDocumentTitle } from "./hooks/setDocumentTitle";

function NotFound() {
  const [document_title, setDocumentTitle] = useDocumentTitle("Aman Kumar");

  useEffect(() => {
    window.scrollTo(0, 0);
    setDocumentTitle("Aman Kumar | Page Not Found");
  }, []);

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
