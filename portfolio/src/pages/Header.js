import React from 'react';
import logo from '../images/logo3.jpeg';

function Header() {
  

    return (head());
}

export  function head() {
    const isDesktop = window.matchMedia("(min-width: 415px)").matches;
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
      </div>
    );
  }

export default Header; 