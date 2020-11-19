import React from "react";
import MainSectionCard from "./MainSectionCard";
import MainSectionCreate from "./MainSectionCreate";
import "../stylesheets/layout/_main.scss";
import PropTypes from "prop-types";

class Main extends React.Component {
  render() {
    return (
      <main className="sectionAll">
        <MainSectionCard
          state={this.props.state}
          handleReset={this.props.handleReset}
        />
        <MainSectionCreate
          handleInputChange={this.props.handleInputChange}
          state={this.props.state}
        />
      </main>
    );
  }
}

Main.propTypes = {
  state: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
export default Main;
