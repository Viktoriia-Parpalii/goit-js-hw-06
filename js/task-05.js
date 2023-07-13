const inputEl = document.getElementById("name-input");
const nameLabel = document.getElementById("name-output");

// inputEl.addEventListener("input", changeName);

// function changeName(event) {
//   if (event) nameLabel.textContent = event.currentTarget.value;

// }

inputEl.addEventListener("input", changeName);
inputEl.addEventListener("blur", staticName);

function changeName(event) {
  nameLabel.textContent = event.currentTarget.value;
}
function staticName(event) {
  if (nameLabel.textContent === "") nameLabel.textContent = "Anonymous";
}
