import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import sendData from "../services/fetch";

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
      apiSuccess: false,
      apiCardUrl: "",
      apiError: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleReset = this.handleReset.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
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

  sendRequest = () => {
    const apiCard = {
      name: this.state.fullName,
      job: this.state.job,
      telephone: this.state.telephone,
      email: this.state.email,
      linkedin: this.state.linkedin,
      github: this.state.github,
      palette: this.state.palette,
      photo: this.state.img,
    };
    sendData(apiCard).then((response) => {
      if (response.success === true) {
        this.setState({
          apiSuccess: true,
          apiCardUrl: response.cardURL,
          apiError: "",
        });
        console.log(this.state.apiCardUrl);
      } else {
        this.setState({
          apiSuccess: false,
          apiCardUrl: "",
          apiError: response.error,
        });
      }
    });
  };

  componentDidMount() {
    this.getLocalStorage();
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
    console.log(this.state);
    return (
      <>
        <Header />
        <Main
          handleInputChange={this.handleInputChange}
          state={this.state}
          handleReset={this.handleReset}
          sendRequest={this.sendRequest}
        />
        <Footer />
      </>
    );
  }
}

export default CardGenerator;
