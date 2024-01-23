import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/players">Player List</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/new-player">New Player</Link>
          </li>
        )}
        {/* Add more navigation options as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;