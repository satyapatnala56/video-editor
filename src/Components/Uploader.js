import React, { useRef } from "react";

const Uploader = (props) => {
  
  const ref = useRef(null);


  const setVideoHandler = (e) => {
    e.preventDefault();
    props.setVideo(ref.current.files[0]);
  };

  return (
    <form onSubmit={setVideoHandler}>
      <input type="file" ref={ref} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Uploader;
