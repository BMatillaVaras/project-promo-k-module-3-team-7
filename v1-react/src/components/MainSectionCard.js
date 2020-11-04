import React from "react";
import CardImg from "../images/Flash.png";
import "../stylesheets/layout/_mainSectionCard.scss";

class MainSectionCard extends React.Component {
  render() {
    const imgStyle = {
      backgroundImage: "url(" + CardImg + ")",
    };
    return (
      <section className="sectionOne">
        <div>
          <button className="sectionOneBtn js-sectionOneBtn">
            <i
              className="fa fa-trash-o sectionOneBtn__logo"
              aria-hidden="true"
            ></i>
            Reset
          </button>
          <div className="sectionOneCard">
            <header className="sectionOneCard__header js-border">
              <h2
                className="sectionOneCard__header--name js__name--Card"
                id="js-fullName-card"
              >
                Barry Allen
              </h2>
              <h3 className="sectionOneCard__header--job" id="js-job-card">
                The Fastest Men Alive
              </h3>
            </header>
            <div
              className="profile__image js__profile-image"
              id="profileImg"
              style={imgStyle}
            ></div>
            <nav>
              <ul className="sectionOneCard__nav">
                <li>
                  <a href="#" id="js-telephone-card">
                    <i
                      className="fa fa-mobile sectionOneCard__nav--logos js-socialLogos"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="#" id="js-mail-card">
                    <i
                      className="fa fa-envelope-o sectionOneCard__nav--logos js-socialLogos"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="#" id="js-linkedin-card">
                    <i
                      className="fa fa-linkedin sectionOneCard__nav--logos js-socialLogos"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="#" id="js-github-card">
                    <i
                      className="fa fa-github-alt sectionOneCard__nav--logos js-socialLogos"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default MainSectionCard;
