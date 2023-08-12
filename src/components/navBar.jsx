import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          Movie Center
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink to="/movies" className="nav-item nav-link ">
              Movies
            </NavLink>
            <NavLink to="/customers" className="nav-item nav-link">
              Customers
            </NavLink>
            <NavLink to="/rentals" className="nav-item nav-link">
              Rentals
            </NavLink>

            <NavLink to="/login" className="nav-item nav-link">
              Login
            </NavLink>
            <NavLink to="/register" className="nav-item nav-link">
              Register
            </NavLink>

            <NavLink to="/logout" className="nav-item nav-link">
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
