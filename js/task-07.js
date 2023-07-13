const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("change", changeFontSize);

function changeFontSize(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
