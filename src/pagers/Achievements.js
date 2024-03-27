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
                    <h1 className='achievements2'>Mixed doubles winners</h1>
                    <img
                      className="d-blockw-100"
                      src={require('./achievements/New folder/image1ache.jpg')}
                      alt="First slide"
                    />
                    <br></br>
                    <br></br>
                    <p className='achievements1'>
                      "Our Feathers Badminton Club players showcased their exceptional skills and teamwork, clinching the coveted first place in our tournament held on 13/06/2020. Competing in the fiercely contested mixed doubles category, they demonstrated outstanding coordination and strategic prowess, outplaying their opponents with finesse. Their victory not only reflects their dedication and hard work but also highlights the strength and unity of our club."</p>
                    <p>.</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <h1 className='achievements2'>Under-12 Tournament Winner </h1>
                    <img
                      className="d-blockw-100"
                      src={require('./achievements/New folder/image2ache.jpg')}
                      alt="Second slide"
                    />
                    <br></br>
                    <br></br>
                    <p className='achievements1'>
                      "In our academy, a girl in the under 12 category secured the 2nd place in the badminton tournament held on 14/06/2023 at Feathers Badminton Academy, conducted by YMCA College of Physical Education."</p>
                    <p>.</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <h1 className='achievements2'>IT Employees Tournament</h1>
                    <img
                      className="d-blockw-100"
                      src={require('./achievements/New folder/image3.jpg')}
                      alt="Third slide"
                    />
                    <br></br>
                    <br></br>
                    <p className='achievements1'> "Proudly hosting the IT Employees Badminton Tournament at our Feathers Badminton Court, our academy students triumphed, securing the first prize on 11/01/2023. Their victory underscores their dedication and the quality training they receive, reaffirming our commitment to fostering talent within our community."</p>
                    <p>.</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <h1 className='achievements2'>Open Tournament Winner</h1>
                    <img
                      className="d-blockw-100"
                      src={require('./achievements/New folder/doubles.jpeg')}
                      alt="First slide"
                    />
                    <br></br>
                    <br></br>
                    <p className='achievements1'>
                      "Our academy student demonstrated remarkable skill and determination, securing the coveted first place in the badminton open tournament conducted on 23/09/2023 at Feathers Badminton Court. Competing in the demanding singles category, he showcased exceptional agility, strategy, and resilience, outplaying his opponents with finesse. His victory not only earned him a well-deserved cash prize but also highlighted his dedication to the sport and the rigorous training provided by our academy." </p>
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