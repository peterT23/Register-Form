function validateUsername(username) {
  if (!username) return "Username required";
  return true;
}
function validatePassword(password) {
  if (!password) return "Password required";
  if (password.length < 3) return "Password must be at lease 3 character";
  return true;
}
function validatePasswordConfirmation(passwordConfirmation, password) {
  if (!password) return "Password Confirmation required";
  if (passwordConfirmation !== password) return "Password does not match";
  return true;
}
function validateEmail(email) {
  if (!email) return "Email required";
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) return "Email invalid";

  return true;
}

function displayValidation(input, message, type) {
  // console.log(input.parentNode.querySelector(".icon-success"))
  const successIcon = input.parentNode.querySelector(".icon-success");
  const errorIcon = input.parentNode.querySelector(".icon-error");
  const errorMessage = input.parentNode.querySelector(".error-message");
  if (type === "success") {
    //show success icon
    successIcon.classList.remove("hidden");
    errorIcon.classList.add("hidden");
    errorMessage.textContent = "";
  } else {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMessage.textContent = message;
    //show error message and error icon
  }
}

function validateFields(input) {
  let message;
  switch (input.id) {
    case "username":
      message = validateUsername(input.value.trim());
      // console.log(input.value.trim());
      break;
    case "email":
      message = validateEmail(input.value.trim());
      break;
    case "password":
      message = validatePassword(input.value.trim());
      break;
    case "password-confirmation":
      const password = document.querySelector("#password").value.trim();
      message = validatePasswordConfirmation(input.value.trim(), password);
      break;
    default:
      break;
  }
  if (message === true) {
    displayValidation(input, "", "success");
    console.log("ok");
  } else {
    displayValidation(input, message, "error");
    console.log(message);
  }
}

const form = document.querySelector(".form");
// console.log(form);
const fields = ["username", "email", "password", "password-confirmation"];
const inputs = fields.map((field) => document.querySelector(`#${field}`));
console.log(inputs);

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateFields(input);
    console.log(input);
  });
});

const btn = document.querySelector(".button");
btn.addEventListener("click", (event) => {
  inputs.forEach((input) => validateFields(input));
  console.log(btn);
});
// form.addEventListener("submit",(event)=>{
//   event.preventDefault();
//   inputs.forEach(input=> validateFields(input));

// })
console.log(btn);
