import React from 'react'
import './Seccontent.css'
import foodImg from '../images/partner.png'
import noodlesImg from'../images/noodels.png'
function Seccontent() {
  return (
   <>
<div className='section'>
    <div className='sec-inner'>
    <div className='sec-images'><img src={foodImg} width="300px"/>
    <p>Our Story</p>
    </div>
    <div className='sec-images'><img src={noodlesImg} width="300px"/>
    <p>Receipes</p>
    </div>
</div>
</div>
   </>
  )
}

export default Seccontent