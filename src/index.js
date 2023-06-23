import React from 'react';
import ReactDOM from 'react-dom/client';
import luna from './darkcat2.png';

const root = ReactDOM.createRoot(document.getElementById("root"));

// const page = (
//   <div>
//     <img src = {luna} width={250} height={250} alt="This is Luna"></img>
//     <h1>Fun facts about Luna</h1>
//     <ul>
//       <li>Was born March 29, 2018</li>
//       <li>Was born in a home where her mother was being fostered through APA!</li>
//       <li>Has well over 100K stars on every platform</li>
//       <li>Prefers floor scoops</li>
//       <li>Powers thousands of enterprises, including Aurora's Italian Bistro</li>
//     </ul>
//   </div>
// )

function Page(){
  return (
    <div>
    <img src = {luna} width={250} height={250} alt="This is Luna"></img>
    <h1>Fun facts about Luna</h1>
    <ul>
      <li>Was born March 29, 2018</li>
      <li>Was born in a home where her mother was being fostered through APA!</li>
      <li>Has well over 100K stars on every platform</li>
      <li>Prefers floor scoops</li>
      <li>Powers thousands of enterprises, including Aurora's Italian Bistro</li>
    </ul>
  </div>
  )
}

root.render(<Page />);
