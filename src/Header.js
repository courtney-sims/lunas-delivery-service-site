import React from 'react';
import luna from './darkcat2.png';

export default function Header(){
    return (
      <header>
        <nav className='nav'>
          <img className="img" src={luna} alt="This is Luna"></img>
          <ul className="menu">
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }