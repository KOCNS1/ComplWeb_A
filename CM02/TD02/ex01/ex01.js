"use strict";

const mainDiv = document.querySelector("#main-div");

const appendDiv = () => {
  mainDiv.innerHTML = mainDiv.innerHTML + "<div>Appended div!</div>";
};

mainDiv.querySelector("button").addEventListener("click", appendDiv);
