const itemSumEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemSumEl.length}`);

const itemsEl = document.querySelectorAll(".item");

itemsEl.forEach((itemEl) => {
  const titleEl = itemEl.querySelector("h2");
  console.log(`Category: ${titleEl.textContent}`);

  const nameItemEl = itemEl.querySelectorAll("li");
  console.log(`Elements: ${nameItemEl.length}`);
});
