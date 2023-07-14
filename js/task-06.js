const inputEl = document.getElementById("validation-input");
const LENGTH = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  const inputLength = event.currentTarget.value.length;
  if (inputLength === LENGTH) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
