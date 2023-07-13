let counterValue = 0;
const counterEl = document.querySelector("#counter");
const decrementBtn = counterEl.firstElementChild;
const incrementBtn = counterEl.lastElementChild;
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", decrement);

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

incrementBtn.addEventListener("click", increment);

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
