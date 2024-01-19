import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { APIURL } from '../config';


const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/players" className="nav-link">
        Players
      </Link>
      <Link to="/new-player" className="nav-link">
        New Player
      </Link>
    </div>
  );
};

export default NavBar;