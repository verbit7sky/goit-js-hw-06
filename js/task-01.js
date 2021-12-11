const numberOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((element) => {
  const getElementTitle = element.querySelector("h2");

  const getElementLi = element.querySelectorAll("li");

  console.log(`Category: ${getElementTitle.textContent}`);

  console.log(`Elements: ${getElementLi.length}`);
});
