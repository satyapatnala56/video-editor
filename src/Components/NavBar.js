import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <ul>
      <li className={styles.list}>
        <Link to='/editor'>Editor</Link>
      </li>
    </ul>
  );
};

export default NavBar;
