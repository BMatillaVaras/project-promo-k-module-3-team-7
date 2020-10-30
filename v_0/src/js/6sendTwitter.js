const buttonShare = document.querySelector(".js-btn--create");
const twitterContainer = document.querySelector(".js-twitterContainer");
const shareTwitter = document.querySelector(".js-section__link--share");
const linkShare = document.querySelector(".link--share");
const buttonTwitter = document.querySelector(".button--share");

function sendRequest() {
  const dataForTwitter = {
    photo: data.profileImg,
    name: data.fullName,
    email: data.mail,
    github: data.github,
    job: data.job,
    linkedin: data.linkedin,
  };
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(dataForTwitter),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  const linkShare = document.querySelector(".link--share");
  if (result.success) {
    linkShare.innerHTML =
      '<a class="link--share" href=' +
      result.cardURL +
      ">" +
      result.cardURL +
      "</a>";
  } else {
    linkShare.innerHTML = "ERROR:" + result.error;
  }
}

function createTwitterLink(result) {
  const buttonTwitter = document.querySelector(".button--share");
  const twitterText = encodeURIComponent(
    "¡He creado mi tarjeta con star coding labs profile cards!"
  );
  const twitterURL = document.querySelector(".link--share").href;
  buttonTwitter.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${twitterURL}`;
}

function showLinkSection() {
  twitterContainer.classList.remove("hidden");
  shareTwitter.classList.remove("hidden--border");
  buttonShare.classList.add("change-button");
}

buttonShare.addEventListener("click", showLinkSection);
buttonShare.addEventListener("click", sendRequest);
buttonTwitter.addEventListener("click", createTwitterLink);
