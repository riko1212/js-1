const sizeControlInput = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
console.log(sizeControlInput)
const handleRange = (event) => {
  text.style.fontSize = event.target.value+'px'
}
text.style.fontSize = sizeControlInput.value+'px'
sizeControlInput.addEventListener('input', handleRange)