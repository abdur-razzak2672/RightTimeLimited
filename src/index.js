import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/vendors/owl-carousel/assets/owl.carousel.min.css";
import "./assets/vendors/owl-carousel/assets/owl.theme.default.min.css";
import "./assets/vendors/animate/animate.min.css";
 import "./assets/vendors/fontawesome/css/all.min.css";
 import "./assets/vendors/owl-carousel/owl.carousel.min.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
