import React from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import HomeRight from "../HomeRight/HomeRight";

const Home = () => (
  <div className={styles.Home} id="home">
    <SideNav />
    <HomeRight />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
