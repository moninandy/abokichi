
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlaceIcon from '@mui/icons-material/Place';
import Button from '@mui/material/Button';
import App from './App';
import './App.css';
import product1Img from '../src/images/product.1.jpg'
import { Facebook, GradeRounded, Pinterest, Twitter } from '@mui/icons-material';
import "./Productdes.css";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import  Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import Links from './components/Links';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ProductDescrption() {
  return (
    <>
    <Box className="Box" sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{ background: '#000000' }}>
        <Toolbar>
          <IconButton>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          USD
          <KeyboardArrowDownIcon />
          <PlaceIcon />          
            Stores          
          </Typography>
          <Button color="inherit">Login / Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <App />
    <div className='Product-details'>
        <div className='product-images'><img src={product1Img} width="240px" /></div>
        <div className='details'>
            <h1>OKAZU Lovers Set(230ml/12 jars)</h1>
            <p>$135.00 <del>$167.888</del></p>
            <div className='details-review'>
                <div><GradeRounded/><GradeRounded/><GradeRounded/><GradeRounded/><GradeRounded/></div>
                <hr></hr>
                <div className="details-review-number">32 reviews</div>
            </div>
            <p>Your new cooking BFF! you can add virtually everything.Try it on<br></br>rice, on meat or tofu, in your burge,ramen,and pretty much anything.
            </p>
            <div className='btns'>
                <Button variant="text" sx={{border:"1px solid black",color:"#000",padding:"3px 15px"}}>Add To Cart</Button>
                <Button variant="contained" sx={{backgroundColor:"black",padding:"3px 30px"}}>By Now</Button>
            </div>
            <div className='wishlist'><FavoriteBorder sx={{marginTop:5,fontSize:17,marginRight:1}}/>WISHLIST</div>
            <div className='share-icons'>
                <div>Share:</div>
                <Facebook sx={{fontSize:16}}/>
                <Twitter sx={{fontSize:16}}/>
                <Pinterest sx={{fontSize:16}}/>
            </div>
        </div>
        </div>

<div className='imagesFilter'>
  <KeyboardArrowLeft sx={{marginTop:3}}/>
 <div><img src={product1Img} width="50px" className='imgfilter'/></div>
 <div><img src={product1Img} width="50px" className='imgfilter'/></div>
 <div><img src={product1Img} width="50px" className='imgfilter'/></div>
 <div><img src={product1Img} width="50px" className='imgfilter'/></div>
 <KeyboardArrowRight sx={{marginTop:3}}/>
</div>
<div className='text'>
  <div className='Description'>
    <div className='desc'>DESCRIPTION</div>
    <div>REVIEWS</div>
    <div>VIDEOS</div>
    <div>COMMENTS</div>
  </div>

  <div className='para-text'>
    <p>OKAZU is an umami-rich chili oil condiment, made with miso paste. 
Often eaten with rice in Japan, which can also be used to top tofu, burgers, fish, eggs, potatoes, and pretty much anything else. Use it as a marinade or as an ingredient in your own homemade salad dressing.
OKAZU gained an initial following at Toronto farmers' markets in 2013 and is now available in shops across North America, and around the world through our website. Our version of a chili crisp delights 
nearly everyone who tries it and has been featured in The New York Times, USA Today, The Toronto Star, Toronto Life, the CBC’s Dragon’s Den, and is a gold winner of the prestigious Sofi Award.</p>

<p>HEATLEVEL: MID-MEDIUM<br></br><br></br>

INGREDIENTS:  SUNFLOWER OIL SESAME OIL, GARLIC,MICSO PASTE(ORGANIC SOYABEANS,RICE,SALT)TAMARI SOYA SAUCE(Non-GMO SOYABEANS,SALT SUGAR),SUGAR,CHILI POWDER,WHITE SESAME SEEDS<br></br>
CHILLI& SPICY OKAZU CONTAINS:SESAME,SOYABEANS,MAY CONTAINN:MUSTARD.

<br></br><br></br>
CURRY OKAZU CONTAINS:SOYABEANS,MUSTARD.
<br></br><br></br>
INGREDIENTS:
PRODUCT SEPARATION IS NORMAL.REFRIGERATE AFTER OPENING

</p>

  </div>
  </div>
  
<Links/>
<div className='low-bar'>
  <>
  <span style={{marginLeft:20}}><FacebookRoundedIcon /></span>
  <span style={{marginLeft:20}}><TwitterIcon /></span>
  <span style={{marginLeft:20}}><InstagramIcon /></span>
  <span style={{marginLeft:20}}><YouTubeIcon /></span>
  <span style={{marginLeft:20}}><PinterestIcon /></span>
  <span style={{marginLeft:20}}><LinkedInIcon /></span></>
</div> 




   

    
    </>
  )
}

export default ProductDescrption