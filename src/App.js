import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import image1 from './mainlogo/logo2.jpg'


function App() {
  return (
    <div className="App">
      <div id="backgroundimage">
        <div id="navbar">
          <img src={image1} id="logo" />
          <ul>
          <li><Link className='navbarcolor' to={"Signin"}>SIGNIN</Link></li>
          <li> <Link  className='navbarcolor' to={"about"}>HOME</Link></li>
          <li> <Link className='navbarcolor' to={"about"}>IMAGE</Link></li>
          <li><Link className='navbarcolor' to={"about"}>LOGINOUT</Link></li>
        </ul>
        <div id='searchbox'>
        <input placeholder='search enter' />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
