import React, {useRef, useContext} from 'react'
import styles from './Video.module.css'
import CentralContext from '../../Context/central'

const Video = (props) => {

  const videoRef = useRef(null)

  const {setDuration} = useContext(CentralContext)

  const handleMetaData = e => {
    setDuration(videoRef.current.duration);
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