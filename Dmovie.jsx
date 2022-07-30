import React from 'react'
import ReactPlayer from 'react-player'
import './Drama.css'

export default function Dmovie() {
  return (
    <div className='videoPlay'>
        <ReactPlayer
        controls={true}
        height='400px'
        width='1410px'
        loop={true}
        muted={false}
        playing={true}
        url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' />
    </div>
  )
}
