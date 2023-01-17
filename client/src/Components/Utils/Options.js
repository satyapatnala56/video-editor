import React from "react";
import styles from "./Options.module.css";

const Options = (props) => {
  return <div className={styles.card}> {props.children} </div>;
};

export default Options;
