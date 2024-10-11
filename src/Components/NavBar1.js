// src/components/NavBar1.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar1 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">News App</Link>
      </div>
    </nav>
  );
};

export default NavBar1;
