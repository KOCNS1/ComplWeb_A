"use strict";

function getFizzBuzzResult(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return number.toString();
  }
}

function promptInt() {
  let value;
  do {
    const input = parseInt(prompt("Please enter a number greater than 1"));
    if (isNaN(input)) {
      alert("Please enter a valid number");
    } else if (input <= 1) {
      alert("Please enter a number greater than 1");
    } else {
      value = input;
    }
  } while (value === undefined);
  return value;
}

function printSequentially() {
  for (let i = 1; i <= 100; i++) {
    console.log(getFizzBuzzResult(i));
  }
}

function printNEntriesAsArray() {
  const maxValue = promptInt();
  const result = [];
  for (let i = 1; i <= maxValue; i++) {
    result.push(getFizzBuzzResult(i));
  }
  console.log("Array Result", result);
}

printSequentially();
printNEntriesAsArray();
