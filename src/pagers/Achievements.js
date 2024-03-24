import React from 'react'
import Navbar from './Navbar'
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import './Achievements.css';
import Lastdiv from './Lastdiv'

function Achievements() {
  return (
    <div>
        <Navbar> </Navbar>
      <br></br>
        <div id='firstachievements'>
          <h1>Achievements</h1>
        </div>
        <br></br>
        <div id='cursol'>
          <div id='cursol1'>
        <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <h1 className='achievements2'>winner</h1>
                <img
                  className="d-blockw-100"
                  src={require('./achievements/WhatsApp Image 2024-02-27 at 3.22.32 AM.jpeg')}
                  alt="First slide" 
                />
                 <br></br>
                <br></br>
                <p className='achievements1'>hello</p> 
                <p>.</p>
              </Carousel.Item>
              <Carousel.Item>
              <h1 className='achievements2'>winner</h1>
                <img
                  className="d-blockw-100"
                  src={require('./achievements/mix.jpeg')}
                  alt="Second slide"
                />
                  <br></br>
                <br></br>
                 <p className='achievements1'>hello</p> 
                <p>.</p>
              </Carousel.Item>
              <Carousel.Item>
              <h1 className='achievements2'>winner</h1>
                <img
                  className="d-blockw-100"
                  src={require('./achievements/naveen.jpeg')}
                  alt="Third slide"
                />
                 <br></br>
                <br></br>
                 <p className='achievements1'>hello</p> 
                <p>.</p>
              </Carousel.Item>
              <Carousel.Item>
              <h1 className='achievements2'>winner</h1>
                <img
                  className="d-blockw-100"
                  src={require('./achievements/doubles.jpeg')}
                  alt="First slide"
                />
                <br></br>
                <br></br>
                 <p className='achievements1'>hello Like a scene in a movie or a verse in a song, paragraphs are the building blocks of any good piece of writing. Paragraphs lend a natural rhythm to your writing that makes it a joy to read. The question is, how do you handle them successfully? </p> 
                <p>.</p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      </div>
        </div>
        <br></br>
        <br></br>
        <div>
        <Lastdiv></Lastdiv>
        </div>  
    </div>
  )
}

export default Achievements