import React from "react";
//import PropTypes from 'prop-types';
import styles from "./Academics.module.css";

const Academics = () => (
  <div className={styles.Academics}>
    <div>
      <h1 className={styles.Education}>EDUCATION</h1>
    </div>
    <div className={styles.Education_Content}>
      <h3>BACHELOR OF SCIENCE</h3>
      <h3 className={styles.Italic}>COMPUTER SCIENCE</h3>
      <h3 className={styles.Year}>2020-2023</h3>
      <h3 className={styles.College}>
        Govt Arts & Science College - Navallurkuttpattu, Trichy
      </h3>
      <h3>81.57%</h3>
    </div>
  </div>
);

Academics.propTypes = {};

Academics.defaultProps = {};

export default Academics;
