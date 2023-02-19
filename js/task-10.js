const boxes = document.querySelector('#boxes');
const boxesCountInput = document.querySelector('#controls > input');
const createBoxBtn = document.querySelector('[data-create]')
const destroyBoxBtn = document.querySelector('[data-destroy]')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  destroyBoxes()
  let baseSize = 20;
  for(let i = 1; i<=amount; i+=1) {
    const el = document.createElement('div');
    baseSize+=10
    el.style.width = baseSize+'px';
    el.style.height = el.style.width;
    el.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(el);
    
  }
}

const destroyBoxes = () => {
  boxes.innerHTML = ''
}

createBoxBtn.addEventListener('click', () => {
  createBoxes(Number(boxesCountInput.value))
})
destroyBoxBtn.addEventListener('click', destroyBoxes)
