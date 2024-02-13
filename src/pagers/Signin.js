import React from 'react'
import './Signin.css';
import image1 from './main1/icons8-facebook-48.png'
import image2 from './main1/icons8-google-48.png'
import image3 from './main1/icons8-twitterx-50.png'
import { Link } from 'react-router-dom';
import image6 from './logo2.jpg'

function Signin() {
  return (
    <div>
      <div id="navbar">
          <img src={image6} id="logo" />
          <ul>
          <li><Link className='navbarcolor' to={"about"}>HOME</Link></li>
          <li> <Link  className='navbarcolor' to={"register"}>REGISTER</Link></li>
          <li> <Link className='navbarcolor' to={"about"}>ACHIEVEMENTS</Link></li>
          <li><Link className='navbarcolor' to={"Signin"}>SIGNUP</Link></li>
          <li><Link className='navbarcolor' to={"Signin"}>CONTACT US</Link></li>
          <li><Link className='navbarcolor' to={"Signin"}>IMAGES</Link></li>
        </ul>
        </div>
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
            <div id="button">
              <button>Register</button>
            </div>
            <div id='line'>
              <p>OR</p>
            </div>
            <div id='line2'>
            </div>
            <div id='socialmedialogo'>
            <ul>
              <li><img src={image1} className='logo1'/></li>
              <li><img src={image2} className='logo1'/></li>
              <li><img src={image3} className='logo1'/></li>
              </ul>
            </div>
            <div id='page'>
              <p>This an example for Signup page for college project </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signin