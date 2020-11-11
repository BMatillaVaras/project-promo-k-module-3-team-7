import React from "react";
import TeamLogo from "../images/logoStarCodingLabs-Blue.svg";
import "../stylesheets/layout/_footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <small className="footer__small">Awesome profile-cards @2018</small>
        <a href="./index.html" title="">
          <img className="footer__logo" src={TeamLogo} alt="" />
        </a>
      </footer>
    );
  }
}

export default Footer;
