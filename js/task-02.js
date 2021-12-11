const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.querySelector("#ingredients");

const foodIngredients = ingredients.forEach((ingredient) => {
  let items = document.createElement("li");
  items.textContent = ingredient;
  ulList.append(items);
});
