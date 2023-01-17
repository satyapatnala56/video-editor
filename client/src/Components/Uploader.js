import React, { useRef } from "react";
import styles from "./Uploader.module.css";
import Video from "./Utils/Video";

const Uploader = (props) => {
  const ref = useRef(null);

  const setVideoHandler = () => {
    props.setVideo(ref.current.files[0]);
  };

  const clickHandler = (e) => {
    ref.current.click();
  };

  return (
    <React.Fragment>
      {props.video === null ? (
        <form className={styles.form} onClick={clickHandler}>
          <input
            type="file"
            ref={ref}
            onChange={setVideoHandler}
            style={{ display: "none" }}
          />
          Please upload a video before continuing
        </form>
      ) : (
        <Video video={props.video} />
      )}
    </React.Fragment>
  );
};

export default Uploader;
