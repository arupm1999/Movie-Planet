import React from 'react'
import ReactPlayer from 'react-player'
import './Trailer.css'

export default function Play() {
  return (
    <div className='VideoPlayer'>
        <ReactPlayer
        controls={true}
        height='400px'
        width='1410px'
        loop={true}
        muted={false}
        playing={true}
        url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' />
    </div>
  )
}
