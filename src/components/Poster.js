import React from 'react'
import './Poster.css';
import img1 from'../images/edible.png'
import img2 from'../images/global.png'
import img3 from'../images/national.jpg'
import img4 from'../images/Toronto_Star-Logo.wine.png'
import img5 from'../images/candian.png'

function Poster() {
  return (
    <>
    <div className='poster'>
        <img  className="poster-img"src={img4} />
        <img  className="poster-img"src={img1}/>
        <img  className="poster-img"src={img3}/>
        <img  className="poster-img"src={img2}/>
        <img  className="poster-img"src={img5}/>

    </div>
    </>
  
  )
}

export default Poster