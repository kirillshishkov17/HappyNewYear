import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import Congradulation from './components/congradulation/Congradulation';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Congradulation/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
