const inputList = document.querySelectorAll(".js-fill__input");
let data = {
  fullName: "",
  job: "",
  profileImg: "",
  mail: "",
  telephone: "",
  linkedin: "",
  github: "",
};

const saveField = function (event) {
  data[event.currentTarget.id] = event.currentTarget.value;
  setLocalStorage();
  render();
};

function render(event) {
  document.querySelector("#js-fullName-card").innerHTML =
    data.fullName || "Barry Allen - Flash";
  document.querySelector("#js-job-card").innerHTML =
    data.job || "The Fastest Men Alive";
  document.querySelector("#profileImg").style = `background-image:url(${
    data.profileImg || "./assets/images/Flash.png"
  })`;
  const preview = document.querySelector("#previewImg");
  preview.style = `background-image:url(${
    data.profileImg || "./assets/images/Flash.png"
  })`;
  document.querySelector("#js-telephone-card").href = data.telephone || "#";
  document.querySelector("#js-mail-card").href = data.mail || "#";
  document.querySelector("#js-linkedin-card").href = data.linkedin || "#";
  document.querySelector("#js-github-card").href = data.github || "#";
  document.querySelector(".js-design__colors");
}

for (const eachElement of inputList) {
  eachElement.addEventListener("input", saveField);
}

//////link twitter share

const shareLink = document.querySelector(".js-link");
const btnTwitter = document.querySelector(".js-share");
const clickShare = document.querySelector(".js-share__button");
const openTwitter = function (event) {
  event.preventDefault();
  shareLink.classList.add("js__show");
  clickShare.classList.add("shareSent");
  setLocalStorage();
};
btnTwitter.addEventListener("click", openTwitter);

const btnReset = document.querySelector(".js-sectionOneBtn");

function resetForm() {
  for (const input of inputList) {
    input.value = "";
  }
  data.fullName = "";
  data.job = "";
  data.profileImg = "";
  data.telephone = "";
  data.mail = "";
  data.linkedin = "";
  data.github = "";
  render();
  document.querySelector("#profileImg").style =
    data.profileImg || "background-image:url(./assets/images/Flash.png)";
  const preview = document.querySelector("#previewImg");

  if (preview !== data.previewImg) {
    profilePreview.classList.remove("eatMe");
    preview.style = "";
  }

  border.style.borderLeft = "5px solid #438792";
  nameCard.style.color = "#114e4e";
  for (let i = 0; i < social.length; i++) {
    social[i].style.border = "2px solid  #a2deaf";
    social[i].style.color = "#114e4e";
  }
}

btnReset.addEventListener("click", resetForm);
render();
