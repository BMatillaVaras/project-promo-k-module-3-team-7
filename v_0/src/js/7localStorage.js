function setLocalStorage() {
  console.log("set local storage");
  localStorage.setItem("data", JSON.stringify(data));
}

function getFromLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem("data")) || data;
  data = savedData;
  rePaintInput();
  render();
}

function rePaintInput() {
  document.querySelector("#fullName").value = data.fullName;
  document.querySelector("#job").value = data.job;
  document.querySelector("#mail").value = data.mail;
  document.querySelector("#telephone").value = data.telephone;
  document.querySelector("#linkedin").value = data.linkedin;
  document.querySelector("#github").value = data.github;
  if (data.profileImg) {
    document.querySelector(
      "#profileImg"
    ).style.backgroundImage = `url(${data.profileImg})`;
    document.querySelector(
      "#previewImg"
    ).style.backgroundImage = `url(${data.profileImg})`;
  }
}
getFromLocalStorage();
