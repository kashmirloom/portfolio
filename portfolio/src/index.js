import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Aari from './pages/Aari';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Pashmina from './pages/Pashmina';
import Silkwool from './pages/Silkwool';
import Cashmere from './pages/Cashmere';
import Papermachie from './pages/Papermachie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(render());
function render() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/categories/aari' element={<Aari />} />
          <Route path='/categories/pashmina' element={<Pashmina />} />
          <Route path='/categories/silk-wool' element={<Silkwool />} />
          <Route path='/categories/papermachie' element={<Papermachie />} />
          <Route path='/categories/cashmere' element={<Cashmere />} />
        </Routes>
      </Router>
    </div>);

};



//setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
