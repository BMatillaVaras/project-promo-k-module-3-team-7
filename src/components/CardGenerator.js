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
      palettes: "",
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
      loading: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleReset = this.handleReset.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
    if (value === "paletteBlue") {
      this.setState({
        palette: 1,
      });
    } else if (value === "paletteRed") {
      this.setState({
        palette: 2,
      });
    } else if (value === "paletteGrey") {
      this.setState({
        palette: 3,
      });
    }
  };

  handleReset = () => {
    this.setState({
      palette: "",
      palettes: "",
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
    this.setState({
      loading: true,
    });
    const apiCard = {
      name: this.state.fullName,
      job: this.state.job,
      phone: this.state.telephone,
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
          loading: false,
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
        palettes: savedData.palette,
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
          sendRequest={this.sendRequest}
        />
        <Footer />
      </>
    );
  }
}

export default CardGenerator;
