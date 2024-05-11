import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Content from './components/Content';
import Seccontent from './components/Seccontent';
import Card from './components/Card'
import Video from './components/Video';
import Poster from './components/Poster';
import Links from './components/Links';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Application from './Application';
import Products from './Products';
import App from './App';
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes path="/Application" elemenet={<Application/>} />
  </Router> */}
    {/* <Products /> */}
    <Navbar/>
     <Content/>
    <Seccontent/>
    <Card/>
    <Video/>
    <Poster/>
    <Links/> 
    <Application/>
    <Products/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

