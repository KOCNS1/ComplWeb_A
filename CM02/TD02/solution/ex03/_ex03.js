"use strict";

const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (event) => {
  cursor.style.top = event.clientY + "px";
  cursor.style.left = event.clientX + "px";
});
