import React, { createContext, useState } from "react";

const CentralContext = createContext({
  video: null,
  setVideo: null,
});

export const CentralProvider = ({ children }) => {
  const [video, setVideo] = useState(null);

  return (
    <CentralContext.Provider value={{ video, setVideo }}>
      {children}
    </CentralContext.Provider>
  );
};


export default CentralContext;
