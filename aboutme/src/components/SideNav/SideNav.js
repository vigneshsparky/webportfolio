import React from "react";
import PropTypes from "prop-types";
import styles from "./SideNav.module.css";

const SideNav = () => {
  return (
    <nav className={styles.SideNav}>
      <ul>
        <li>Home</li>
        <li>About me</li>
        <li>Skills</li>
        <li>Education</li>
        <li>Certifications</li>
        <li>Services</li>
        <li>Contact </li>
      </ul>
    </nav>
  );
};

SideNav.propTypes = {};

SideNav.defaultProps = {};

export default SideNav;
