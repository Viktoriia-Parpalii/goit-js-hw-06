let counterValue = 0;
const counterEl = document.querySelector("#counter");
const decrementBtn = counterEl.firstElementChild;
const incrementBtn = counterEl.lastElementChild;
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  //   console.log(counterValue);
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  //   console.log(counterValue);
  valueEl.textContent = counterValue;
});
