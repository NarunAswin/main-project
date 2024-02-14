import React from 'react'
import { Link } from 'react-router-dom';
import image1 from './WhatsApp Image 2024-02-13 at 10.25.33 PM (1).jpeg';
import './Contactus.css';


function Contactus() {
  return (
    <div>
        <div id="navbar">
          <img src={image1} id="logo" />
          <ul>
          <li><Link className='navbarcolor' to={"about"}>HOME</Link></li>
          <li> <Link  className='navbarcolor' to={"Register"}>REGISTER</Link></li>
          <li> <Link className='navbarcolor' to={"about"}>ACHIEVEMENTS</Link></li>
          <li><Link className='navbarcolor' to={"Signin"}>SIGNUP</Link></li>
          <li><Link className='navbarcolor' to={"Contactus"}>CONTACT US</Link></li>
          <li><Link className='navbarcolor' to={"Signin"}>IMAGES</Link></li>
        </ul>
        </div>
        <div id="firstdiv">
            <h1>CONTACT US</h1>
        </div>
        <div id="seconddivforcontactus">
          <div id='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2497266576975!2d80.1301411!3d13.0197629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261b19e8e870b%3A0x465da6efce2f6a3!2sFeathers%20badminton%20court!5e0!3m2!1sen!2sin!4v1707922971937!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div id="twocontactus">
            <h1>CONTACT US</h1>
            <p>Visit the only International Badminton Training Academy and the largest chain of indoor sports centers within your reach in Chennai. We give you the best and bring out the best from you. Use the form below for all communications.</p>
            <div id='input1'> <input placeholder='NAME'type='text'/></div>
            <div id='input2'> <input placeholder='MOBILE NO'type='tel' className='one'/></div>
            <div id='input3'><input placeholder='EMAIL'type='email' className='one'/></div>
            <div id='input4'><input placeholder='MESSAGE'/></div>
            <div><button>SEND US A MESSAGE</button></div>
          </div>
        </div>
        <div id='lastdiv'>
          
        </div>
    </div>
  )
}

export default Contactus