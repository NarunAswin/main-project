import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import './Register.css'
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import Lastdiv from './Lastdiv';

function Register() {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      </div>
      <br></br>
      <div id='registerfirstdiv'>
        <div id='innerdivforregister1'>
          <div id='namediv2'>
            <h1>Registration Form</h1>
          </div>
          <br>
          </br>
          <div id='inputdiv1'>
            <Container>
              <Row>
                <Col >
                  <Form>
                    <Form.Group className="mb-3" >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control placeholder="Enter First Name" type='Name' />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control placeholder="Ex:Kumar" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                      <Form.Label>DOB</Form.Label>
                      <Form.Control type='date' placeholder="date of birth" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type='tel' placeholder=" Ex:(123456780)" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control placeholder="Ex:aswin@gmail.com" type='email' />
                    </Form.Group>
                    <Form.Label>Select Your Preferred time slot for Training </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select Timing</option>
                      <option value="1">11AM to 1pm</option>
                      <option value="2">1pm to 3pm</option>
                      <option value="3">3pm to 5pm </option>
                    </Form.Select>
                  </Form>
                </Col>
              </Row>
            </Container>
            <br></br>
            <div id='rules'>
              <h3>Rules</h3>
            </div>
            <br></br>
            <div id='paraforrules'>
              <p> 1, Age and Skill Level Requirements: Many academies may have specific age requirements or skill level assessments to ensure that members are suitable for the training provided.</p>
              <p>2, Membership Fees: Most academies charge membership fees or tuition for training sessions. It's important to understand the cost structure and what is included in the fees.</p>             
              <p>3, Commitment Expectations: Academies may have expectations regarding attendance, participation in training sessions, and commitment to the sport, ensuring members are dedicated to improvement.</p>
             <p>4, Code of Conduct: Academies typically have codes of conduct outlining expected behavior, including respect for coaches and fellow players, adherence to rules, and sportsmanship.</p>
              <p id='food'>Once you submit your application, we will contact you to confirm your time slot.</p>
              <p id='food2'>Thank you!</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Register