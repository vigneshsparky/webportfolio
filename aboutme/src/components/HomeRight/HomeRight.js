import React from "react";
// import { useState } from "react";
import { useEffect } from "react";
//import PropTypes from "prop-types";
import styles from "./HomeRight.module.css";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Academics from "../Academics/Academics";

const HomeRight = () => {
  const [role, setRole] = React.useState("Full Stack");

  // Function to toggle the role
  const arr = [
    "Web",
    "Software",
    "React",
    "Front End",
    "Back End",
    "Full Stack",
  ];

  // Function to toggle the role
  const toggleRole = () => {
    const nextIndex = (arr.indexOf(role) + 1) % arr.length;
    setRole(arr[nextIndex]);
  };

  // Set an interval to call toggleRole every 1000 milliseconds (1 second)
  useEffect(() => {
    const intervalId = setInterval(toggleRole, 1000);
    return intervalId;
    // Clean up the interval when the component unmounts
  }, []);

  return (
    <div className={styles.HomeRight}>
      <div className={styles.Home}>
        <div className={styles.Home_content}>
          <h1>Vigneshwaran A</h1>
          <p>
            <span id={styles.stacks}>{role}</span> Developer
          </p>
        </div>
        <div>
          <img src="media/vg.png" alt="" className={styles.Home_img} />
        </div>
      </div>
      <div>
        <AboutMe />
        <Skills />
        <Academics />
      </div>
    </div>
  );
};

HomeRight.propTypes = {};

HomeRight.defaultProps = {};

export default HomeRight;
