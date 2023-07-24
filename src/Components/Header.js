import React from 'react';
import luna from '../darkcat2.png';

export default function Header(){
    return (
      <header>
        <nav className='nav'>
          <img className="lunaImg" src={luna} alt="This is Luna"></img>
          <h1>Luna's Delivery Service</h1>
          <ul className="menu">
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }