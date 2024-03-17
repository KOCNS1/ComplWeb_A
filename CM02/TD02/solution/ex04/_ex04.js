"use strict";
const eevee = document.querySelector("#play-box img");
let goUp = false;
let goDown = false;
let goRight = false;
let goLeft = false;

const GAME_LOOP_INTERVAL = 10;
const EEVEE_SPEED = 5;

let gameLoopIntervalRef = null;

const createGameLoop = () => {
  if (!gameLoopIntervalRef) {
    gameLoopIntervalRef = setInterval(() => {
      if (goUp) {
        eevee.style.top = parseInt(eevee.style.top || 0) - EEVEE_SPEED + "px";
      }
      if (goDown) {
        eevee.style.top = parseInt(eevee.style.top || 0) + EEVEE_SPEED + "px";
      }
      if (goRight) {
        eevee.style.left = parseInt(eevee.style.left || 0) + EEVEE_SPEED + "px";
      }
      if (goLeft) {
        eevee.style.left = parseInt(eevee.style.left || 0) - EEVEE_SPEED + "px";
      }
    }, GAME_LOOP_INTERVAL);
  }
};

const removeGameLoop = () => {
  if (gameLoopIntervalRef) {
    clearInterval(gameLoopIntervalRef);
    gameLoopIntervalRef = null;
  }
};

window.addEventListener("keydown", (event) => {
  if (gameLoopIntervalRef === null) {
    createGameLoop();
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    goUp = true;
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    goDown = true;
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    goRight = true;
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goLeft = true;
  }
});

window.addEventListener("keyup", (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (event.key === "ArrowUp") {
    goUp = false;
  }
  if (event.key === "ArrowDown") {
    goDown = false;
  }
  if (event.key === "ArrowLeft") {
    goLeft = false;
  }
  if (event.key === "ArrowRight") {
    goRight = false;
  }
  if (!goUp && !goDown && !goLeft && !goRight) {
    removeGameLoop();
  }
});
