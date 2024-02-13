"use strict";

const cells = document.querySelectorAll(".cell:not(#cell-free)");
const rollerResult = document.querySelector("#roller-result");

const BINGO_MIN_VALUE = 1;
const BINGO_MAX_VALUE = 30;

let winAlertDisplayed = false;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initBingoTable() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("active", "match");
    cells[i].innerHTML = getRandomInt(BINGO_MIN_VALUE, BINGO_MAX_VALUE);
  }
  document.querySelector("#cell-free").classList.remove("match");
  winAlertDisplayed = false;
}

function playNumber(number) {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == number) {
      cells[i].classList.add("active");
    }
  }
}

function rollNumber() {
  const randomNumber = getRandomInt(BINGO_MIN_VALUE, BINGO_MAX_VALUE);
  rollerResult.innerHTML = randomNumber;
  playNumber(randomNumber);
  if (checkWinCondition() && !winAlertDisplayed) {
    alert("BINGO!");
    winAlertDisplayed = true;
  }
}

function checkWinCondition() {
  let win = false;
  const rows = document.querySelectorAll("#bingo-table tbody tr");
  const columnsPerRow = rows[0].children.length;
  // Check lines
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].querySelectorAll(".cell:not(.active)").length > 0) {
      // Au moins une cellulle n'a pas la classe "active". Ce n'est donc pas gagné
      continue;
    } else {
      win = true;
      const cells = rows[i].querySelectorAll("td");
      for (let j = 0; j < cells.length; j++) {
        cells[j].classList.add("match");
      }
    }
  }
  // Check columns
  for (let i = 0; i < columnsPerRow; i++) {
    const cellsNotActive = document.querySelectorAll(
      "#bingo-table tbody tr td:nth-child(" + (i + 1) + "):not(.active)"
    );
    if (cellsNotActive.length > 0) {
      // Au moins une cellulle n'a pas la classe "active". Ce n'est donc pas gagné
      continue;
    } else {
      win = true;
      const cells = document.querySelectorAll(
        "#bingo-table tbody tr td:nth-child(" + (i + 1) + ")"
      );
      for (let j = 0; j < cells.length; j++) {
        cells[j].classList.add("match");
      }
    }
  }
  // Check diagonals
  // Cellules Top-Left -> Bottom-Right
  const cellsTLBR = document.querySelectorAll(
    "#cell-1, #cell-7, #cell-free, #cell-18, #cell-24"
  );
  let TLBRWin = true;
  for (let i = 0; i < cellsTLBR.length; i++) {
    if (!cellsTLBR[i].classList.contains("active")) {
      TLBRWin = false;
    }
  }
  if (TLBRWin) {
    // Tous les enfants ont la classe active, c'est donc gagné
    win = true;
    for (let i = 0; i < cellsTLBR.length; i++) {
      cellsTLBR[i].classList.add("match");
    }
  }
  // Cellules Bottom-Left -> Top-Right
  const cellsBLTR = document.querySelectorAll(
    "#cell-20, #cell-16, #cell-free, #cell-9, #cell-5"
  );
  let BLTRWin = true;
  for (let i = 0; i < cellsBLTR.length; i++) {
    if (!cellsBLTR[i].classList.contains("active")) {
      BLTRWin = false;
    }
  }
  if (BLTRWin) {
    // Tous les enfants ont la classe active, c'est donc gagné
    win = true;
    for (let i = 0; i < cellsBLTR.length; i++) {
      cellsBLTR[i].classList.add("match");
    }
  }

  return win;
}

document.querySelector("#generate").addEventListener("click", initBingoTable);
document.querySelector("#play-number").addEventListener("click", rollNumber);

initBingoTable();
