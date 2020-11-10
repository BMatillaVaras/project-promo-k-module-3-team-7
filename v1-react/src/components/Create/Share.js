import React from "react";
import Info from "./Info";
import "../../stylesheets/layout/_share.scss";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: "close",
    };

    this.collapseShare = this.collapseShare.bind(this);
  }

  collapseShare() {
    this.setState((prevState) => ({
      onClick: prevState.onClick === "close" ? "open" : "close",
    }));
  }
  render() {
    return (
      <>
        <article className="border">
          <Info
            state={this.state.onClick}
            icon="fa-share-alt"
            title="Comparte"
            handleClick={this.collapseShare}
          ></Info>
          <div
            className={`js-section__link--share share js__display js__displayNone js-share js-btn--create ${this.state.onClick}`}
          >
            <i className="fa fa-address-card-o share__icon"></i>
            <button className="share__button js-share__button" type="button">
              Crear tarjeta
            </button>
          </div>
        </article>
        <div
          className={`border sent js__displayNone js-link js-twitterContainer js__show`}
        >
          <h3 className="sent__text section__share--subtitle">
            La tarjeta ha sido creada
          </h3>
          <a className="sent__link link--share" href="" target="_blank"></a>
          <a href="" className="sent__twitter button--share" target="_blank">
            <i
              className="fa fa-twitter sent__twitter--icon"
              aria-hidden="true"
            ></i>
            Compartir en twitter
          </a>
        </div>
      </>
    );
  }
}

export default Share;
