import React from "react";
import styles from "./Home.module.css";
import NavBar from "./Navbar/Navbar";
import Trim from './Utils/Trim'

const Home = () => {
  return (
    <div className={styles.home}>
      <NavBar />
    </div>
  );
};

export default Home;
