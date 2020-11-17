import React from "react";
import PropTypes from "prop-types";

class Palettes extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (ev) => {
    console.log("me han clicado", ev.target.value);
    this.props.handleInputChange(ev.target.name, ev.target.value);
  };

  render() {
    return (
      <div
        className={`design__colors js-design__colors ${this.props.divClass}`}
      >
        <input
          className={`design__colors--check ${this.props.inputClass}`}
          id={this.props.id}
          type="radio"
          value={this.props.id}
          name="palette"
          onChange={this.handleChange}
        />
        <div className={`design__colors--box ${this.props.classColor1}`}></div>
        <div className={`design__colors--box ${this.props.classColor2}`}></div>
        <div className={`design__colors--box ${this.props.classColor3}`}></div>
      </div>
    );
  }
}

Palettes.propTypes = {
  divClass: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  classColor1: PropTypes.string.isRequired,
  classColor2: PropTypes.string.isRequired,
  classColor3: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
export default Palettes;
