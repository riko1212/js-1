const currenColor = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color')
const body = document.querySelector('body')
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const handleCangeBgColor = () => {
  currenColor.innerHTML = getRandomHexColor()
  if(body.style.backgroundColor !== getRandomHexColor()) {
    body.style.backgroundColor = getRandomHexColor()
  }
  
}


changeColorBtn.addEventListener('click', handleCangeBgColor)