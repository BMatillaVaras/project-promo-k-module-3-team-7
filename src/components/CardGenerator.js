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
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  handleInputChange = (name, value) => {
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

  componentDidMount() {
    this.getLocalStorage();
    console.log("hola");
  }
  componentDidUpdate() {
    this.setLocalStorage();
  }

  setLocalStorage() {
    const data = JSON.stringify(this.state);
    localStorage.setItem("cardData", data);
  }

  getLocalStorage() {
    const savedData = JSON.parse(localStorage.getItem("cardData"));
    if (savedData !== null) {
      this.setState({
        palette: savedData.palette,
        fullName: savedData.fullName,
        job: savedData.job,
        email: savedData.email,
        telephone: savedData.telephone,
        linkedin: savedData.linkedin,
        github: savedData.github,
        img: savedData.img,
      });
    }
  }

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
