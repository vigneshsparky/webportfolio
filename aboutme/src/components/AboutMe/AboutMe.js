import React from "react";
import PropTypes from "prop-types";
import styles from "./AboutMe.module.css";

const AboutMe = () => (
  <div className={styles.AboutMe}>
    <h1>ABOUT</h1>
    <p className={styles.Para}>
      Ambitious Front-End Developer with 2+ years of experience and a passion
      for learning and growing. Expertise in Angular, React and JavaScript, with
      a strong focus on performance optimization. Eager to contribute to the
      success of a progressive tech firm.
    </p>
  </div>
);

AboutMe.propTypes = {};

AboutMe.defaultProps = {};

export default AboutMe;
