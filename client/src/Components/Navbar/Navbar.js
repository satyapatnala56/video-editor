import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link to="/" className={`${styles.link} ${styles.logo}`}>
            Video Editor
          </Link>
        </li>
        <Link to='/edit' className={styles.link}>Edit</Link>
      </ul>
    </div>
  );
};

export default Navbar;
