import React from 'react'
import './content.css'
import MaskIcon from '../images/Mask Group 6.png'
import  GroupIcon from '../images/Mask Group 7@2x.png'
import check from '../images/check-circle-outline.svg'
function content() {
  return (
   <>
<div className='div_content'>
   <div className='div_images'>
    <img src={MaskIcon} width="540px" height="460px"/>
    </div>
    <div className='div_images'>
   <img src={GroupIcon}  width="535px"  height="460px"/>
   </div>
   <div className='content-desc'>
    <h3><span className='heading'>Nourish</span><br></br><br></br>Yourself with</h3>
    <h1>MISO<br></br>Goodness</h1>
    <button>shopnow</button>
    <p><span>Free shiping</span> within the<br></br> 
    US for orders of $54 or more</p>
   </div>
</div>
<div className='headbar'>
      <ul>
         <li>vegan</li>
         <li>Keto-friendly</li>
         <li>Non-GMO</li>
         <li>Organic miso</li>
         <li>Gluten Free</li>
      </ul>
   </div>
   </>
  )
}

export default content