import React, { createContext, useState } from "react";

const CentralContext = createContext({
  video: null,
  setVideo: null,
  duration: null,
  setDuration: null,
  timeConverter: null,
});

export const CentralProvider = ({ children }) => {
  const [video, setVideo] = useState(null);
  const [duration, setDuration] = useState(null);

  const timeConverter = (duration) => {
    let minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds}`;
  };

  return (
    <CentralContext.Provider value={{ video, setVideo, duration, setDuration, timeConverter }}>
      {children}
    </CentralContext.Provider>
  );
};

export default CentralContext;
