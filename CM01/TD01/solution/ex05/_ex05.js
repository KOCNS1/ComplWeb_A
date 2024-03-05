"use strict";

const P1_SYMBOL = "O";
const P2_SYMBOL = "X";

const gameContainer = document.querySelector("#game-container");
const playerTurnName = document.querySelector("#player-turn-name");

let p1Name = "";
let p2Name = "";

let gridSize = 3;

let isP1Turn;

function getRandomBoolean() {
  return Math.random() < 0.5;
}

function promptInt(defaultValue = "") {
  let value;
  do {
    const input = parseInt(prompt("Please enter the grid size", defaultValue));
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

function promptName(title = "Please enter a player name", defaultValue = "") {
  let value;
  do {
    const input = prompt(title, defaultValue);
    if (!input) {
      alert("Please enter a valid name");
    } else {
      value = input;
    }
  } while (value === undefined);
  return value;
}

function handleClickCell(event) {
  playCell(event.target);
}

function playCell(cell) {
  if (cell.innerHTML.length === 0) {
    const char = isP1Turn ? P1_SYMBOL : P2_SYMBOL;
    cell.innerHTML = char;
    isP1Turn = !isP1Turn;
    cell.classList.add("played");
    generatePlayerTurnName();
    checkWin();
  }
}

function generatePlayerTurnName() {
  playerTurnName.innerHTML = isP1Turn
    ? `${p1Name} - ${P1_SYMBOL}`
    : `${p2Name} - ${P2_SYMBOL}`;
}

function newGame() {
  // Remove any eventual previous game data
  removeCellEvents();
  // Init game data
  gridSize = promptInt(gridSize);
  p1Name = promptName("Please enter Player 1's name", p1Name);
  p2Name = promptName("Please enter Player 2's name", p2Name);
  isP1Turn = getRandomBoolean();
  // Init table
  let contents = "<table><tbody>";
  for (let i = 0; i < gridSize; i++) {
    contents += "<tr>";
    for (let j = 0; j < gridSize; j++) {
      contents += "<td></td>";
    }
    contents += "</tr>";
  }
  contents += "</tbody></table>";
  gameContainer.innerHTML = contents;
  // Init table events
  gameContainer.querySelectorAll("td").forEach((cell) => {
    cell.addEventListener("click", handleClickCell);
  });
  generatePlayerTurnName();
}

function checkCellsHaveSameCaracter(cells) {
  let matchedCharacter;
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (cell.innerHTML == "") {
      return false;
    }
    if (matchedCharacter === undefined) {
      matchedCharacter = cell.innerHTML;
      continue;
    }
    if (matchedCharacter !== cell.innerHTML) {
      return false;
    }
  }
  return matchedCharacter;
}

function checkWin() {
  // Check rows
  const rows = document.querySelectorAll("#game-container table tr");
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.querySelectorAll("td");
    const matchedCharacter = checkCellsHaveSameCaracter(cells);
    if (matchedCharacter !== false) {
      return triggerWin(matchedCharacter);
    }
  }
  // Check columns
  for (let i = 0; i < gridSize; i++) {
    const cells = document.querySelectorAll(
      "#game-container table td:nth-child(" + (i + 1) + ")"
    );
    const matchedCharacter = checkCellsHaveSameCaracter(cells);
    if (matchedCharacter !== false) {
      return triggerWin(matchedCharacter);
    }
  }
  // Check diagonals
  //Top-Left to Bottom-Right
  const TLBR = [];
  //Bottom-Left to Top-Right
  const BLTR = [];
  for (let i = 0; i < gridSize; i++) {
    TLBR.push(
      document.querySelector(
        `#game-container table tr:nth-child(${i + 1}) td:nth-child(${i + 1})`
      )
    );
    BLTR.push(
      document.querySelector(
        `#game-container table tr:nth-child(${gridSize - i}) td:nth-child(${
          i + 1
        })`
      )
    );
  }
  let matchedCharacter = checkCellsHaveSameCaracter(TLBR);
  if (matchedCharacter === false) {
    matchedCharacter = checkCellsHaveSameCaracter(BLTR);
  }
  if (matchedCharacter !== false) {
    return triggerWin(matchedCharacter);
  }
  // Check grid completely full
  const allCells = document.querySelectorAll("#game-container table tr td");
  let gridFull = true;
  console.log(allCells);
  for (let i = 0; i < allCells.length; i++) {
    console.log(allCells[i].innerHTML);
    if (allCells[i].innerHTML === "") {
      gridFull = false;
      break;
    }
  }
  if (gridFull) {
    triggerTie();
  }
}

function triggerTie() {
  playerTurnName.innerHTML = "";
  alert("This game is a tie!");
  removeCellEvents();
}

function triggerWin(winnerCharacter) {
  playerTurnName.innerHTML = "";
  if (winnerCharacter === P1_SYMBOL) {
    alert(`Winner is ${p1Name}!`);
  } else {
    alert(`Winner is ${p2Name}!`);
  }
  removeCellEvents();
}

function removeCellEvents() {
  // Remove all events on the cells to prevent further gameplay
  gameContainer.querySelectorAll("td").forEach((cell) => {
    cell.removeEventListener("click", handleClickCell);
    cell.classList.add("played");
  });
}

document.querySelector("#new-game").addEventListener("click", newGame);

newGame();
