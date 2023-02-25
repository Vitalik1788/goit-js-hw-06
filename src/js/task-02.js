const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const item = ingredients.map(el => {
  const createItem = document.createElement('li');
  createItem.textContent = el;
  createItem.classList.add('item');

  return createItem;
});

list.append(...item);

console.log(list);



