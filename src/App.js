import React from 'react';
import './App.css';

export default function App() {
  return (
    <div>
      <Navigation />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

function Navigation() {
  return (
    <div>
      <ul className="nav-items">
        <div className="left-nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <li>Sign Out</li>
      </ul>
    </div>
  );
}
