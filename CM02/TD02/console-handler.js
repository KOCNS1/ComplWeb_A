"use strict";

// This script creates a "console-like" element in your DOM
// and is capable of logging events through the use of the
// function "logEvent"

// Create important DOM elements
(() => {
  // Create console contents
  const divWrapper = document.createElement("div");
  const legendItem = document.createElement("legend");
  legendItem.innerHTML = "Console:";
  const preItem = document.createElement("pre");
  preItem.id = "console";
  divWrapper.appendChild(legendItem);
  divWrapper.appendChild(preItem);

  // Append console contents to body at current position
  document.body.appendChild(divWrapper);

  // Add stylesheets
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "console-handler.css";
  document.head.appendChild(link);
})();

// Add relevant events
const htmlConsole = document.querySelector("#console");

const getCurrentTimestamp = () => {
  const padNumber = (num, padder = 2) => num.toString().padStart(padder, "0");
  const d = new Date();
  return `${padNumber(d.getHours())}:${padNumber(d.getMinutes())}:${padNumber(
    d.getSeconds()
  )}.${padNumber(d.getMilliseconds(), 3)}`;
};

const logEvent = (text) => {
  const consoleItem = document.createElement("div");
  consoleItem.innerHTML = `${getCurrentTimestamp()} - ${text}`;
  htmlConsole.appendChild(consoleItem);
  htmlConsole.scrollTop = htmlConsole.scrollHeight;
};
