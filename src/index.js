import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.js';
import MainContent from './MainContent';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page(){
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
  </div>
  )
}

root.render(<Page />);
