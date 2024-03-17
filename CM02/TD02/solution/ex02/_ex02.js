"use strict";

// Méthode stopPropagation (La meilleure solution en soi)

/*document.querySelector("main").addEventListener("click", (event) => {
  logEvent("Click event caught on MAIN");
  event.stopPropagation();
});
document.querySelector("#outer-div").addEventListener("click", (event) => {
  logEvent("Click event caught on DIV");
  event.stopPropagation();
});
document.querySelector("#main-button").addEventListener("click", (event) => {
  logEvent("Click event caught on BUTTON");
  event.stopPropagation();
});*/

// Méthode plus créative (mais pas forcément plus juste) avec le preventDefault();
// Cette méthode montre cependant que l'objet event qui se propage est le même,
// et peut dans certaines mesures transporter de l'information

document.querySelector("main").addEventListener("click", (event) => {
  if (!event.defaultPrevented) {
    logEvent("Click event caught on MAIN");
  }
});
document.querySelector("#outer-div").addEventListener("click", (event) => {
  if (!event.defaultPrevented) {
    logEvent("Click event caught on DIV");
    event.preventDefault();
  }
});
document.querySelector("#main-button").addEventListener("click", (event) => {
  logEvent("Click event caught on BUTTON");
  event.preventDefault();
});
