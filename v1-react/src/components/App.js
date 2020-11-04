import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
