/**
 *
 * find a way to pass function 2 as a callback to function 1
 */
function func1(callback) {
  console.log("function1");
  callback();
}

function func2() {
  console.log("funct2");
}

/**
 * directions is an array of strings
 */
const directions = [
  "First turn left",
  "Take the second exist",
  "Turn right on Paris street",
  "Go ahead for 2 km",
  "Turn left on the first street",
  "Go ahead for 1 km",
  "You have reached your destination",
];

/**
 * @param {number} index
 * @param {function} callback
 * @param {function} errors
 * @returns {void}
 * @description This function will get the index of the directions and call the callback function
 * @example getDirectionsCb(0, () => console.log('done'), (err) => console.log(err))
 */
function getDirectionsCb(index, callback, errors) {
  setTimeout(() => {
    if (!directions[index]) errors("Instructions not found");
    else {
      console.log(directions[index]); // 0 // 1 // 2
      callback();
    }
  }, Math.floor(Math.random() * 1000) + 1);
}

// This is called Callback hell
// getDirectionsCb(
//   0,
//   () => {
//     getDirectionsCb(
//       1,
//       () => {
//         getDirectionsCb(
//           2,
//           () => {
//             getDirectionsCb(
//               3,
//               () => {
//                 getDirectionsCb(
//                   4,
//                   () => {},
//                   (err) => console.log(err)
//                 );
//               },
//               (err) => console.log(err)
//             );
//           },
//           (err) => console.log(err)
//         );
//       },
//       (err) => console.log(err)
//     );
//   },
//   (err) => console.log(err)
// );

/**
 * @param {number} index
 * @returns {Promise<void>}
 * @description This function will get the index of the directions, log the direction and resolve the promise
 * @example getDirectionsPromise(0).then(() => console.log('done')).catch((err) => console.log(err))
 */
function getDirectionsPromise(index) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (!directions[index]) reject(false);
      else {
        console.log(directions[index]);
        resolve();
      }
    }, Math.floor(Math.random() * 1000) + 1);
  });
}

// getDirectionsPromise(0)
//   .then(() => getDirectionsPromise(1))
//   .then(() => getDirectionsPromise(2))
//   .then(() => getDirectionsPromise(3))
//   .then(() => getDirectionsPromise(4)) // This will reject
//   .then(() => getDirectionsPromise(5)) // This will get skip because we rejected in the past
//   .then(() => getDirectionsPromise(6)) // This will get skip because we rejected in the past
//   .then(() => getDirectionsPromise(7)) // This will get skip because we rejected in the past
//   .catch((error) => console.log(error)); // Takes as an argument whatever is inside reject()

/**
 * @param {number} index
 * @returns {Promise<string>}
 * @description This function will get the index of the directions and resolve the promise with the direction
 * @example getDirections(0).then((value) => console.log(value)).catch((err) => console.log(err))
 */
function getDirections(index) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (!directions[index]) reject(false);
      else {
        resolve(directions[index]); // return/sends the value inside of resolve (this will get send to the .then function)
      }
    }, Math.floor(Math.random() * 1000) + 1);
  });
}

// getDirections(0).then((value) => {
//   console.log(value);
//   getDirections(1).then((value) => {
//     console.log(value);
//     getDirections(2).then((value) => {
//       console.log(value);
//       getDirections(3).then((value) => {
//         console.log(value);
//         getDirections(4)
//           .then((value) => console.log(value))
//           .catch((err) => console.log(err));
//       });
//     });
//   });
// });

/**
 * ! Promise.all allows us to exectute all the promises at the same time.
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("foo"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1337), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ name: "Bob" }), 4000);
});

Promise.all([p1, p2, p3]).then((value) => console.log(value));

// const all = Promise.all([
//   getDirections(0),
//   getDirections(1),
//   getDirections(2),
//   getDirections(3),
//   getDirections(4),
//   getDirections(5),
//   getDirections(6),
// ])
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err));

/**
 * * Async / Await syntax
 */

// async function getInstructions() {
//   try {
//     await getDirections2(0);
//     await getDirections2(1);
//     await getDirections2(2);
//     await getDirections2(3);
//     await getDirections2(4);
//     await getDirections2(5);
//     console.log('first'); // This this gets skiped
//   } catch (err) {
//     alert(err);
//   }
// }

// getInstructions();

async function getInstructionsAsync() {
  try {
    let res1 = await getDirections(0);
    console.log(res1);
    let res2 = await getDirections(1);
    console.log(res2);
    await getDirections(2);
    let res3 = await getDirections(2);
    console.log(res3);
    await getDirections(3);
    let res4 = await getDirections(3);
    console.log(res4);
    await getDirections(4);
  } catch (err) {
    console.log("STOPP ! THERE IS AN ISSUE");
  }
}

// getInstructions2();

/**
 * Fetch a random dog image from the dog.ceo API
 * Display the image on the page using the DOM on click of a button
 */
const img = document.createElement("img");
img.width = 500;

// function getFetch() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => res.json())
//     .then((dog) => {
//       console.log(dog.message);
//       img.src = dog.message;
//       document.body.append(img);
//     });
// }

// const btn = document.querySelector("button");
// console.log(btn);
// btn.onclick = () => {
//   getFetch();
// };
