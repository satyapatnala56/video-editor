import React, { useEffect, useState } from "react";
import FFMPEG from "react-ffmpeg";

const useFFMPEG = (command, video) => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    const ffmpegFunction = async () => {
      await FFMPEG.process(video, command, function (res) {
        setResult(res.result);
        console.log('Yoooooo');
      });
    };
    ffmpegFunction();
  }, []);
  return result;
};

export default useFFMPEG;
