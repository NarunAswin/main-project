import React from 'react'
import Navbar from './Navbar'
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';


function Achievements() {
  return (
    <div>
        <Navbar> </Navbar>
       
        <div id='cursol'>
        <Container>
        <Row>
          <Col ig={8}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./achievements/doubles.jpeg')}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./achievements/mix.jpeg')}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./achievements/naveen.jpeg')}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
        </div>
    </div>
  )
}

export default Achievements