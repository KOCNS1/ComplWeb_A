function addInstruction(food, instruction) {
  const li = document.createElement("li");
  li.innerText = instruction;
  document.querySelector(`#${food} ol`).appendChild(li);
}

function addInstructionError(
  food,
  errorText = "An error occured while getting this instruction 😒"
) {
  const li = document.createElement("li");
  li.innerText = errorText;
  li.classList.add("error");
  document.querySelector(`#${food} ol`).appendChild(li);
}

/**
 * EXERCICE 1
 * Cette fonction va imprimer les instructions de la recette dans le mauvais
 * ordre. Refactorez cette fonction en faisant usage des callbacks pour
 * faire en sorte que les instructions soient imprimées toujours dans le
 * bon ordre. Corrigez par ailleurs la ligne d'erreur qui apparaît
 * systématiquement sur cette recette.
 */
function ex01() {
  getInstructionCb(
    "mashedPotatoes",
    0,
    (instruction) => addInstruction("mashedPotatoes", instruction),
    (error) => addInstructionError("mashedPotatoes", error)
  );
  getInstructionCb(
    "mashedPotatoes",
    1,
    (instruction) => addInstruction("mashedPotatoes", instruction),
    (error) => addInstructionError("mashedPotatoes", error)
  );
  getInstructionCb(
    "mashedPotatoes",
    2,
    (instruction) => addInstruction("mashedPotatoes", instruction),
    (error) => addInstructionError("mashedPotatoes", error)
  );
  getInstructionCb(
    "mashedPotatoes",
    3,
    (instruction) => addInstruction("mashedPotatoes", instruction),
    (error) => addInstructionError("mashedPotatoes", error)
  );
  getInstructionCb(
    "mashedPotatoes",
    4,
    (instruction) => addInstruction("mashedPotatoes", instruction),
    (error) => addInstructionError("mashedPotatoes", error)
  );
  getInstructionCb(
    "mashedPotatoes",
    5,
    (instruction) => addInstruction("mashedPotatoes", instruction),
    (error) => addInstructionError("mashedPotatoes", error)
  );
}

/**
 * EXERCICE 2
 * Cette fonction va remplir les instructions de préparation d'un
 * steak. Utilisez la fonction "getInstructionPromise", et faites
 * usage de la syntaxe .then()
 */
function ex02() {
  // TODO Implement this function
  addInstructionError("steak", "Not implemented yet");
}

/**
 * EXERCICE 3
 * Cette fonction va remplir les instructions de préparation de
 * choux de Bruxelles. Utilisez la fonction "getInstructionPromise",
 * et faites usage de la syntaxe async/await
 */
async function ex03() {
  // TODO Implement this function
  addInstructionError("brusselsSprouts", "Not implemented yet");
}

/**
 * EXERCICE 4
 * Cette fonction va remplir les instructions de préparation du
 * broccoli. Utilisez la fonction "getInstructionPromise", et faites
 * usage de la fonction Promise.all()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * BONUS: Faites la même chose avec la gestion d'erreur "par ligne"
 * avec la fonction Promise.allSettled()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
 */
function ex04() {
  // TODO Implement this function
  addInstructionError("broccoli", "Not implemented yet");
}

// Execute functions
ex01();
ex02();
ex03();
ex04();
