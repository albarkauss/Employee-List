import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

import logo from "../images/logo.jpeg";
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img style={{ width: 25 + "%" }} alt="" src={logo}></img>
        </NavLink>
        {showMenu && (
          <ul className="nav-menu mr-auto">
            <li className="nav-item " href="/">
              <NavLink className="nav-link" to="/">
                Create New Employee
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/record">
                Employee List
              </NavLink>
            </li>
          </ul>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowMenu((showMenu) => !showMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Create New Employee
              </NavLink>
            </li>
            <li className="nav-item">
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
