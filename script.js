"use strict";
const botoon = document.querySelectorAll(".button");
const buttons = document.querySelector(".buttons");
const info = document.querySelectorAll(".information--paragraf");
buttons.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.classList.contains("button")) return;
  botoon.forEach((btn) => btn.classList.remove("button--active"));
  clicked.classList.add("button--active");
  info.forEach((info) =>
    info.classList.remove("information--paragraf--active")
  );
  const infobtn = document.querySelector(
    `.information--${clicked.dataset.btn}`
  );
  infobtn.classList.add("information--paragraf--active");
});
