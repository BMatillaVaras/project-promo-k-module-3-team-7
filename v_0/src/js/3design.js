const checkBlue = document.querySelector(".js-checkedBlue");
const checkRed = document.querySelector(".js-checkedRed");
const checkGrey = document.querySelector(".js-checkedGrey");
const border = document.querySelector(".js-border");
const nameCard = document.querySelector(".js__name--Card");
const social = document.querySelectorAll(".js-socialLogos");
checkRed.addEventListener("change", (e) => {
  if (e.target.checked) {
    border.style.borderLeft = "5px solid #420101";
    nameCard.style.color = "#bd1010";
    for (let i = 0; i < social.length; i++) {
      social[i].style.border = "2px solid #e95626";
      social[i].style.color = "#420101";
    }
  }
});
checkBlue.addEventListener("change", (e) => {
  if (e.target.checked) {
    border.style.borderLeft = "5px solid #114e4e";
    nameCard.style.color = "#438792";
    for (let i = 0; i < social.length; i++) {
      social[i].style.border = "2px solid #438792";
      social[i].style.color = "#114e4e";
    }
  }
});
checkGrey.addEventListener("change", (e) => {
  if (e.target.checked) {
    border.style.borderLeft = "5px solid #3e5b65";
    nameCard.style.color = "#eab052";
    for (let i = 0; i < social.length; i++) {
      social[i].style.border = "2px solid #a0c0cf";
      social[i].style.color = "#3e5b65";
    }
  }
});
