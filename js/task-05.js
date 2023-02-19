const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

const handleInputForName = (event)=> {
  nameOutput.innerHTML = event.target.value
  if(event.target.value==='') {
    nameOutput.innerHTML = 'Anonymous'
  }
}

nameInput.addEventListener('input', handleInputForName)