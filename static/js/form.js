"use strict";

const formSender = document.querySelector("#form-sender");

const inpName = document.querySelector("#name");
const inpemail = document.querySelector("#email");
const inptxt = document.querySelector("#txt");

formSender.addEventListener("click", display);

function display() {
  console.log(inpName.value);
  console.log(inpemail.value);
  console.log(inptxt.value);
  alert("Name: " + inpName.value + 'email: ' + inpemail.value + "Inpute Txt: " + inptxt.value)
}
