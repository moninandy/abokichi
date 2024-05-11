import React from 'react'

function Video() {
    const videoId="pCfoyFE4Zk0"
  return (
    <>
<div className='video-container'>
<iframe src={`https://www.youtube.com/embed/${videoId}`}className='youtube'/>
<div className="text-overlay"> A Cup a Day for a Probiotic Boost</div>
</div>
    </>
  )
}

export default Video