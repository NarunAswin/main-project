import React from 'react'
import './Signin.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image10 from './R.jpg';
import Navbar from './Navbar';
import Lastdiv from './Lastdiv';
import { Col, Container, Row } from 'react-bootstrap';


function Signin() {
  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <div id='firstdivsign'>
        <div id='seconddivsign'>
          <br></br>
          <div id='maindiv'>
            <Row>
              <Col>
                <Container>
                  <h4>User Login</h4>
                  <br></br>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Container>
              </Col>
            </Row>
            <img src={image10} />
          </div>
        </div>
        <div id='lastdivsig'><Lastdiv></Lastdiv></div> 
      </div>
    </div>
  )
}

export default Signin