// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/contributors">Contributors</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
};

export default Navbar;
