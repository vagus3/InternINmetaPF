import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title-link">
        <h1>💫🌙InternINmeta PortFolio☄️🌌</h1>
      </Link>
    </nav>
  );
};

export default Navbar;