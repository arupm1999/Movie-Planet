import React from 'react'
import ReactPlayer from 'react-player'
import './Horror.css'

export default function Hmovie() {
  return (
    <div className='videoplay'>
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
