import React from "react";
import TeamLogo from "../images/logoStarCodingLabs-Blue.svg";
import "../stylesheets/layout/_footer.scss";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <small className="footer__small">Awesome profile-cards @2018</small>
        <Link to="/">
          <img className="footer__logo" src={TeamLogo} alt="" />
        </Link>
      </footer>
    );
  }
}

export default Footer;
