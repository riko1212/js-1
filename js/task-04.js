const counterValue = document.querySelector('#value')
const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')

let val = 0
counterValue.textContent = val

const increment = () => {
  val +=1
  counterValue.textContent = val
}

const decrement = () => {
  val -=1
  counterValue.textContent = val
}

incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)