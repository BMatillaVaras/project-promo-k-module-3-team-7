import React from "react";
import "../stylesheets/layout/_mainSectionCreate.scss";
import Design from "./Create/Design";
import Fill from "./Create/Fill";
import Share from "./Create/Share";
import PropTypes from 'prop-types';

class MainSectionCreate extends React.Component {
  render() {
    return (
      <section className="colapsableForm">
        <Design handleInputChange={this.props.handleInputChange}></Design>
        <Fill handleInputChange={this.props.handleInputChange} state={this.props.state}></Fill>
        <Share></Share>
      </section>
    );
  }
}

MainSectionCreate.propTypes = {
  state: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired
}
export default MainSectionCreate;
