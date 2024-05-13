import React from 'react'
import './Card.css'
import { Link,useNavigation} from 'react-router-dom'
import icon from '../images/abo.jpg'
import product1 from '../images/product.1.jpg'
import product2 from '../images/product 2.jpg'
import product3 from '../images/product 3.jpg'
import product4 from '../images/product4.jpg'
import Typography from '@mui/material/Typography';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import { Button } from '@mui/material'



function Card() {
  
  // const navigate = useNavigation();
  //  const handleClick = (e) => {
  //    navigate("/Application");
  // };
  return (
    <>
<div className='cls-container'>
<img src={icon} width="50px" style={{borderRadius:"50px"}}/>
<h1>Best Sellers</h1>
<div className='Container'>
<div className='sec-container'>
<img src={product1}/>
<p>OKAZU lovers Set(230ml/12 jars)</p>
<p className='price'>$135.00<del>$ 167.00</del></p>
<hr></hr>
<div className='star'>
  {/* <Button onClick={handleClick}></Button> */}
 <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> 
<hr></hr>
<div className='review'>32 reviews</div>
</div>
</div>

<div className='sec-container'>
<img src={product2} width="230px"/>
<p>CHILIMISO-Japanese miso oil condiment(230ml)</p>
<p >$13.99</p>
<hr></hr>
<div className='star'>
<GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon />
<hr></hr>
<div className='review'>18 reviews</div>
</div>
</div>

<div className='sec-container'>
<img src={product3}/>
<p>Instant Miso Soup Tasting Set</p>
<p className='price'>$19.99<del>$24.00</del></p>
<hr></hr>
<div className='star'>
<GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon />
<hr></hr>
<div className='review'>12 reviews</div>
</div>
</div>

<div className='sec-container'>
<img src={product4}/>
<p>ABO Matches Uji matcha Organic,Ceremonial grade</p>
<p>$34.00</p>
<hr></hr>
<div className='star'>
<GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon />
<hr></hr>
<div className='review'>24 reviews</div>
</div>
</div>

</div>
</div>
    
    </>
  )
}

export default Card

export const Usercard=()=>{
    return <Card name="mark"/>
}