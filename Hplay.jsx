import React from 'react'
import ReactPlayer from 'react-player'
import './Home.css'

export default function Play() {
  return (
    <div className='Vvvideo'>
        <ReactPlayer
        controls={true}
        height='400px'
        width='1410px'
        loop={true}
        muted={false}
        playing={true}
        url='https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' />
    </div>
  )
}

