import React from 'react'
import ReactPlayer from 'react-player'
import './Action.css'

export default function Play() {
  return (
    <div className='Video'>
        <ReactPlayer
        controls={true}
        height='400px'
        width='1410px'
        loop={true}
        muted={false}
        playing={true}
        url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' />
    </div>
  )
}

