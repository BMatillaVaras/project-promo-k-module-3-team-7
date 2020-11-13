import React from "react";
import CardIcons from "./CardIcons";
import CardImg from "../images/Flash.png";
import "../stylesheets/layout/_mainSectionCard.scss";

class MainSectionCard extends React.Component {
  render() {
    const imgStyle = {
      backgroundImage: "url(" + CardImg + ")",
    };

    // for (const key in this.props.state) {
    //   if (this.props.state.key === "") {
    //     const element = object[key];
    //   }
    // }

    const fullName =
      this.props.state.fullName === ""
        ? "Barry Allen"
        : this.props.state.fullName;
    // const job =
    //   this.props.state.job === ""
    //     ? "The Fastest Men Alive"
    //     : this.props.state.job;

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
                {fullName}
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
                <CardIcons
                  href=""
                  id="js-telephone-card"
                  icon="fa-mobile"
                ></CardIcons>
                <CardIcons
                  href=""
                  id="js-mail-card"
                  icon="fa-envelope-o"
                ></CardIcons>
                <CardIcons
                  href=""
                  id="js-linkedin-card"
                  icon="fa-linkedin"
                ></CardIcons>
                <CardIcons
                  href=""
                  id="js-github-card"
                  icon="fa-github-alt"
                ></CardIcons>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default MainSectionCard;
