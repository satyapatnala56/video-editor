import React, { useState } from "react";
import useFFMPEG from "../../Hooks/useFFMPEG";
import Options from "../Utils/Options";
import styles from "./Common.module.css";
import Video from "../Utils/Video";
import Trim from "../Utils/Trim";

const Cut = (props) => {
  const [propsVideo, setPropsVideo] = useState(null);

  // const result = useFFMPEG(
  //   "-ss 00:00:03 -t 00:00:09 -c:v copy -c:a copy",
  //   props.video
  // );

  return (
    <div>
      <div className={styles.container}>
        <Video video={props.video} />
        <Trim />
      </div>
    </div>
  );
};

export default Cut;
