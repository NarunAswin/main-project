import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import image1 from './mainlogo/WhatsApp Image 2024-02-13 at 10.25.33 PM (1).jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import homeimage from './images/home image2.jpg';
import homeimage2 from './images/homeimage1.jpg'
import Lastdiv from './pagers/Lastdiv';

function App() {
  return (
    <div className="App">
      <div id="navbar">
        <img src={image1} id="logo" />
        <ul>
          <li><Link className='navbarcolor' to={"about"}>HOME</Link></li>
          <li> <Link className='navbarcolor' to={"Register"}>REGISTER</Link></li>
          <li> <Link className='navbarcolor' to={"Achievements"}>ACHIEVEMENTS</Link></li>
          <li><Link className='navbarcolor' to={"Signin"}>SIGNUP</Link></li>
          <li><Link className='navbarcolor' to={"Contactus"}>CONTACT US</Link></li>
          <li><Link className='navbarcolor' to={"Signin"}>IMAGES</Link></li>
        </ul>
      </div>
      <br>
      </br>
      <Container>
        <Row>
          <Col ig={8}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('./images/feathers2 (1).jpg')}
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
                  src={require('./images/feathers image 2.jpg')}
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
                  src={require('./images/feathers image4.jpg')}
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
      <br>
      </br>
      <div id='afterbooststap'>
        <h1> FEATHERS BADMINTON ACADEMY </h1>
      </div>
      <div id='headingtag'>
        <img src={homeimage} id='homeimage'/>
        <p>celebrating the spirit of sports in Chennai and cultivating an active community of winning champions, sports professionals, passionate players and dedicated fans especially around the beautiful game of Badminton / Shuttlecock. Besides, our love for Badminton, we are also focused on Cricket, Futsal, Swimming, Archery, Table Tennis & more – all under a world-class, family-friendly indoor arena ambiance across great locations in Chennai. No wonder, we are the largest and fastest-growing chain of indoor sports arenas in Chennai.</p>
         </div>
         <br>
         </br>
      <div id='secondimage'>
        <p>celebrating the spirit of sports in Chennai and cultivating an active community of winning champions, sports professionals, passionate players and dedicated fans especially around the beautiful game of Badminton / Shuttlecock. Besides, our love for Badminton, we are also focused on Cricket, Futsal, Swimming, Archery, Table Tennis & more – all under a world-class, family-friendly indoor arena ambiance across great locations in Chennai. No wonder, we are the largest and fastest-growing chain of indoor sports arenas in Chennai.</p>
        <img src={homeimage2}/>
      </div>
      <div id='videodiv'>

      </div>
    </div>
  );
}

export default App;
