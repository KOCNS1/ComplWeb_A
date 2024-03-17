"use strict";

// Constants
const INTERVAL_TIME = 3 * 1000;
const elementGallery = document.getElementById("gallery");
const elementImages = document.querySelectorAll(
  "#gallery .thumbnails .image-container img"
);
const elementMainImage = document.querySelector(
  "#gallery .main-picture-container img"
);
const elementDescription = document.querySelector(
  "#gallery .main-picture-container .description"
);
const elementFullScreenContainer = document.querySelector(
  ".full-screen-container"
);

// Variables
let selectedIndex = 0;
let intervalRef = null;
let isFullScreen = false;

// Set the focus of an image
const focusImage = (index) => {
  selectedIndex = index;
  elementMainImage.setAttribute(
    "src",
    elementImages[index].getAttribute("src")
  );
  elementDescription.innerText = elementImages[index].getAttribute("alt");
  document
    .querySelector("#gallery .thumbnails .image-container img.active")
    .classList.remove("active");
  elementImages[index].classList.add("active");
  elementImages[index].scrollIntoView();
};

// Thumbnail click handler script
elementImages.forEach((image, index) => {
  image.addEventListener("click", () => focusImage(index));
});

// Prev/Next image script handlers
const selectPreviousImage = () => {
  if (selectedIndex === 0) {
    focusImage(elementImages.length - 1);
  } else {
    focusImage(selectedIndex - 1);
  }
};

const selectNextImage = () => {
  if (selectedIndex === elementImages.length - 1) {
    focusImage(0);
  } else {
    focusImage(selectedIndex + 1);
  }
};

// Back/Next button handlers
document
  .getElementById("back-btn")
  .addEventListener("click", selectPreviousImage);
document.getElementById("next-btn").addEventListener("click", selectNextImage);

// Left/Right arrow key handler
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    selectNextImage();
  }
  if (event.key === "ArrowLeft") {
    selectPreviousImage();
  }
});

// Interval handlers
const createCycleInterval = () => {
  if (intervalRef === null && !isFullScreen) {
    console.log("cycle created");
    intervalRef = setInterval(selectNextImage, INTERVAL_TIME);
  }
};

const removeCycleInterval = () => {
  if (intervalRef !== null) {
    console.log("cycle removed");
    clearInterval(intervalRef);
    intervalRef = null;
  }
};

// Apply interval by default
createCycleInterval();

// MouseEnter/MouseLeave events
elementGallery.addEventListener("mouseenter", removeCycleInterval);
elementGallery.addEventListener("mouseleave", createCycleInterval);

// Fullscreen click handler
elementFullScreenContainer.addEventListener("click", () => {
  isFullScreen = false;
  elementFullScreenContainer.innerHTML = "";
  createCycleInterval();
  document.body.style.overflow = "auto";
});
elementMainImage.addEventListener("click", () => {
  isFullScreen = true;
  const clonedNode = elementMainImage.cloneNode();
  elementFullScreenContainer.appendChild(clonedNode);
  removeCycleInterval();
  document.body.style.overflow = "hidden";
});
