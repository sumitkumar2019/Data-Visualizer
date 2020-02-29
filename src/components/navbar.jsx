import React from "react";
import { Link } from "react-router-dom";
import config from "../config/app-config.json";
const NavBar = () => {
  const { image, label } = config.navBar;
  return (
    <nav className="navbar navbar-dark fixed-top navbar-color">
      <Link className="navbar-brand" to="/">
        <img src={image.url} alt={image.text}></img>
        <p className="nav-bar-p header-text">{label.header}</p>
      </Link>
    </nav>
  );
};

export default NavBar;
