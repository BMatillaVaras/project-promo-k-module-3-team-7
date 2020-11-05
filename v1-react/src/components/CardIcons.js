import React from "react";
import "../stylesheets/layout/_cardIcons.scss";

class MainSectionCard extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.href} id={this.props.id}>
          <i
            className={`fa ${this.props.icon} sectionOneCard__nav--logos js-socialLogos`}
            aria-hidden="true"
          ></i>
        </a>
      </li>
    )
  }
}

export default MainSectionCard;