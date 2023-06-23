import React from 'react';
import ReactDOM from 'react-dom/client';
import luna from './darkcat2.png';

const root = ReactDOM.createRoot(document.getElementById("root"));

function Header(){
  return (
    <header>
      <nav>
        <img src = {luna} width="40px" alt="This is Luna"></img>
        <ul>
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer(){
  return (
    <footer>Luna's Delivery Service - A Sister Cat Industries Coroporation</footer>
  )
}

function MainContent(){
  return (
    <div>
      <h1>Fun facts about Luna</h1>
      <ul>
        <li>Was born March 29, 2018</li>
        <li>Was born in a home where her mother was being fostered through APA!</li>
        <li>Has well over 100K stars on every platform</li>
        <li>Prefers floor scoops</li>
        <li>Powers thousands of enterprises, including Aurora's Italian Bistro</li>
      </ul>
    </div>
  );
}

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
