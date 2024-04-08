import React from "react";
// import PropTypes from "prop-types";
import styles from "./Skills.module.css";

const Skills = () => (
  <div className={styles.Skills}>
    <div>
      <h1 className={styles.Content}>SKILLS</h1>
    </div>
    <div className={styles.Total_Skills}>
      {/* Skills 1 */}
      <div className={styles.Skill}>
        <div className={styles.Skills_Top}>
          <span>
            <img
              src="media/java.png"
              alt="java"
              className={styles.Logo_skill}
            />
          </span>
          <span>Java</span>
          <span>80%</span>
        </div>
        <div className={styles.Skills_Bottam}>
          <div className={styles.SkillPer1}></div>
        </div>
      </div>

      {/* Skills 1 */}
      <div className={styles.Skill}>
        <div className={styles.Skills_Top}>
          <span>
            <img
              src="media/html.png"
              alt="html / css"
              className={styles.Logo_skill}
            />
          </span>
          <span>HTML5 / CSS3</span>
          <span>90%</span>
        </div>
        <div className={styles.Skills_Bottam}>
          <div className={styles.SkillPer2}></div>
        </div>
      </div>

      {/* Skills 1 */}
      <div className={styles.Skill}>
        <div className={styles.Skills_Top}>
          <span>
            <img
              src="media/js.png"
              alt="javascript"
              className={styles.Logo_skill}
            />
          </span>
          <span>JavaScript</span>
          <span>75%</span>
        </div>
        <div className={styles.Skills_Bottam}>
          <div className={styles.SkillPer3}></div>
        </div>
      </div>

      {/* Skills 1 */}
      <div className={styles.Skill}>
        <div className={styles.Skills_Top}>
          <span>
            <img
              src="media/react.png"
              alt="react"
              className={styles.Logo_skill}
            />
          </span>
          <span>React</span>
          <span>75%</span>
        </div>
        <div className={styles.Skills_Bottam}>
          <div className={styles.SkillPer4}></div>
        </div>
      </div>

      {/* Skills 1 */}
      <div className={styles.Skill}>
        <div className={styles.Skills_Top}>
          <span>
            <img
              src="media/sb.png"
              alt="spring boot"
              className={styles.Logo_skill}
            />
          </span>
          <span>Spring Boot</span>
          <span>75%</span>
        </div>
        <div className={styles.Skills_Bottam}>
          <div className={styles.SkillPer5}></div>
        </div>
      </div>

      {/* Skills 1 */}
      <div className={styles.Skill}>
        <div className={styles.Skills_Top}>
          <span>
            <img src="media/sql.png" alt="sql" className={styles.Logo_skill} />
          </span>
          <span>SQL</span>
          <span>80%</span>
        </div>
        <div className={styles.Skills_Bottam}>
          <div className={styles.SkillPer6}></div>
        </div>
      </div>
    </div>
  </div>
);

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;
