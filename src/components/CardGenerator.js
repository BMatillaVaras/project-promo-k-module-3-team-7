import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class CardGenerator extends React.Component {
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

    this.handleReset = this.handleReset.bind(this);
  }

  handleInputChange = (name, value) => {
    console.log("name, value", name, value);
    this.setState({
      [name]: value,
    });
  };

  handleReset = () => {
    this.setState({
      palette: "",
      fullName: "",
      job: "",
      email: "",
      telephone: "",
      linkedin: "",
      github: "",
      img: "",
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          handleInputChange={this.handleInputChange}
          state={this.state}
          handleReset={this.handleReset}
        />
        <Footer />
      </>
    );
  }
}

export default CardGenerator;
