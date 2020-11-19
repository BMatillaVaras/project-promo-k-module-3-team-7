import React from "react";
import Footer from "./Footer";
import "../stylesheets/layout/_landing.scss";
import Logo from "../images/tarjetas-molonas.svg";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <>
        <main className="landing">
          <img className="landing__logo" src={Logo} alt="" title="" />
          <h1 className="landing__title">Crea tu tarjeta de visita</h1>
          <h2 className="landing__subtitle">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </h2>
          <nav>
            <ul className="landing__list">
              <li>
                <i className="fa fa-object-ungroup"></i>
                <h4 className="landing__list--title">Diseña</h4>
              </li>
              <li>
                <i className="fa fa-keyboard-o"></i>
                <h4 className="landing__list--title">Rellena</h4>
              </li>
              <li>
                <i className="fa fa-share-alt"></i>{" "}
                <h4 className="landing__list--title">Comparte</h4>
              </li>
            </ul>
          </nav>

          <Link to="/CardGenerator" className="landing__button">
            Comenzar
          </Link>
        </main>
        <Footer />
      </>
    );
  }
}

export default Landing;
