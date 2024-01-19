import React from 'react';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <span className="nav-link">Home</span>
      <span className="nav-link">Players</span>
      <span className="nav-link">New Player</span>
    </div>
  );
};

export default NavBar;