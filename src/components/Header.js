import React from "react";
import Logo from "../images/tarjetas-molonas.svg";
import "../stylesheets/layout/_header.scss";

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="./index.html" title="">
          <img className="header__logo" src={Logo} alt="Logo" />
        </a>
      </header>
    );
  }
}

export default Header;
