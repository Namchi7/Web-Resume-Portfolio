import { useEffect } from "react";

import { useDocumentTitle } from "./hooks/setDocumentTitle";
import styles from "./css/skills.module.css";

function Skills() {
  const [document_title, setDoucmentTitle] = useDocumentTitle("Aman Kumar");

  useEffect(() => {
    window.scrollTo(0, 0);
    setDoucmentTitle("Aman Kumar | Skills");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>SKILLS</div>
    </div>
  );
}

export default Skills;
