import React from "react";
import batman_loading from "../images/batman_loading.gif";
import "../stylesheets/layout/_loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <img src={batman_loading} alt="cargando" className="loading--img" />
    </div>
  );
};

export default Loading;
