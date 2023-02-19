console.log(`Number of categories: ${document.querySelectorAll('li.item').length}`)
document.querySelectorAll('li.item').forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`)
  console.log(`Elements: ${el.lastElementChild.children.length}`)
})