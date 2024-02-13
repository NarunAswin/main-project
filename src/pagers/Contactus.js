import React from 'react'
import { Link } from 'react-router-dom';
import image1 from './logo2.jpg';
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
    </div>
  )
}

export default Contactus