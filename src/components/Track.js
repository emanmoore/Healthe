import React from 'react'
import video from '../images/video.mp4'
import './Track.css'

const  Track = () => {
  return (
    <div className='main'>
      <video src={video} autoPlay loop muted />
      
    </div>
  )
}

export default Track
