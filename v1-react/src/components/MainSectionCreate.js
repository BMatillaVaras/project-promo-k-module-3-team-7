import React from "react";
import "../stylesheets/layout/_mainSectionCreate.scss";

class MainSectionCreate extends React.Component {
  render() {
    return (
      <section className="colapsableForm">
        <article className="border">
          <div className="info">
            <i className="fa fa-object-ungroup info__icons"></i>
            <h2 className="info__formTitle">Diseña</h2>
            <i className="fa fa-angle-up info__rotate js__rotate js__designRotate"></i>
          </div>
          <div className="design js__display js__displayNone js__show">
            <h3 className="design__title">Colores</h3>
            <div>
              {/* <!--Checkbox1--> */}
              <div className="design__colors js-design__colors blue">
                <input
                  className="design__colors--check js-checkedBlue"
                  id="method1"
                  type="radio"
                  value="colors"
                  name="methods"
                />
                <div className="design__colors--box box1"></div>
                <div className="design__colors--box box2"></div>
                <div className="design__colors--box box3"></div>
              </div>
              {/* <!--Checkbox2--> */}
              <div className="design__colors js-design__colors red">
                <input
                  className="design__colors--check js-checkedRed"
                  id="method2"
                  type="radio"
                  value="colors"
                  name="methods"
                />
                <div className="design__colors--box box4"></div>
                <div className="design__colors--box box5"></div>
                <div className="design__colors--box box6"></div>
              </div>
              {/* <!--Checkbox3--> */}
              <div className="design__colors js-design__colors grey">
                <input
                  className="design__colors--check js-checkedGrey"
                  id="method3"
                  type="radio"
                  value="colors"
                  name="methods"
                />
                <div className="design__colors--box box7"></div>
                <div className="design__colors--box box8"></div>
                <div className="design__colors--box box9"></div>
              </div>
            </div>
          </div>
        </article>

        <article className="border">
          <div className="info">
            <i className="fa fa-keyboard-o info__icons"></i>
            <h2 className="info__formTitle">Rellena</h2>
            <i
              className="fa fa-angle-up info__rotate js__rotate js__fillRotate"
              title="Despliega RELLENA"
            ></i>
          </div>
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
        </article>
        <article className="border">
          <div className="info">
            <i className="fa fa-share-alt info__icons"></i>
            <h2 className="info__formTitle">Comparte</h2>
            <i className="fa fa-angle-up info__rotate js__rotate js__shareRotate"></i>
          </div>
          <div className="js-section__link--share share js__display js__displayNone js-share js-btn--create">
            <i className="fa fa-address-card-o share__icon"></i>
            <button className="share__button js-share__button" type="button">
              Crear tarjeta
            </button>
          </div>
        </article>
        <div className="border sent js__displayNone js-link js-twitterContainer js__show">
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
      </section>
    );
  }
}

export default MainSectionCreate;
