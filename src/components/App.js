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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (name, value) => {
    console.log("name, value", name, value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main handleInputChange={this.handleInputChange} state={this.state} />
        <Footer />
      </>
    );
  }
}

export default App;
