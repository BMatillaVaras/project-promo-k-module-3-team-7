import React from "react";
import "../../stylesheets/layout/_info.scss";

class Info extends React.Component {
  render() {
    return (
      <div
        className={`info ${this.props.state}`}
        onClick={this.props.handleClick}
      >
        <i className={`fa ${this.props.icon} info__icons`}></i>
        <h2 className="info__formTitle">{this.props.title}</h2>
        <i className="fa fa-angle-up info__rotate js__rotate"></i>
      </div>
    );
  }
}

export default Info;
