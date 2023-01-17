import React, { useState } from "react";
import Uploader from "../Components/Uploader";
import Crop from "../Components/Tools/Crop";
import Cut from "../Components/Tools/Cut";
import Brighten from "../Components/Tools/Brighten";
import SideNav from "../Components/SideNav";
import styles from "./Editor.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Options from "../Components/Utils/Options";

const Editor = () => {
  const [display, setDisplay] = useState(null);
  const [video, setVideo] = useState(null);

  console.log(display);

  const switchHandler = (display) => {
    switch (display) {
      case "crop":
        return <Crop video={video} />;
      case "cut":
        return <Cut video={video} />;
      case "brighten":
        return <Brighten video={video} />;
      default:
        return <Uploader setVideo={setVideo} video={video} />;
    }
  };

  return (
    <div className={styles.editor}>
      <Navbar />
      <div className={styles.back}></div>
      <div className={styles.down}></div>
      <div className={styles.con}>
        {video !== null && <SideNav set={setDisplay} />}
        {switchHandler(display)}
      </div>
    </div>
  );
};

export default Editor;
