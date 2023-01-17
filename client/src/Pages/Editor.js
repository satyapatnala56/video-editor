import React, { useContext, useState } from "react";
import Uploader from "../Components/Uploader";
import Crop from "../Components/Tools/Crop";
import Cut from "../Components/Tools/Cut";
import Brighten from "../Components/Tools/Brighten";
import SideNav from "../Components/SideNav";
import styles from "./Editor.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Options from "../Components/Utils/Options";
import CentralContext from "../Context/central";

const Editor = () => {
  
  const {video} = useContext(CentralContext);
  
  const [display, setDisplay] = useState(null);


  const switchHandler = (display) => {
    switch (display) {
      case "crop":
        return <Crop  />;
      case "cut":
        return <Cut  />;
      case "brighten":
        return <Brighten  />;
      default:
        return <Uploader />;
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
