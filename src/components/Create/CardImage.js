import React from "react";

class CardImage extends React.Component {
  constructor(props) {
    super(props);
    this.handleCardImg = this.handleCardImg.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fakeClick = this.fakeClick.bind(this);
    this.fileInput = React.createRef();
    this.fr = new FileReader();
  }

  writeImage() {
    const url = this.fr.result;
    this.props.handleInputChange("img", url);
  }

  handleCardImg() {
    const file = this.fileInput.current.files[0];
    this.fr.onload = this.writeImage;
    this.fr.readAsDataURL(file);
  }

  fakeClick() {
    this.fileInput.current.click();
  }

  render() {
    return (
      <>
        <label className="fill__label--img" htmlFor="img-selector">
          Imagen de perfil
        </label>
        <div className="fill__wrapper">
          <div className="action">
            <button
              className="action__upload-btn js__profile-trigger"
              type="button"
              title="Añadir imagen"
              onClick={this.fakeClick}
            >
              Añadir imagen
            </button>
            <input
              type="file"
              name="img-selector"
              id="img-selector"
              accept="image/png, image/jpeg"
              className="action__hiddenField js__profile-upload-btn"
              ref={this.fileInput}
              onChange={this.handleCardImg}
            />
          </div>
          <div className="profile">
            <div
              className="profile__preview js__profile-preview"
              id="previewImg"
              style={{ backgroundImage: `url(${this.props.img})` }}
            ></div>
          </div>
        </div>
      </>
    );
  }
}

export default CardImage;
