import React from "react";
import "../stylesheets/layout/_cardIcons.scss";
import PropTypes from "prop-types";

class CardIcons extends React.Component {
  render() {
    return (
      <li>
        <a
          href={this.props.href}
          id={this.props.id}
          target="_blank"
          rel="noreferrer"
        >
          <i
            className={`fa ${this.props.icon} sectionOneCard__nav--logos js-socialLogos`}
            aria-hidden="true"
          ></i>
        </a>
      </li>
    );
  }
}

CardIcons.propTypes = {
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default CardIcons;
