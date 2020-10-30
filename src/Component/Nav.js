import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#ffc800",
};

const Nav = () => (
  <header className="header">
    <ul className="nav-list container">
      <li className="nav-list__item">
        <NavLink exact activeStyle={activeStyle} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={activeStyle} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Nav;
