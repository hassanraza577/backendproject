import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/DashboardPage" activeClassName="active-link">Dashboard</NavLink>
        <NavLink to="/ShipmentsPage" activeClassName="active-link">Shipments</NavLink>
        <NavLink to="/customer" activeClassName="active-link">Customer</NavLink>
        <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
      </div>
      {/* <div className="profile">
        <img className="profile-picture" src="path/to/profile-picture.jpg" alt="Profile" />
      </div> */}
    </nav>
  );
};

export default Navbar;
