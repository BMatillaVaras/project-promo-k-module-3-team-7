import React from "react";
import Info from "./Info";
import "../../stylesheets/layout/_design.scss";

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
            <div className="design__colors js-design__colors blue">
              <input
                className="design__colors--check js-checkedBlue"
                id="method1"
                type="radio"
                value="colors"
                name="methods"
              />
              <div className="design__colors--box box1"></div>
              <div className="design__colors--box box2"></div>
              <div className="design__colors--box box3"></div>
            </div>
            {/* <!--Checkbox2--> */}
            <div className="design__colors js-design__colors red">
              <input
                className="design__colors--check js-checkedRed"
                id="method2"
                type="radio"
                value="colors"
                name="methods"
              />
              <div className="design__colors--box box4"></div>
              <div className="design__colors--box box5"></div>
              <div className="design__colors--box box6"></div>
            </div>
            {/* <!--Checkbox3--> */}
            <div className="design__colors js-design__colors grey">
              <input
                className="design__colors--check js-checkedGrey"
                id="method3"
                type="radio"
                value="colors"
                name="methods"
              />
              <div className="design__colors--box box7"></div>
              <div className="design__colors--box box8"></div>
              <div className="design__colors--box box9"></div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Design;
