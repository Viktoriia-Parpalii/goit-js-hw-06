// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const refs = {
//   controls: document.getElementById("controls"),
//   input: controls.firstElementChild,
//   createBtn: controls.querySelector("[data-create]"),
//   destroyBtn: controls.querySelector("[data-destroy]"),
//   boxes: document.getElementById("boxes"),
// };

// refs.createBtn.addEventListener("click", onClick);

// function onClick() {
//   createBoxes();
// }
// function createBoxes(amount) {
//   const createDiv = document.createElement("div");
//   createDiv.style.width = 30 + "px";
//   createDiv.style.height = 30 + "px";

//   let array = [];
//   array.push(createDiv);

//   refs.boxes.append(...array);
// }

// refs.input.addEventListener("input", onInput);
// function onInput(event) {
//   const amount = event.elements.currentTarget.value;
// }
