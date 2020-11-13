import React from "react";

class Palettes extends React.Component {
  render() {
    return (
      <div
        className={`design__colors js-design__colors ${this.props.divClass}`}
      >
        <input
          className={`design__colors--check ${this.props.inputClass}`}
          id={this.props.id}
          type="radio"
          value="colors"
          name="methods"
        />
        <div className={`design__colors--box ${this.props.classColor1}`}></div>
        <div className={`design__colors--box ${this.props.classColor2}`}></div>
        <div className={`design__colors--box ${this.props.classColor3}`}></div>
      </div>
    );
  }
}

export default Palettes;
