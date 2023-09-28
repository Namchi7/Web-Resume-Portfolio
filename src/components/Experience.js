import { useEffect } from "react";

import { useDocumentTitle } from "./hooks/setDocumentTitle";
import styles from "./css/experience.module.css";
import HighRadius from "../assets/images/highradius.png";

function Experience() {
  const [document_title, setDoucmentTitle] = useDocumentTitle("Aman Kumar");

  useEffect(() => {
    window.scrollTo(0, 0);
    setDoucmentTitle("Aman Kumar | Experience");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Experience</div>
      <div className={styles.experience}>
        <div className={styles.xpHeading}>Chatbot Developer</div>
        <div className={styles.xpInfo}>
          <div className={styles.xpShortInfo}>
            <div className={styles.shortLeft}>
              <div className={styles.company}>
                <strong>Company:</strong> HighRadius Technologies
              </div>

              <div className={styles.jobRole}>
                <strong>Job Role:</strong> Chatbot Developer Intern
              </div>

              <div className={styles.duration}>
                <strong>Duration:</strong> July 2021 - May 2022 (10 Months)
              </div>
            </div>
            <img
              src={HighRadius}
              alt="HighRadius"
              className={styles.companyLogo}
            />
          </div>
          <div className={styles.responsibilities}>
            <div className={styles.resHead}>
              <strong>Responsibilities:</strong>
            </div>
            <div className={styles.resList}>
              <li className={styles.responsibility}>
                Create, modify and Test chatbot intents in Google DialogFlow.
              </li>
              <li className={styles.responsibility}>
                Integrate the intents with the backend using company’s
                proprietary software.
              </li>
              <li className={styles.responsibility}>
                Integrate APIs and check the working of the intents with respect
                to the product specification.
              </li>
              <li className={styles.responsibility}>
                Check voice commands for the intents.
              </li>
              <li className={styles.responsibility}>
                Create variants for statements provided in the intents.
              </li>
              <li className={styles.responsibility}>
                Create new intents for multiple languages and also make
                multilingual intents for existing intents.
              </li>
            </div>
          </div>

          <div className={styles.learnings}>
            <div className={styles.learnHead}>
              <strong>Learning Experiences:</strong>
            </div>
            <div className={styles.learnList}>
              <li className={styles.learning}>
                First-hand experience of corporate environment.
              </li>
              <li className={styles.learning}>
                Know-how of the working in a company.
              </li>
              <li className={styles.learning}>
                How to attend and take part in meetings.
              </li>
              <li className={styles.learning}>
                Team work and group discussion on making decisions.
              </li>
              <li className={styles.learning}>
                Planning for a project/work assigned.
              </li>
              <li className={styles.learning}>
                Distribution of work for better efficiency.
              </li>
              <li className={styles.learning}>
                Importance of on-time completion of work.
              </li>
            </div>
          </div>

          <div className={styles.skills}>
            <div className={styles.skillHead}>
              <strong>Skills:</strong>
            </div>
            <div className={styles.skillList}>
              <div className={styles.skill}>
                <div className={styles.skillRow1}>
                  <div className={styles.skillName}>Google DialogFlow: </div>
                  <div className={styles.skillLevel}>
                    <div
                      style={{ backgroundColor: "#FFCD6B" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "#FFCD6B" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "#FFCD6B" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "#FFCD6B" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "transparent" }}
                      className={styles.level}
                    />
                  </div>
                </div>
                <div className={styles.skillRow2}>
                  Used for creating chatbot intents fro the chatbot and
                  configuring variants, entities and responses.
                </div>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillRow1}>
                  <div className={styles.skillName}>MySQL: </div>
                  <div className={styles.skillLevel}>
                    <div
                      style={{ backgroundColor: "#FFCD6B" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "#FFCD6B" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "transparent" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "transparent" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "transparent" }}
                      className={styles.level}
                    />
                  </div>
                </div>
                <div className={styles.skillRow2}>
                  Used to fetch data to show in the chatbot responses by using
                  filters provided in variants using entities.
                </div>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillRow1}>
                  <div className={styles.skillName}>Front-End(ReactJs): </div>
                  <div className={styles.skillLevel}>
                    <div
                      style={{ backgroundColor: "#FFCD6B" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "#FFCD6B" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "#FFCD6B" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "transparent" }}
                      className={styles.level}
                    />
                    <div
                      style={{ backgroundColor: "transparent" }}
                      className={styles.level}
                    />
                  </div>
                </div>
                <div className={styles.skillRow2}>
                  Learnt during primary assessment of the internship for
                  department assignment and skill assessment by completing
                  milestone on a front-end project given by the managers using{" "}
                  <strong>ReactJs</strong> based on design provided in Figma
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
