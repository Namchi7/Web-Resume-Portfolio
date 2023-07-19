import { useEffect } from "react";

import styles from "./css/skills.module.css";

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>SKILLS</div>
    </div>
  );
}

export default Skills;
