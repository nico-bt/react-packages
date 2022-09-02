import React, {useState} from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer() {

    const [isPlaying, setIsPlaying] = useState(false)

    const stylePlaying = {fontSize:"2rem", marginTop:"6px", textAlign:"center", backgroundColor:"black", color:"white", padding:"20px"}

  return (
    <div className='container'>
        <h2 className='underline'>react-player</h2>
        <ReactPlayer
            controls={true} 
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
            onPlay={()=>setIsPlaying(true)}
            onPause={()=>setIsPlaying(false)}
            onEnded={()=>setIsPlaying(false)}
            style={{margin:"0 auto"}}
        />
        {isPlaying && <div style={stylePlaying}>Playing...</div>}
    </div>
  )
}

export default VideoPlayer