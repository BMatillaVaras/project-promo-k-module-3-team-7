import React from "react";
import Info from "./Info";
import "../../stylesheets/layout/_fill.scss";

class Fill extends React.Component {
  render() {
    return (
      <article className="border">
        <Info icon="fa-keyboard-o" title="Rellena"></Info>
        <form
          action=""
          method="post"
          className="fill js__display js__displayNone js__show"
        >
          <label htmlFor="fullName" className="fill__label">
            Nombre completo
            </label>
          <input
            className="fill__input js-fill__input"
            placeholder="Ej: Barry Allen"
            id="fullName"
            type="text"
            name="fullName"
            required
          />
          <label htmlFor="job" className="fill__label">
            Puesto
            </label>
          <input
            className="fill__input js-fill__input"
            placeholder="Ej: The fastest man alive"
            id="job"
            type="text"
            name="job"
            required
          />
          <label className="fill__label--img" htmlFor="img-selector">
            Imagen de perfil
            </label>
          <div className="fill__wrapper">
            <div className="action">
              <button
                className="action__upload-btn js__profile-trigger"
                type="button"
                title="Añadir imagen"
              >
                Añadir imagen
                </button>
              <input
                type="file"
                name="img-selector"
                id="img-selector"
                accept="image/png, image/jpeg"
                className="action__hiddenField js__profile-upload-btn"
              />
            </div>
            <div className="profile">
              <div
                className="profile__preview js__profile-preview"
                id="previewImg"
              ></div>
            </div>
          </div>
          <label htmlFor="mail" className="fill__label">
            Email
            </label>
          <input
            className="fill__input js-fill__input"
            id="mail"
            type="email"
            name="emailaddress"
            placeholder="Ej: barryAllen@gmail.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <label htmlFor="telephone" className="fill__label">
            Teléfono
            </label>
          <input
            className="fill__input js-fill__input"
            id="telephone"
            type="tel"
            name="telephone"
            placeholder="Ej: 555-55-55-55"
            pattern="[0-9]{9}"
          />
          <label htmlFor="Linkedin" className="fill__label">
            Linkedin
            </label>
          <input
            className="fill__input js-fill__input"
            id="linkedin"
            type="text"
            name="Linkedin"
            placeholder="Ej: linkedin.com/in/barryAllen.hill"
            required
          />
          <label htmlFor="Github" className="fill__label">
            Github
            </label>
          <input
            className="fill__input js-fill__input"
            id="github"
            type="text"
            name="Github"
            placeholder="Ej: @Barry-Allen"
            pattern="@[A-Za-z][0-9]{1,}"
            required
          />
        </form>
      </article >
    )
  }
}

export default Fill;