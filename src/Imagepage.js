import React from 'react'
import Navbar from './pagers/Navbar';
import './Imagepage.css';
import { Container, FigureCaption, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pic1 from './pagers/WhatsApp Image 2024-02-13 at 10.25.33 PM (1).jpeg';
import pic2 from './pagers/pexels-shvets-production-8007176.jpg';
import Lastdiv from './pagers/Lastdiv'

function Imagepage() {
  return (
    <div>
        <Navbar></Navbar>
        <br></br>
        <div id='imagefirstdiv'>
        <h1>IMAGES</h1>
        </div>
        <br></br>
        <div id='seconddiv'>
          <div className='firstimagediv'>
          <Image  className='image1' src={pic1} thumbnail />
          <h2 className='game'>hello</h2>
          </div>
          <div className='firstimagediv'>
          <Image  className='image1' src={pic2} thumbnail />
          <h2 className='game'>hello</h2>
          </div>       
        </div>
        <div id='thirddiv'>
        <div className='firstimagediv'>
          <Image  className='image1' src={pic1} thumbnail />
          <h2 className='game'>hello</h2>
          </div>
          <div className='firstimagediv'>
          <Image  className='image1' src={pic2} thumbnail />
          <h2 className='game'>hello</h2>
          </div>  
        </div>
        <div id='fourthdiv'>
        <div className='firstimagediv'>
          <Image  className='image1' src={pic1} thumbnail />
          <h2 className='game'>hello</h2>
          </div>
          <div className='firstimagediv'>
          <Image  className='image1' src={pic2} thumbnail />
          <h2 className='game'>hello</h2>
          </div>  
        </div>
        <div id='singleimage'>
        <div className='firstimagediv'>
          <Image  className='image1' src={pic2} thumbnail />
          <h2 className='game'>hello</h2>
          </div>
        </div>
        <Lastdiv></Lastdiv>
    </div>
  )
}

export default Imagepage