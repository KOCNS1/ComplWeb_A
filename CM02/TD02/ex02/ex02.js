"use strict";

document.querySelector("main").addEventListener("click", (event) => {
  logEvent("Click event caught on MAIN");
});

document.querySelector("#outer-div").addEventListener("click", (event) => {
  logEvent("Click event caught on DIV");
});

document.querySelector("#main-button").addEventListener("click", (event) => {
  logEvent("Click event caught on BUTTON");
});
