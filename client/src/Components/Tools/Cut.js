import React, { useState, useContext } from "react";
import useFFMPEG from "../../Hooks/useFFMPEG";
import Options from "../Utils/Options";
import styles from "./Common.module.css";
import Video from "../Utils/Video";
import Trim from "../Utils/Trim";
import CentralContext from "../../Context/central";

const Cut = (props) => {

  // const result = useFFMPEG(
  //   "-ss 00:00:03 -t 00:00:09 -c:v copy -c:a copy",
  //   props.video
  // );

  const {video, setVideo, duration} = useContext(CentralContext);

  const [currentVid, setCurrentVid] = useState(video);


  return (
    <div>
      <div className={styles.container}>
        <Video video={currentVid} />
        <Trim length={duration} />
      </div>
    </div>
  );
};

export default Cut;
