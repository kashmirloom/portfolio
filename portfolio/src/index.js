import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import scarf from './/images/scarf.jpg';
import rag from './/images/rag.jpg';
//import hometext from ".//content/hometext.txt";
import hometext from './TextDetails.js'
//import { useState, useEffect } from "react";

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
  // let filepath = ".//homeText.txt";
  // let text = get_text_file(filepath);
  const gotHomeText = hometext;
    return (
        <div style ={{alignItems: "center", justifyContent: "center" }}>
            <div  style = {{background: "rgb(238, 236, 204)", paddingTop:'36px', paddingBottom:'12px', paddingLeft:'300px', paddingRight:'300px'}}>
              <a href="/" style={{ color: 'black', fontSize: "70px", textAlign:'center'}}>
                <div>Raunaq Shawls</div>
              </a>
            </div>
            <div style={{backgroundImage: `url(${scarf})`, backgroundRepeat:"no-repeat", backgroundSize: "cover", height:"50vh", width:"100vw" , display: "flex", backgroundposition: "center"}}> 
first
            </div>
           
          <div style = {{background: "rgb(238, 236, 204)", paddingTop:'30px', paddingBottom:'45px', paddingLeft:'300px', paddingRight:'300px'}}>
          <h2 style={{font:"24px", fontStyle:"normal", fontFamily:"Avenir Next",textAlign:"center"}}>Our Story</h2>
          <div style={{whiteSpace:"pre-line", fontSize:"16px", fontStyle:"normal",fontWeight:"400",fontFamily:"New York",textAlign:"center",transform:"matrix(1,0,0,1,0,0)", overflowWrap:"break-word"}}>{gotHomeText}</div>
          </div>
        </div>
    )
}
// getHomeText = () => {
//   console.log(myText);
// } 


// const get_text_file =  (filepath) => {
//   // prefix public dir files with `process.env.PUBLIC_URL`
//   // see https://create-react-app.dev/docs/using-the-public-folder/
//   const res =  fetch(`${filepath}`);

//   // check for errors
//   if (!res.ok) {
//     throw res;
//   }

//   return res.text();
// };

// export function TextFile({ fileName }) {
//   const [text, setText] = useState(""); // init with an empty string

//   useEffect(() => {
//     get_text_file(`${fileName}.txt`).then(setText).catch(console.error);
//   }, [fileName]);
//   return (
//     <>
//       <p>{text}</p>
//     </>
//   );
// }

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
