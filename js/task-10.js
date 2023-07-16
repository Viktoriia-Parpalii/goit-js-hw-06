function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controls: document.getElementById("controls"),
  input: controls.firstElementChild,
  createBtn: controls.querySelector("[data-create]"),
  destroyBtn: controls.querySelector("[data-destroy]"),
  boxes: document.getElementById("boxes"),
};
refs.boxes.style.display = "flex";
refs.boxes.style.flexDirection = "column";
refs.boxes.style.gap = 20 + "px";
refs.boxes.style.justifyContent = "center";
refs.boxes.style.alignItems = "center";
refs.boxes.style.marginTop = 20 + "px";

refs.createBtn.addEventListener("click", onClick);

function onClick() {
  const inputValue = Number(refs.input.value);
  refs.boxes.innerHTML = "";
  createBoxes(inputValue);
}

function createBoxes(amount) {
  let arrayBoxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    boxSize += 10;
    const createDiv = document.createElement("div");
    createDiv.style.width = boxSize + "px";
    createDiv.style.height = boxSize + "px";
    createDiv.style.borderRadius = 20 + "px";
    createDiv.style.boxShadow = "5px 5px 15px 5px #000000";

    createDiv.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(createDiv);
  }
  refs.boxes.append(...arrayBoxes);
}

refs.destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}
