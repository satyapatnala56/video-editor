import React, { useRef, useContext } from "react";
import styles from "./Uploader.module.css";
import Video from "./Utils/Video";
import CentralContext from "../Context/central";

const Uploader = (props) => {
  const ref = useRef(null);
  const context = useContext(CentralContext);

  const setVideoHandler = () => {
    context.setVideo(ref.current.files[0]);
  };

  const clickHandler = (e) => {
    ref.current.click();
  };

  return (
    <React.Fragment>
      {context.video === null ? (
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
        <Video video={context.video} />
      )}
    </React.Fragment>
  );
};

export default Uploader;
