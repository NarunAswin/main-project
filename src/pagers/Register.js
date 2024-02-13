import React from 'react'
import { Link } from 'react-router-dom'
import image6 from './logo2.jpg'


function Register() {
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
    </div>
  )
}

export default Register