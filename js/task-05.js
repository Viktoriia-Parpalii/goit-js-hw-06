const inputEl = document.getElementById("name-input");
const nameLabel = document.getElementById("name-output");

inputEl.addEventListener("input", onImputChange);

function onImputChange(event) {
  nameLabel.textContent = event.currentTarget.value;
}
