import React from 'react'
import ReactPlayer from 'react-player'
import './Comedy.css'

export default function Cmovie() {
  return (
    <div className='VideoPlay'>
        <ReactPlayer
        controls={true}
        height='400px'
        width='1410px'
        loop={true}
        muted={false}
        playing={true}
        url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' />
    </div>
  )
}
