import React from 'react'
import './Signin.css';
import image1 from './main1/icons8-facebook-48.png'
import image2 from './main1/icons8-google-48.png'
import image3 from './main1/icons8-twitterx-50.png'
import { Link } from 'react-router-dom';
import image6 from './WhatsApp Image 2024-02-13 at 10.25.33 PM (1).jpeg'
import Navbar from './Navbar';
import Lastdiv from './Lastdiv';


function Signin() {
  return (
    <div>
      <Navbar></Navbar>
        <div id="backgroundcolor">
          <div id="login">
            <h1>SIGN UP</h1>
            <p>Welcome to Our SPORTS WEBSITE By B sc</p>
            <div className='password'>
              <h2>EMAIL</h2>
              <input placeholder='Enter Email' type="email"/>
            </div>
            <div className='password'>
              <h2>PASSWORD</h2>
              <input placeholder='enter password' type="password"/>
            </div>
          </div>
        </div>
        <div>
          <Lastdiv></Lastdiv>
        </div>
    </div>
  )
}

export default Signin