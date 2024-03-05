/**
 * 🚨 CE FICHIER NE DOIT PAS ETRE MODIFIE 🚨
 * Il contient les fonctions à appeler pour récupérer les données
 * comme si cela provenait d'une API. Vous disposez de deux fonctions
 * qui effectuent la même chose, mais retournent les données de façon
 * différente.
 *
 * La première fonction getInstructionsCb() retourne les données en
 * appelant un callback passé en argument de la fonction.
 *
 * La deuxième fonction getInstructionPromise() retourne une promesse
 * qui se résoudra avec les données
 */

// Changez cette valeur à true pour simuler des cas d'erreur aléatoires
const TRIGGER_RANDOM_ERRORS = false;

// l'argument "food" peut prendre l'une des valeurs suivantes:
// "mashedPotatoes" | "steak" | "brusselSprouts" | "brocoli"
function getInstructionCb(food, step, callback, errorCallback) {
  setTimeout(() => {
    // Handle random errors
    if (TRIGGER_RANDOM_ERRORS && getRandomInt(1, 100) > 75) {
      errorCallback(`An error occured while getting step ${step + 1}`);
    }
    // Get the instruction string
    let instruction;

    if (food === "mashedPotatoes") {
      instruction = mashedPotatoes[step];
    } else if (food === "steak") {
      instruction = steak[step];
    } else if (food === "brusselsSprouts") {
      instruction = brusselsSprouts[step];
    } else if (food === "broccoli") {
      instruction = broccoli[step];
    }

    // Invoke the provided callback or errorCallback
    if (!instruction) {
      errorCallback(`Instruction ${step + 1} does not exist!`);
    } else {
      callback(instruction);
    }
  }, Math.floor(Math.random() * 1000));
}

function getInstructionPromise(food, step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Handle random errors
      if (TRIGGER_RANDOM_ERRORS && getRandomInt(1, 100) > 75) {
        reject(`An error occured while getting step ${step + 1}`);
      }
      // Get the instruction string
      let instruction;

      if (food === "mashedPotatoes") {
        instruction = mashedPotatoes[step];
      } else if (food === "steak") {
        instruction = steak[step];
      } else if (food === "brusselsSprouts") {
        instruction = brusselsSprouts[step];
      } else if (food === "broccoli") {
        instruction = broccoli[step];
      }

      // Resolve or reject the promise
      if (!instruction) {
        reject(`Instruction ${step + 1} does not exist!`);
      } else {
        resolve(instruction);
      }
    }, Math.floor(Math.random() * 1000));
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
