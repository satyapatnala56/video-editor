import React, {useRef} from 'react'
import styles from './Video.module.css'

const Video = (props) => {

  const videoRef = useRef(null)

  const handleMetaData = e => {
    console.log(videoRef.current.duration);
  }
  
  return (
    <div className={styles.video}>
        <video className={styles.vid} controls ref={videoRef} onLoadedMetadata={handleMetaData}>
            <source src={URL.createObjectURL(props.video)} type="video/mp4" />
        </video>
    </div>
  )
}

export default Video