"use strict";

const burgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".central-header");
const header = document.querySelector("nav");

burgerMenu.addEventListener("click", () => {
  console.log("Button clicked");
  menu.classList.remove("central-header");
  menu.classList.add("activate");
});

const headFixer = function (e) {
  console.log(e);
  console.log(window.scrollY);
  if (window.scrollY > 300) {
    header.classList.add('fixed');
  } else {
    return;
  }
}; 

headFixer();
