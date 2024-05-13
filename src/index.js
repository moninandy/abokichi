import React,{useState}from 'react';
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
import Navbar from './components/Navbar';
import ProductDescrption from './ProductDescrption';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <React.StrictMode>
  
    <Navbar/>
     <Content/>
    <Seccontent/>
    <Card />
    <Video/>
    <Poster/>
    <Links/> 
   <Application/>
    <Products/>
   <ProductDescrption/> 
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

