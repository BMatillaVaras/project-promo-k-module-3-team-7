import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      palette: "",
      fullName: "",
      job: "",
      email: "",
      telephone: "",
      linkedin: "",
      github: "",
      img: "",
    };
  }
  render() {
    return (
      <>
        <Header />
        <Main state={this.state} />
        <Footer />
      </>
    );
  }
}

export default App;
