const validationInput = document.querySelector('#validation-input')


const handleInputTextLength = (e) => {
  if(Number(validationInput.dataset.length)===e.target.value.length) {
    validationInput.classList.add('valid')
    validationInput.classList.remove('invalid')
  } else {
    validationInput.classList.add('invalid')
    validationInput.classList.remove('valid')
  
  }
  console.log(validationInput.dataset.length)
  console.log(e.target.value.length)
}

validationInput.addEventListener('blur', handleInputTextLength)
