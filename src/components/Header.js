import React from "react";
import Logo from "../images/tarjetas-molonas.svg";
import "../stylesheets/layout/_header.scss";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img className="header__logo" src={Logo} alt="Logo" />
        </Link>
      </header>
    );
  }
}

export default Header;
