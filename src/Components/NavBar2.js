// src/components/NavBar2.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" to="/">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Science">Science</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
