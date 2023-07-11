const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const ingredient of ingredients) {
  const createNameIngredients = document.createElement("li");
  createNameIngredients.textContent = ingredient;
  createNameIngredients.classList.add("item");
  // console.log(createNameIngredients);
  const ingredientsEl = document.querySelector("#ingredients");
  ingredientsEl.append(createNameIngredients);
}
