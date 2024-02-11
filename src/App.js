import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div id="backgroundimage">
        <div id="navbar">
          <input placeholder='enter search'/>
        <Link to={"Signin"}>SIGNIN</Link>
        <Link to={"about"}>HOME</Link>
        <Link to={"about"}>IMAGE</Link>
        <Link to={"about"}>LOGINOUT</Link>
        </div>
        <div id="logo"></div>
      </div>
   
    </div>
  );
}

export default App;
