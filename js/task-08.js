const loginForm = document.querySelector('.login-form')
const emailInput = document.querySelector('[name="email"]')
const passInput = document.querySelector('[name="password"]')

const handleForm = (event) => {
  event.preventDefault()
  const outputData = {}
  if(emailInput.value && passInput.value) {
    outputData.name = emailInput.value
    outputData.email = passInput.value
    console.log(outputData)
  } else {
    alert('Не всі поля заповнені')
  }
  
  loginForm.reset()
}

loginForm.addEventListener('submit', handleForm)