const image = document.querySelector("img");
const button = document.querySelector("button");

function loadImage(url, onSuccess) {
  image.addEventListener("load", onSuccess, { once: true });
  image.src = url;
}

button.addEventListener("click", () => {
  loadImage("https://placekitten.com/300/200", () => {
    alert("Image successfully loaded!");
  });
});
