import * as React from 'react';
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
import FilterListIcon from '@mui/icons-material/FilterList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions, List } from '@mui/material';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import Links from './components/Links';
import ListIcon from '@mui/icons-material/List';

function Application() {
  
  return (
    <div>         
    <Box sx={{ flexGrow: 1 }}>
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
      <div className='images'>
        <div><img  className='Image-style' src='https://www.abokichi.com/cdn/shop/articles/IMG_20240125_103624_1.jpg' alt=''/></div>
        <div><img  className='Image-style' src='https://cdn.shopify.com/s/files/1/0276/6805/4089/products/okazu-miso_400x.jpg' alt='' /></div>
        <div><img  className='Image-style' src='https://i.pinimg.com/736x/78/9f/3b/789f3bb2206336040b1f4fa957feb102.jpg' alt='' /> </div>
        <div><img  className='Image-style' src='https://cdn11.bigcommerce.com/s-2xe79qkdap/images/stencil/original/image-manager/screen-shot-2022-08-24-at-12.45.09-pm-480x480.jpeg' alt='' /></div>
        <div className='image-overlay'>Product</div>
      </div>
      <div >
        <h1 className='Product-Name'>Products (18)</h1>
        <div className='Filter'>
        <div className='Filter-Name'><FilterListIcon /><span>Filter</span> </div>
        <div style={{marginLeft:"25px",marginTop:"10px"}}><ListIcon/></div>
        </div>
        <hr></hr>
      </div>


<div className='Card'>
  <div>
<Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://i0.wp.com/oishii-desu.com/wp-content/uploads/2020/12/abokichi-okazu-chili-spicy-curry-miso.jpg'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Okazu Lover Set (230ml/12jars)
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $135.00
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>32 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div style={{ paddingLeft:100}}>
    <Card sx={{ maxWidth: 450}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://cdn11.bigcommerce.com/s-2xe79qkdap/images/stencil/1280x1280/products/3279/1459/OKAZU_CONDIMENT__93658.1644867897.jpg?c=fit'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Okazu- Chili Miso-Japanese Miso
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $13.90
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>24 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div style={{ paddingLeft:100}}>
    <Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://izumibrewery.com/cdn/shop/products/3flavours_1_8e507c5d-8a28-4541-b0e1-4466114b69d1_1200x1200.png?v=1587397254'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Instant Miso Soup Tasting Soup
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $19.99
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>24 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div style={{ paddingLeft:100}}>
    <Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://m5corporation.com/cdn/shop/products/OK1022_Abokichi_Curry-Front-jpg_1024x1024.jpg?v=1601422111'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          ABO Matcho: Uji matcho, Organic
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $34.00
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>24 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

</div>

<div className='Card'>
  <div>
<Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://i0.wp.com/oishii-desu.com/wp-content/uploads/2020/12/abokichi-okazu-chili-spicy-curry-miso.jpg'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Okazu Lover Set (230ml/12jars)
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $135.00
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>32 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div style={{ paddingLeft:100}}>
    <Card sx={{ maxWidth: 450}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://cdn11.bigcommerce.com/s-2xe79qkdap/images/stencil/1280x1280/products/3279/1459/OKAZU_CONDIMENT__93658.1644867897.jpg?c=fit'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Okazu- Chili Miso-Japanese Miso
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $13.90
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>24 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div style={{ paddingLeft:100}}>
    <Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://izumibrewery.com/cdn/shop/products/3flavours_1_8e507c5d-8a28-4541-b0e1-4466114b69d1_1200x1200.png?v=1587397254'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Instant Miso Soup Tasting Soup
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $19.99
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>24 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div style={{ paddingLeft:100}}>
    <Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://m5corporation.com/cdn/shop/products/OK1022_Abokichi_Curry-Front-jpg_1024x1024.jpg?v=1601422111'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          ABO Matcho: Uji matcho, Organic
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $34.00
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>24 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

</div>


<div className='Card'>
  <div>
<Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://i0.wp.com/oishii-desu.com/wp-content/uploads/2020/12/abokichi-okazu-chili-spicy-curry-miso.jpg'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Okazu Lover Set (230ml/12jars)
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $135.00
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>32 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div style={{ paddingLeft:100}}>
    <Card sx={{ maxWidth: 450}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://cdn11.bigcommerce.com/s-2xe79qkdap/images/stencil/1280x1280/products/3279/1459/OKAZU_CONDIMENT__93658.1644867897.jpg?c=fit'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Okazu- Chili Miso-Japanese Miso
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $13.90
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>24 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div style={{ paddingLeft:100}}>
    <Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://izumibrewery.com/cdn/shop/products/3flavours_1_8e507c5d-8a28-4541-b0e1-4466114b69d1_1200x1200.png?v=1587397254'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Instant Miso Soup Tasting Soup
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $19.99
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>24 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div style={{ paddingLeft:100}}>
    <Card sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image='https://m5corporation.com/cdn/shop/products/OK1022_Abokichi_Curry-Front-jpg_1024x1024.jpg?v=1601422111'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          ABO Matcho: Uji matcho, Organic
          </Typography>
          
          <CardActions>
          <Typography gutterBottom variant="p" component="div" style={{ textAlign: 'center' }}>
           $34.00
          </Typography>
      </CardActions>
      <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <GradeRoundedIcon /> <span>24 Reviews</span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

</div>

{/* <div style={{background: '#F9FFFA'}}>
<div className='AboutUs'>
  <List>
    <li  className='Padding'>About</li>
    <li className='Padding'>Contact Us</li>
    <li  className='Padding'>Customer Service</li>
    <li className='Padding'>FAQs</li>
    <li className='Padding'>Sitemap</li>
  </List>
   <List style={{marginLeft:150}}>
    <li  className='Padding'>Terms of Services</li>
    <li  className='Padding'>Refund Policy</li>
    <li  className='Padding'>Press</li>
   </List>
</div>
</div> */}
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

    </div>
  );
}

export default Application;
