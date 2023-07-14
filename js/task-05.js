const inputEl = document.getElementById("name-input");
const nameLabel = document.getElementById("name-output");

inputEl.addEventListener("input", changeName);

function changeName(event) {
  nameLabel.textContent = event.currentTarget.value || "Anonymous";
}
