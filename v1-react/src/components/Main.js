import React from "react";
import MainSectionCard from "./MainSectionCard";
import MainSectionCreate from "./MainSectionCreate";
import "../stylesheets/layout/_main.scss";

class Main extends React.Component {
  render() {
    return (
      <main className="sectionAll">
        <MainSectionCard />
        <MainSectionCreate />
      </main>
    );
  }
}

export default Main;
