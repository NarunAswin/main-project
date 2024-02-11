import React from 'react'
import './Signin.css';

function Signin() {
  return (
    <div>
        <div id="backgroundcolor">
          <div id="login">
            <h1>SIGN UP</h1>
            <p>Welcome to Our SPORTS WEBSITE By B sc</p>
            <div className='password'>
              <h2>PHONE</h2>
              <input placeholder='enter phoneno'/>
            </div>
            <div className='password'>
              <h2>EMAIL</h2>
              <input placeholder='Enter Email'/>
            </div>
            <div className='password'>
              <h2>PASSWORD</h2>
              <input placeholder='enter password'/>
              <div id="code">
               <button>submit</button>

              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Signin