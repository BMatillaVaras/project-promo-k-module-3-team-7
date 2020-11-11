import React from "react";
import "../stylesheets/layout/_mainSectionCreate.scss";
import Design from "./Create/Design";
import Fill from "./Create/Fill";
import Share from "./Create/Share";

class MainSectionCreate extends React.Component {
  render() {
    return (
      <section className="colapsableForm">
        <Design></Design>
        <Fill></Fill>
        <Share></Share>
      </section>
    );
  }
}

export default MainSectionCreate;
