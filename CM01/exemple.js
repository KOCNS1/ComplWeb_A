function hello() {
  let toto = "toto";
}

// const div = document.getElementById("div1");
const div = document.querySelector("#div1");

// const div = document.getElementsByName("div");
// const div = document.getElementsByTagName("div");
// div.innerHTML = `<script>alert("hello")</script>`;

const handleclick = () => {
  console.log("clicked");
};

div.addEventListener("click", handleclick);

div.removeEventListener("click", handleclick);

// div.onclick = () => {
//   console.log("clicked");
// };

console.log(div);

// const hello = function hello() {
//   let toto = "toto";
//   return toto;
// };

// const hello = () => {
//   let toto = "toto";
//   return toto;
// };

// const hello = () => "toto";

// const sum = (a, b) => a + b;

// export const obj = {
//   hello: function hello() {
//     //this // function hello
//     let toto = "toto";
//   },
//   toto: () => {
//     this; // const obj
//     let toto = "toto";
//   },
// };

const falsy = [0, false, !true, null, undefined, ""];
