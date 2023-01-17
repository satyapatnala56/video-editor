import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "./Trim.module.css";
import Chip from "@mui/material/Chip";
import CentralContext from "../../Context/central";



const minDistance = 0;

export default function MinimumDistanceSlider() {
  const { timeConverter, duration } = useContext(CentralContext);

  const [value1, setValue1] = useState([0, 100]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div className={styles.container}>
      <Box sx={{ width: "95%" }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="off"
          disableSwap
        />
      </Box>
      <div className={styles.left}>
        <Chip
          label={timeConverter((duration * value1[0]) / 100)}
          color="primary"
        />
      </div>
      <div className={styles.right}>
        <Chip
          label={timeConverter((duration * value1[1]) / 100)}
          color="primary"
        />
      </div>
    </div>
  );
}
