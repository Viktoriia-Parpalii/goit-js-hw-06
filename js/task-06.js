const inputEl = document.getElementById("validation-input");
const LENGTH = 6;

inputEl.addEventListener("blur", validOfInput);
inputEl.addEventListener("blur", invalidOfInput);

function validOfInput(event) {
  const inputLength = event.currentTarget.value.length;
  inputLength === LENGTH
    ? inputEl.classList.add("valid")
    : inputEl.classList.remove("valid");
}
function invalidOfInput(event) {
  const inputLength = event.currentTarget.value.length;
  inputLength !== LENGTH
    ? inputEl.classList.add("invalid")
    : inputEl.classList.remove("invalid");
}
