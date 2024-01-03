import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Aari from './pages/Aari';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(render());
function render() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/categories/aari' element={<Aari />} />
        </Routes>
      </Router>
    </div>);

};



//setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
