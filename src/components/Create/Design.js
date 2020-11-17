import React from "react";
import Info from "./Info";
import Palettes from "./Palettes";
import "../../stylesheets/layout/_design.scss";
import PropTypes from "prop-types";

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: "close",
    };

    this.collapseDesign = this.collapseDesign.bind(this);
  }

  collapseDesign() {
    this.setState((prevState) => ({
      onClick: prevState.onClick === "close" ? "open" : "close",
    }));
  }

  render() {
    return (
      <article className="border">
        <Info
          state={this.state.onClick}
          icon="fa-object-ungroup"
          title="Diseña"
          handleClick={this.collapseDesign}
        ></Info>
        <div
          className={`design js__display js__displayNone ${this.state.onClick}`}
        >
          <h3 className="design__title">Colores</h3>
          <div>
            {/* <!--Checkbox1--> */}
            <Palettes
              divClass="blue"
              inputClass="js-checkedBlue"
              id="paletteBlue"
              classColor1="box1"
              classColor2="box2"
              classColor3="box3"
              handleInputChange={this.props.handleInputChange}
            />

            {/* <!--Checkbox2--> */}
            <Palettes
              divClass="red"
              inputClass="js-checkedRed"
              id="paletteRed"
              classColor1="box4"
              classColor2="box5"
              classColor3="box6"
              handleInputChange={this.props.handleInputChange}
            />

            {/* <!--Checkbox3--> */}
            <Palettes
              divClass="grey"
              inputClass="js-checkedGrey"
              id="paletteGrey"
              classColor1="box7"
              classColor2="box8"
              classColor3="box9"
              handleInputChange={this.props.handleInputChange}
            />
          </div>
        </div>
      </article>
    );
  }
}

Design.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};
export default Design;
