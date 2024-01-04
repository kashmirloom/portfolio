import React from 'react';

import aari1 from '../images/categories/print/print1.jpg';
import aari2 from '../images/categories/print/print2.jpg';
import aari3 from '../images/categories/print/print3.jpg';
import aari4 from '../images/categories/print/print4.jpg';
import aari5 from '../images/categories/print/print5.jpg';
import aari6 from '../images/categories/print/print6.jpg';
import "../style.css";
import Header from './Header';


const categories = [
    {
      to: "categories/aari",
      imgSrc:`${aari1}`,
      alt: "img1",
      description: "Aari1 ",
      price: "100",
    },
    {
      to: "categories/skin-care",
      imgSrc:`${aari2}`,
      alt: "img2",
      description: "aari2",
      price: "102",

    },
    {
      to: "categories/kitchen",
      imgSrc:`${aari3}`,
      alt: "img3",
      description: "Silk Wool",
      price: "103",

    },
    {
      to: "categories/electronics",
      imgSrc:`${aari4}`,
      alt: "img4",
      description: "Papermachie work",
      price: "104",

    },
    {
      to: "categories/electronics",
      imgSrc:`${aari5}`,
      alt: "img5",
      description: "Cashmere Wool",
      price: "105",

    },
    {
        to: "categories/electronics",
        imgSrc:`${aari6}`,
        alt: "img5",
        description: "Cashmere Wool",
        price: "105",
  
      },

  ];
function Silkwool() {
  

    return (grid());
}

export  function grid() {

    return (
        <div>
        <Header/>
        <div>
            <div style = {{background: "rgb(119, 117, 91)", paddingTop:'30px', paddingBottom:'45px', paddingLeft:'5px', paddingRight:'5px'}}>
              <h2 style={{font:"24px", fontStyle:"normal", fontSize:"20px",fontFamily:"PT Serif Caption",textAlign:"center", color:"white"}}>Silk Wool</h2>
              <div style={{whiteSpace:"pre-line", fontSize:"18px", fontStyle:"normal",fontWeight:"400",fontFamily:"New York",color:"white",textAlign:"center",transform:"matrix(1,0,0,1,0,0)", overflowWrap:"break-word"}}>{"The softness of silk combines with the natural warmth of wool for a stunning scarf that’s as pretty as it is practical. Mostly is 70% of wool and 30% of silk"}</div>
              </div>
        </div>
      <div className="home-container" style={{paddingTop:'5px', paddingBottom:'5px'}}>
        <div className="aari-container">
          <div className="aari-grid-container">
            {categories.map((category, index) => (
              <div key={index} className={`featured column same-height-images`}>
                <a href={category.to}>
                  <div id={`img${index + 1}`} className="aari-lil-overlay"></div>
                  <img src={category.imgSrc} alt={category.alt} />
                </a>
                <label style={{display: 'inline-block'}}>
                <p style={{fontFamily:"PT Serif Caption", fontSize:"14px", textDecoration: "underline"}}>{category.description}</p>
                  <p style={{fontFamily:"sans-serif", fontSize:"12px"}}>£ {category.price}</p>
                  </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  }

export default Silkwool; 