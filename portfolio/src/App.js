import React from 'react';
import './index.css';
import scarf from './/images/scarf.jpg';
import poster from './/images/poster.jpg';
import aari from './/images/catalog/aari.jpg'
import paper from './/images/catalog/paper.jpg'
import silk from './/images/catalog/Silkwool.jpg'
import pashmina from './/images/catalog/pashmina.jpg'
import wool from './/images/catalog/wool.jpg'
import "./style.css";
import hometext from './TextDetails.js';
import Header from './pages/Header.js';

const categories = [
  {
    to: "categories/aari",
    imgSrc:`${aari}`,
    alt: "img1",
    description: "Aari Work",
    className: "grid-two",
  },
  {
    to: "categories/pashmina",
    imgSrc:`${pashmina}`,
    alt: "img2",
    description: "Pashmina",
    className: "grid-one",
  },
  {
    to: "categories/silk-wool",
    imgSrc:`${silk}`,
    alt: "img3",
    description: "Silk Wool",
    className: "grid-four",
  },
  {
    to: "categories/papermachie",
    imgSrc:`${paper}`,
    alt: "img4",
    description: "Papermachie work",
    className: "grid-two-low",
  },
  {
    to: "categories/cashmere",
    imgSrc:`${wool}`,
    alt: "img5",
    description: "Cashmere Wool",
    className: "grid-four-low",
  },
];
const isDesktop = window.matchMedia("(min-width: 415px)").matches;
const gotHomeText = hometext;
function App() {
  

  return (
    <div>
    <Header/>
                
                <div className='poster' style={{backgroundImage: `url(${poster})`}}> 
    first
                </div>
    {/* for mobile */}
              { !isDesktop && (<div style = {{background: "rgb(238, 236, 204)", paddingTop:'30px', paddingBottom:'45px', paddingLeft:'5px', paddingRight:'5px'}}>
              <h2 style={{font:"24px", fontStyle:"normal", fontSize:"20px",fontFamily:"PT Serif Caption",textAlign:"center"}}>Our Story</h2>
              <div style={{whiteSpace:"pre-line", fontSize:"16px", fontStyle:"normal",fontWeight:"400",fontFamily:"New York",textAlign:"center",transform:"matrix(1,0,0,1,0,0)", overflowWrap:"break-word"}}>{gotHomeText}</div>
              </div>)}
    {/* for desktop */}
                { isDesktop && (<div className='story'>
              <h2 style={{font:"24px", fontStyle:"normal", fontFamily:"Avenir Next",textAlign:"center"  }}>Our Story</h2>
              <div style={{whiteSpace:"pre-line", fontSize:"16px", fontStyle:"normal",fontWeight:"400",fontFamily:"New York",textAlign:"center",transform:"matrix(1,0,0,1,0,0)", overflowWrap:"break-word"}}>{gotHomeText}</div>
              </div>)}
            
              <div style = {{background: "rgb(238, 236, 204)"}}>{grid()}</div>
            </div>
  );

  
}

export  function grid() {

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

export default App;
