"use strict";

// HTML Nodes
const form = document.querySelector("form");
const allFormItems = form.querySelectorAll(":scope > label");

// Gets the root element of a form item based on the "for"
// attribute of its label element
const getFormItemRoot = (name) => {
  return document.querySelector(`label[for='${name}']`);
};

// Checks if a supplied email is valid or not
const validateEmail = (email) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Checks if a postal code is valid
const validatePostalCode = (code) => {
  return code.match(/[0-9]{5}/);
};

// Gets the age based on a date
const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

// Returns an array of strings with descriptions of the problems
// found with a supplied password
const checkPasswordIssues = (password) => {
  const problems = [];
  if (!password.match(/(?=.*[A-Z])/)) {
    problems.push(
      "Le mot de passe doit contenir au moins 1 caractères majuscule"
    );
  }
  if (!password.match(/(?=.*[0-9])/)) {
    problems.push("Le mot de passe doit contenir au moins 1 chiffre");
  }
  if (!password.match(/(?=.{8,})/)) {
    problems.push("Le mot de passe doit faire 8 caractères minimum");
  }
  return problems;
};

// Checks if any kind of form item is valid
const validateFormItem = (name) => {
  // Get constants and reset field error message
  const root = getFormItemRoot(name);
  // Safety check
  if (!root) {
    throw new Error("Field " + name + " doesn't exist in this form");
  }
  // If the field is hidden, value is assumed valid
  if (root.style.display === "none") {
    return true;
  }
  const errorMsg = root.querySelector(".error-msg");
  errorMsg.innerText = "";
  // Do the check
  switch (name) {
    case "last-name":
    case "first-name":
    case "maiden-name":
    case "address":
    case "city":
      // Check if the input is not empty
      const valueText = root.querySelector("input").value;
      if (!valueText.trim()) {
        errorMsg.innerText = "Ce champ est obligatoire";
        return false;
      }
      return true;
    // Check if the value is a number
    case "postal-code":
      const valuePostalCode = root.querySelector("input").value;
      if (!validatePostalCode(valuePostalCode)) {
        errorMsg.innerText =
          "Le code postal doit contenir 5 chiffres exactement";
        return false;
      }
      return true;
    case "phone":
      const valueNumber = root.querySelector("input").value;
      if (isNaN(parseInt(valueNumber))) {
        errorMsg.innerText = "La valeur de ce champ n'est pas valide";
        return false;
      }
      return true;
    case "parent-email":
    case "email":
      // Check if the value is an email
      const valueMail = root.querySelector("input").value;
      if (!validateEmail(valueMail)) {
        errorMsg.innerText = "Veuillez saisir un e-mail valide";
        return false;
      }
      return true;
    case "password":
      // Check password requirements
      const valuePassword = root.querySelector("input").value;
      const passwordIssues = checkPasswordIssues(valuePassword);
      if (passwordIssues.length > 0) {
        errorMsg.innerText = passwordIssues.join(", ");
        return false;
      }
      return true;
    case "password-confirm":
      // Check if the confirm field matches the original
      const valuePasswordConfirm = root.querySelector("input").value;
      const originalValuePassword = document.querySelector(
        "input[name='password']"
      ).value;
      if (originalValuePassword !== valuePasswordConfirm) {
        errorMsg.innerText =
          "La confirmation de mot de passe ne correspond pas";
        return false;
      }
      return true;
    case "birth-date":
      // Checks if a valid date is supplied
      const valueDate = root.querySelector("input").value;
      const date = new Date(valueDate);
      if (!(date instanceof Date && !isNaN(date))) {
        errorMsg.innerText = "Veuillez saisir une date valide";
        return false;
      }
      return true;
    case "terms-accept":
      // Checks if the checkbox is checked
      const checkbox = root.querySelector("input:checked");
      if (checkbox === null) {
        errorMsg.innerText = "Veuillez accepter les termes avant de continuer";
        return false;
      }
      return true;
    case "gender":
      // Check if there's a value for the radio button
      const gender = root.querySelector("input:checked");
      if (gender === null) {
        errorMsg.innerText = "Veuillez spécifier votre sexe";
        return false;
      }
      return true;
    case "comments":
    case "civil-status":
      // No checks required for this field
      return true;
    default:
      console.warn("No check for field", name);
      return true;
  }
};

// Update form fields
const updateFormFields = () => {
  // Check for maiden name
  const maidenNameRoot = getFormItemRoot("maiden-name");
  const civilStatusRoot = getFormItemRoot("civil-status");
  const civilStatusValue = civilStatusRoot.querySelector("select").value;
  if (civilStatusValue === "maried" || civilStatusValue === "widow") {
    maidenNameRoot.style.display = "";
  } else {
    maidenNameRoot.style.display = "none";
  }
  // Check for parent email
  const parentEmailRoot = getFormItemRoot("parent-email");
  const birthDateRoot = getFormItemRoot("birth-date");
  const valueDate = birthDateRoot.querySelector("input").value;
  const date = new Date(valueDate);
  let displayValue;
  if (date instanceof Date && !isNaN(date)) {
    // date is valid
    if (getAge(date) < 13) {
      displayValue = "";
    } else {
      displayValue = "none";
    }
  } else {
    displayValue = "none";
  }
  parentEmailRoot.style.display = displayValue;
};

// Validate the entire form
const validateForm = () => {
  let formIsValid = true;
  allFormItems.forEach((formItem) => {
    const validateResult = validateFormItem(formItem.getAttribute("for"));
    if (formIsValid) {
      formIsValid = validateResult;
    }
  });
  if (!formIsValid) {
    alert("Veuillez vérifier le formulaire");
  }
  return formIsValid;
};

// Add change events
document
  .querySelectorAll(
    "form input[type='radio'], form select, form input[type='date'], form input[type='checkbox']"
  )
  .forEach((node) => {
    node.addEventListener("change", () => {
      validateFormItem(node.getAttribute("name"));
      updateFormFields();
    });
  });
// Add blur events
document
  .querySelectorAll("input[type='text'], input[type='password']")
  .forEach((node) => {
    node.addEventListener("blur", () => {
      validateFormItem(node.getAttribute("name"));
    });
  });

// Add form checker
form.addEventListener("submit", (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

// Update initial form fields on document load
updateFormFields();
