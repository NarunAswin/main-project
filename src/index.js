import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import About from './pagers/Signin';
import Signin from './pagers/Signin';
import Register from './pagers/Register';
import Contactus from './pagers/Contactus';
import Achievements from './pagers/Achievements';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "Signin",
    element: <Signin/>
  },
  {
    path:"Register",
    element:<Register/>
  },
  {
    path:"Contactus",
    element:<Contactus/>
  },
  {
    path:"Achievements",
    element:<Achievements/>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
