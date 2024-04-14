import React from 'react'
import './Signin.css';
import image11 from './sindhuallenglandbadminton-1521369698.jpg'
import image91 from './cctv.png';
import image90 from './power.png'
import image98 from './lighting.png'
import image99 from './video-monitor.png'
import Navbar from './Navbar';
import Lastdiv from './Lastdiv';



function Signin() {
  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <div id='firstdivabout'>
        <h1>ABOUT</h1>
      </div>
      <br></br>
      <div id='game3'>
        <div id='paragame3'>
          <h5>ACADEMY SINCE 2010</h5>
          <br></br>
        <h1>Our Journey: From Shuttlecocks to Success</h1>
        <br></br>
        <br></br>
        <p>At Feathers Badminton Academy, we are more than just a training facility – we are a community dedicated to fostering excellence, sportsmanship, and passion for the game of badminton. Our academy stands as a beacon of commitment to both the sport and its players, providing a nurturing environment where individuals can flourish both on and off the court.</p>
        <p>What truly sets us apart is our holistic approach to player development. Beyond honing technical skills, we prioritize character building, teamwork, and mental fortitude – essential qualities for success both in badminton and in life. Through personalized attention and mentorship, we empower our athletes to dream big, strive for greatness, and overcome challenges with resilience.</p>
        </div>
        <div>
        <img src={image11}/>
        <div  id='game10'>
          <div>
          <h2>100k <h5>PLAYERS</h5></h2>
          <br></br>
        <h2>100k <h5>PLAYERS</h5></h2>
          </div>
          <div>
          <h2>100k <h5>PLAYERS</h5></h2>
          <br></br>
        <h2>100k <h5>PLAYERS</h5></h2>
          </div>
        </div>
        </div>
      </div>
      <br></br>
      <div id='bigil'><h3>OUR INDOOR SPORTS VENUES FEATURE</h3></div>
      <div id='game4'> 
      <div className='game14'>
      <img src={image90} className='logoabout'/>
      <h5 className='h5k'>AUTOMATIC POWER BACKUP</h5>
      </div>
      <div className='game14'>
      <img src={image91} className='logoabout'/>
      <h5 className='h5k'>CCTV SECURITY</h5>
      </div>
      <div className='game14'>
      <img src={image99} className='logoabout'/>
      <h5 className='h5k'>VIDEOS ANALYSIS FOR TRAINING</h5>
      </div>
      <div className='game14'>
      <img src={image98} className='logoabout'/>
      <h5 className='h5k'>EXCELLENT LIGHTING</h5>
      </div>
      </div>
      <br></br>
      <Lastdiv></Lastdiv>
    </div>
  )
}

export default Signin