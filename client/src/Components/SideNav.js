import React from "react";
import styles from "./SideNav.module.css";
const SideNav = (props) => {
  return (
    <div className={styles.side}>
      <ul className={styles.list}>
        <div className={styles.active} onClick={() => props.set("crop")}>
          <li>Crop Video</li>
        </div>
        <div onClick={() => props.set("cut")}>
          <li>Cut Video</li>
        </div>
        <div onClick={() => props.set("brighten")}>
          <li>Brighten Video</li>
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
