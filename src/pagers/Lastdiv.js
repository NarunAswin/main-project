import React from 'react'
import './Lastdiv.css';
import image2 from './main1/WhatsApp Image 2024-02-13 at 10.25.33 PM (1)-removebg-preview.jpg'
import { FaPhone } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import divimage from './services-icons-badminton.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Lastdiv() {
  return (
    <div id='lastdiv'>
      <br></br>
      <div id='logodiv'>
        <img src={image2} />
        <div id='para'>
          <p> Feathers Badminton Academy in Chennai welcomes players of all levels to experience the thrill of the game in a supportive environment. Our state-of-the-art facility is equipped with top-notch amenities, ensuring an optimal training experience for every participant. Under the guidance of our experienced coaches, beginners can learn the fundamentals while advanced players can refine their techniques.</p>
          <p> Join our vibrant community and forge lifelong friendships as you pursue your passion for badminton. At Feathers, we believe in nurturing talent and helping each player reach their full potential on and off the court. Come be a part of our dynamic academy and elevate your game to new heights!</p>
        </div>

      </div>
      <div id='contactus'>
        <h1>CONTACT US</h1>
        <div id='icons'>
          <div id='phone'>
            <FaPhone />
            <p>+91 9677289131</p>
          </div>
          <div id='mail'>
            <CgMail />
            <p>featherscourt101@gmail.com</p>
          </div>
          <div id='landmark'>
            <FaLocationDot />
            <p>Mangadu Rd, Rajappa Nagar, Paraniputhur, Chennai, Tamil Nadu 600128</p>
          </div>
        </div>
        
        <div id='socialmedia'>
          <h1>FOLLOW US </h1>
          <div id='soicalmediaicons'>
          <FaFacebookSquare size="3em" color='blue' className='socialmedia' />
          <FaInstagram size="3em" color='red' className='socialmedia' />
          <FaSquareXTwitter size="3em" className='socialmedia' />
          <FaYoutube size="3em" color='red' className='socialmedia' />
          </div>
          </div>
        
      </div>
      <div id='divlogo'>
        <img src={divimage} />
      </div>



    </div>
  )
}

export default Lastdiv
