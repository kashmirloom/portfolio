import React from 'react';

import aari1 from '../images/categories/pashmina/pashmina1.jpg';
import aari2 from '../images/categories/pashmina/pashmina2.jpg';
import aari3 from '../images/categories/pashmina/pashmina3.jpg';
import aari4 from '../images/categories/pashmina/pashmina4.jpg';
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

  ];
function Pashmina() {
  

    return (grid());
}

export  function grid() {

    return (
        <div>
        <Header/>
        <div>
            <div style = {{background: "rgb(119, 117, 91)", paddingTop:'30px', paddingBottom:'45px', paddingLeft:'5px', paddingRight:'5px'}}>
              <h2 style={{font:"24px", fontStyle:"normal", fontSize:"20px",fontFamily:"PT Serif Caption",textAlign:"center", color:"white"}}>Pashmina</h2>
              <div style={{whiteSpace:"pre-line", fontSize:"18px", fontStyle:"normal",fontWeight:"400",fontFamily:"New York",color:"white",textAlign:"center",transform:"matrix(1,0,0,1,0,0)", overflowWrap:"break-word"}}>Kashmiri Aari is one of the old-fashioned forms of embroidery in India. Aari embroidery is done with a pen-like needle that matches the shape of crochet hooks. It is giving enormous growth to an inherent form of artwork. Generally, this work is valued for its refined and delicate thread work, which intensifies the essence of hand embroidery. In case you don’t know, Kashmir has a strong and old-fashioned tradition in hand-embroidery. In this blog, we have tried to bring light to the Kashmir Aari embroidery.</div>
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

export default Pashmina; 