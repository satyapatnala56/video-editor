import React, { useState } from "react";
import Uploader from "./Uploader";

const Editor = () => {
  const [video, setVideo] = useState(null);


  return (
    <div>
      <Uploader setVideo={setVideo} />
      {video === null ? (
        <p>Upload A Video</p>
      ) : (
        <video height="320" width="400" controls>
          <source src={URL.createObjectURL(video)} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Editor;
