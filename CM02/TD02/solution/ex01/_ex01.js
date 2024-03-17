"use strict";

const mainDiv = document.querySelector("#main-div");

const appendDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.innerText = "Appended div!";
  mainDiv.appendChild(newDiv);
};

mainDiv.querySelector("button").addEventListener("click", appendDiv);
