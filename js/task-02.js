const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = ingredients.map((el) => {
  const item = document.createElement('li')
   item.classList.add('item')
   item.innerHTML = el
   return item
} 
)

document.querySelector('ul#ingredients').append(...list)

