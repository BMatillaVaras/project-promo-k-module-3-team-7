import React from "react";
import Info from "./Info";
import Loading from "../Loading";
import "../../stylesheets/layout/_share.scss";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: "close",
      createCard: "close",
    };

    this.collapseShare = this.collapseShare.bind(this);
    this.createCard = this.createCard.bind(this);
  }

  collapseShare() {
    this.setState((prevState) => ({
      onClick: prevState.onClick === "close" ? "open" : "close",
    }));
  }

  createCard() {
    this.props.sendRequest();
    this.setState((prevState) => ({
      createCard: prevState.createCard === "close" ? "open" : "close",
    }));
  }

  render() {
    const tweet =
      "Ya tengo mi tarjeta creada en STAR Labs, soy miembro de La Liga de la Justicia";
    const loadingElement =
      this.props.state.loading === true ? <Loading /> : null;
    return (
      <>
        <article className="border">
          <Info
            state={this.state.onClick}
            icon="fa-share-alt"
            title="Comparte"
            handleClick={this.collapseShare}
          ></Info>
          <div className={`share  js__displayNone ${this.state.onClick}`}>
            <i className="fa fa-address-card-o share__icon"></i>
            <button
              className="share__button"
              type="button"
              onClick={this.createCard}
            >
              Crear tarjeta
            </button>
          </div>
        </article>
        <div className={`border sent js__displayNone ${this.state.createCard}`}>
          <h3 className="sent__text section__share--subtitle">
            La tarjeta ha sido creada
          </h3>
          {loadingElement}
          <a
            className="sent__link link--share"
            href={this.props.state.apiCardUrl}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.state.apiSuccess
              ? this.props.state.apiCardUrl
              : this.props.state.apiError}
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${tweet}&url=${this.props.state.apiCardUrl}`}
            className="sent__twitter button--share"
            target="_blank"
            rel="noreferrer"
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
