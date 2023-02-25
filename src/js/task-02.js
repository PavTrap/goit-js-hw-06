'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsRefs = document.querySelector("#ingredients");

const listRefs = ingredients.map(ingredient => {

  const listRef = document.createElement("li");
  listRef.textContent = ingredient;
  listRef.classList.add("item");
  return listRef;
});
ingredientsRefs.append(...listRefs);

console.log(ingredientsRefs);





/////////////////////////////////////////////////////////////////////////////
// const ingredientsRefs = document.querySelector('#ingredients')
// const listRefs = []

// ingredients.forEach(ingredient => {

// 	const item = document.createElement('li')
// 	item.className = 'item'
// 	item.textContent = ingredient
// 	listRefs.push(item)
// })

// ingredientsRefs.append(...listRefs)




