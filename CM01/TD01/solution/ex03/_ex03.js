"use strict";

const link = document.querySelector("a[href='https://www.google.com/']");

function getGoogleSearchUrl(searchTerm) {
  return "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
}

function openGoogleSearch(searchTerm) {
  location.href = getGoogleSearchUrl(searchTerm);
}

link.addEventListener("click", function (event) {
  // Empêcher le lien d'effectuer son action par défaut (ouvrir le href ici)
  // event.preventDefault();
  const searchTerm = prompt("Please enter a search term");
  alert("We'll redirect you to your search results in 5 seconds");
  setTimeout(function () {
    openGoogleSearch(searchTerm);
  }, 5000);
});
