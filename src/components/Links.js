import React from 'react'
import emailLetter from '../images/send-icon-17.jpg'
import './Link.css'
import visa from '../images/visa.png'
import card from '../images/mastercard.png'
import pay from '../images/applepay.png'
import  american from '../images/abo.jpg'


function Links() {
  return (
    <>
<div className='Link-Container'>
    <div className='subscribe'>
        <img src={emailLetter} alt="icons" width="60px"/>
        <div>
        <h3>SUBSCRIBE NEWS LETTER</h3>
        <p>get the latest on scales,new release and more.</p>
        </div>
    </div>
<div className='inputemail'>
    <input type="email" placeholder='Enter your mail'/>
    <button className='btn-sub'>Subscribe</button>
</div>
</div>
 <div className='about'>
    <div className='about-link'>
    <h4>LINKS</h4>
    <ol>
        <li>About us</li>
        <li>Contact us</li>
        <li>Customer Service</li>
        <li>FAQS</li>
    </ol>
    </div>
    <div className='about-link'>
    <h4>INFORMATION</h4>
    <ol>
        <li>Terms of Service</li>
        <li>Refund Policy</li>
        <li>Press</li>
    </ol>
    </div>

</div>
<footer>
    <div className='foot-link'>
    <img src={visa} width="50px"/>
    <img src={card}  width="50px"/>
    <img src={pay}  width="50px"/>
    <img serc={american}  width="50px"/>
    
    </div>

</footer> 
    </>
    
  )
}

export default Links