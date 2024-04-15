import React from 'react'
import Navbar from './pagers/Navbar';
import './Gallery.css';
import Image from 'react-bootstrap/Image';
import pic1 from './pagers/imagepage/image1 (2).jpg';
import pic2 from './pagers/imagepage/image2 (2).jpg';
import pic3 from './pagers/imagepage/image3.jpg';
import pic4 from './pagers/imagepage/image4.jpg';
import pic5 from './pagers/imagepage/image5 (2).jpg';
import pic6 from './pagers/imagepage/image6.jpg';
import pic7 from './pagers/imagepage/image7.jpg';
import Lastdiv from './pagers/Lastdiv';

function Imagepage() {
  return (
    <div>
        <Navbar></Navbar>
        <br></br>
        <div id='imagefirstdiv'>
        <h1>GALLERY</h1>
        </div>
        <br></br>
        <div id='seconddiv'>
          <div className='firstimagediv'>
          <Image  className='image1' src={pic1} thumbnail />
          <h2 className='game'>Feathers Entrance</h2>
          </div>
          <div className='firstimagediv'>
          <Image  className='image1' src={pic2} thumbnail />
          <h2 className='game'>Badminton Court 1</h2>
          </div>       
        </div>
        <div id='thirddiv'>
        <div className='firstimagediv'>
          <Image  className='image1' src={pic3} thumbnail />
          <h2 className='game'>Badminton Court 2</h2>
          </div>
          <div className='firstimagediv'>
          <Image  className='image1' src={pic4} thumbnail />
          <h2 className='game'>Drilling Area</h2>
          </div>  
        </div>
        <div id='fourthdiv'>
        <div className='firstimagediv'>
          <Image  className='image1' src={pic5} thumbnail />
          <h2 className='game'>Tournaments</h2>
          </div>
          <div className='firstimagediv'>
          <Image  className='image1' src={pic6} thumbnail />
          <h2 className='game'>Training Class For Children</h2>
          </div>  
        </div>
        <div id='singleimage'>
        <div className='firstimagediv'>
          <Image  className='image1' src={pic7} thumbnail />
          <h2 className='game'> Ventilation System</h2>
          </div>
        </div>
        <Lastdiv></Lastdiv>
    </div>
  )
}

export default Imagepage