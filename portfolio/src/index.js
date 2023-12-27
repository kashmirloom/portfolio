import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import scarf from './/images/scarf.jpg';
import logo from './/images/logo3.jpeg';
import aari from './/images/catalog/aari.jpg'
import paper from './/images/catalog/paper.jpg'
import silk from './/images/catalog/Silkwool.jpg'
import pashmina from './/images/catalog/pashmina.jpg'
import wool from './/images/catalog/wool.jpg'
import "./style.css";
//import hometext from ".//content/hometext.txt";
import hometext from './TextDetails.js'
//import { useState, useEffect } from "react";

const categories = [
  {
    to: "categories/furnitures",
    imgSrc:`${aari}`,
    alt: "img1",
    description: "Aari Work",
    className: "grid-two",
  },
  {
    to: "categories/skin-care",
    imgSrc:`${pashmina}`,
    alt: "img2",
    description: "Pashmina",
    className: "grid-one",
  },
  {
    to: "categories/kitchen",
    imgSrc:`${silk}`,
    alt: "img3",
    description: "Silk Wool",
    className: "grid-four",
  },
  {
    to: "categories/electronics",
    imgSrc:`${paper}`,
    alt: "img4",
    description: "Papermachie work",
    className: "grid-two-low",
  },
  {
    to: "categories/electronics",
    imgSrc:`${wool}`,
    alt: "img5",
    description: "Cashmere Wool",
    className: "grid-four-low",
  },
];

const element = <h1>Hello, world Owais</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(element);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(render());
}
             /* <h2>It is {new Date().toLocaleTimeString()}.</h2>*/ 

function render() {

  const isDesktop = window.matchMedia("(min-width: 415px)").matches;

  const gotHomeText = hometext;
    return (
        <div>
{/* for mobile */}
            {!isDesktop && (<div  style = {{background: "rgb(252, 252, 252)", paddingTop:'5px', paddingBottom:'3px', paddingLeft:'5px', paddingRight:'5px'}}>
              <a href="/" style={{ color: 'black', fontSize: "70px", textAlign:'center'}}>
                <div>
                  <img src={logo} style={{height:"15vh", width:"20vw"}}></img>
                </div>
              </a>
            </div>)}
{/* for desktop */}
            {isDesktop && (<div  style = {{background: "rgb(252, 252, 252)", paddingTop:'20px', paddingBottom:'12px', paddingLeft:'300px', paddingRight:'300px'}}>
              <a href="/" style={{ color: 'black', fontSize: "70px", textAlign:'center'}}>
                <div>
                  <img src={logo} style={{height:"15vh", width:"20vw"}}></img>
                </div>
              </a>
            </div>)}
            
            <div style={{backgroundImage: `url(${scarf})`, backgroundRepeat:"no-repeat", backgroundSize: "cover", height:"50vh", width:"100vw" , display: "flex", backgroundposition: "center"}}> 
first
            </div>
{/* for mobile */}
          { !isDesktop && (<div style = {{background: "rgb(238, 236, 204)", paddingTop:'30px', paddingBottom:'45px', paddingLeft:'5px', paddingRight:'5px'}}>
          <h2 style={{font:"24px", fontStyle:"normal", fontFamily:"Avenir Next",textAlign:"center"}}>Our Story</h2>
          <div style={{whiteSpace:"pre-line", fontSize:"16px", fontStyle:"normal",fontWeight:"400",fontFamily:"New York",textAlign:"center",transform:"matrix(1,0,0,1,0,0)", overflowWrap:"break-word"}}>{gotHomeText}</div>
          </div>)}
{/* for desktop */}
            { isDesktop && (<div style = {{background: "rgb(238, 236, 204)", paddingTop:'30px', paddingBottom:'45px', paddingLeft:'300px', paddingRight:'300px'}}>
          <h2 style={{font:"24px", fontStyle:"normal", fontFamily:"Avenir Next",textAlign:"center"}}>Our Story</h2>
          <div style={{whiteSpace:"pre-line", fontSize:"16px", fontStyle:"normal",fontWeight:"400",fontFamily:"New York",textAlign:"center",transform:"matrix(1,0,0,1,0,0)", overflowWrap:"break-word"}}>{gotHomeText}</div>
          </div>)}
        
          <div style = {{background: "rgb(238, 236, 204)"}}>{grid()}</div>
        </div>
    
    )
}

export default function grid() {
  return (
    <div className="home-container" style={{paddingTop:'5px', paddingBottom:'5px'}}>
      <div className="container">
        <div className="grid-container">
          {categories.map((category, index) => (
            <div key={index} className={`featured ${category.className}`}>
              <a Href={category.to}>
                <div id={`img${index + 1}`} className="lil-overlay"></div>
                <img src={category.imgSrc} alt={category.alt} />
                <p className="main-description">{category.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
