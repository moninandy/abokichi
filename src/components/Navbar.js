import React from 'react'
import './Navbar.css'
import logo from '../images/download.png'
import search from '../images/2561381_search_icon.svg'
import heart from '../images/Layer_2.svg'
import bag from '../images/172551_bag_shopping_icon.svg'

function Navbar() {
  return (
    <>
    
      <div className='nav-top'>
        <div className="first-sec">
            <select className='select-div' >
                <option value="USD">USD</option>
                </select>
            <h4>Stores</h4>
        </div>
        <div className='login'>Login/Register</div>
        
        </div>

      <nav>
        <div className='nav-sec'>
        <div >
        <img  className='Logo'src={logo}/>
        </div>
        <div className='list'>
           <ul className='list2'>
            <li>Shop</li>
            <li>OurStory</li>
            <li>Recipes</li>
            <li>Contact</li>
           </ul>
        </div>
        <div className='images'>
            <img src={search}/>
            <img src={heart}/>
            <img src={bag}/>
        </div>
        
        </div>
      </nav>



    </>
  )
}

export default Navbar