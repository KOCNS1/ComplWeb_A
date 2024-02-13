"use strict";

function getMax(num1, num2) {
  // Façon "manuelle et bancale" de faire la chose
  /*if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }*/

  // Façon plus simple en utilisant un opérateur ternaire
  // return num1 > num2 ? num1 : num2;

  // Utilisation de l'API native avec l'objet Math
  return Math.max(num1, num2);
}

function promptInt(message = "Please enter a number") {
  let value;
  do {
    value = parseInt(prompt(message));
    if (isNaN(value)) {
      alert("Please enter a valid number");
    }
  } while (isNaN(value));
  return value;
}

console.log(
  "Result",
  getMax(
    promptInt("Please enter the first number"),
    promptInt("Please enter the second number")
  )
);
