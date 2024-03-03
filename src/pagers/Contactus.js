import React from 'react'
import { Link } from 'react-router-dom';
import image1 from './WhatsApp Image 2024-02-13 at 10.25.33 PM (1).jpeg';
import './Contactus.css';
import Navbar from './Navbar';


function Contactus() {
  return (
    <div>
        <Navbar></Navbar>
        <br></br>
        <div id="firstdiv">
            <h1>CONTACT US</h1>
        </div>
        <br></br>
        <div id="seconddivforcontactus">
          <div id='contactus1'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.999163913528!2d80.1302412!3d13.0197588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261b19e8e870b%3A0x465da6efce2f6a3!2sFeathers%20badminton%20court!5e0!3m2!1sen!2sin!4v1709461108934!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br></br>
          <div id='aftermap'>

          </div>
          </div>
        </div>
    </div>
  )
}

export default Contactus