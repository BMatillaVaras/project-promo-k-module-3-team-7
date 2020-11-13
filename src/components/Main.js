import React from "react";
import MainSectionCard from "./MainSectionCard";
import MainSectionCreate from "./MainSectionCreate";
import "../stylesheets/layout/_main.scss";

class Main extends React.Component {
  render() {
    return (
      <main className="sectionAll">
        <MainSectionCard state={this.props.state} />
        <MainSectionCreate state={this.props.state} />
      </main>
    );
  }
}

export default Main;
