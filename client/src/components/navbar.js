import React from "react";

import logo from "../images/logo.jpeg";
// Import NavLink to utilize the react router
import { NavLink } from "react-router-dom";

// Display the Navbar based on window size
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light content-navbar">
        <NavLink className="navbar-brand" to="/">
          <img style={{ width: 25 + "%" }} alt="" src={logo}></img>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item li-right">
              <NavLink className="nav-link" to="/">
                Create New Employee
              </NavLink>
            </li>
            <li className="nav-item li-right">
              <NavLink className="nav-link" to="/record">
                Employee List
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
