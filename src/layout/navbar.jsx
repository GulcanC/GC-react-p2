import React from "react";
import Logo from "../assets/navbar-logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="navbar-logo-kasa" className="navbar_img" />
      <ul className="navbar_ul">
        <li className="navbar_ul_li">
          <NavLink to="/home" className="navbar_ul_li_a">
            Accueil
          </NavLink>
        </li>
        <li className="navbar_ul_li">
          <NavLink to="/about" className="navbar_ul_li_a">
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
