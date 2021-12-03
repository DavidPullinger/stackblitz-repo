import React from 'react';
import { Link } from 'react-router-dom';
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
    <nav>
      <div className="left-nav-items">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to="signout">Sign Out</Link>
    </nav>
  );
}
