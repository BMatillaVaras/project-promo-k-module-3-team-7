import React from "react";
import Info from "./Info";
import "../../stylesheets/layout/_share.scss";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: "close",
      createCard: "close",
    };

    this.collapseShare = this.collapseShare.bind(this);
    //this.createCard = this.createCard.bind(this);
  }

  collapseShare() {
    this.setState((prevState) => ({
      onClick: prevState.onClick === "close" ? "open" : "close",
    }));
  }

  // createCard() {
  //   this.props.sendRequest();
  //   this.setState((prevState) => ({
  //     createCard: prevState.createCard === "close" ? "open" : "close",
  //   }));
  // }

  render() {
    const tweet =
      "Ya tengo mi tarjeta creada en STAR Labs, soy miembro de La Liga de la Justicia";
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
            <button
              className="share__button js-share__button"
              type="button"
              onClick={this.props.sendRequest}
            >
              Crear tarjeta
            </button>
          </div>
        </article>
        <div
          className={`border sent js__displayNone js-link js-twitterContainer ${this.state.createCard}`}
        >
          <h3 className="sent__text section__share--subtitle">
            La tarjeta ha sido creada
          </h3>
          <a
            className="sent__link link--share"
            href={this.props.state.apiCardUrl}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.state.apiSuccess
              ? this.props.data.apiCardUrl
              : this.props.state.apiError}
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${tweet}&url=${this.props.state.apiCardUrl}`}
            className="sent__twitter button--share"
            target="_blank"
          >
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
