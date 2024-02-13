import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import image1 from './mainlogo/logo2.jpg'

function App() {
  return (
    <div className="App">
       <div id="navbar">
          <img src={image1} id="logo" />
          <ul>
          <li><Link className='navbarcolor' to={"about"}>HOME</Link></li>
          <li> <Link  className='navbarcolor' to={"Register"}>REGISTER</Link></li>
          <li> <Link className='navbarcolor' to={"about"}>ACHIEVEMENTS</Link></li>
          <li><Link className='navbarcolor' to={"Signin"}>SIGNUP</Link></li>
          <li><Link className='navbarcolor' to={"Contactus"}>CONTACT US</Link></li>
          <li><Link className='navbarcolor' to={"Signin"}>IMAGES</Link></li>
        </ul>
        </div>
      <div id="backgroundimage">
        <p>hello</p>
        <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>  
        <p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p><p>hello</p>
      </div>
    </div>
  );
}

export default App;
