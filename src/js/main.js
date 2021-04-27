document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login')
  const registerForm = document.querySelector('#register')
  const alertRegister = document.querySelector('#alertRegistert')
  const menuMob = document.querySelector('#mobMenu')
  const scrollTop = window.scroll()

  document
    .querySelector('#linkRegisterAccount')
    .addEventListener('click', (e) => {
      e.preventDefault()
      loginForm.classList.add('hidden')
      registerForm.classList.remove('hidden')
      scrollTop = scroll(0, 0)
    })

  document.querySelector('#linkLogin').addEventListener('click', (e) => {
    e.preventDefault()
    loginForm.classList.remove('hidden')
    registerForm.classList.add('hidden')
    scrollTop = scroll(0, 0)
  })

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    setTimeout(function () {
      alertRegister.classList.remove('hidden')
      alertRegister.classList.add('alert')
    }, 100)
    setTimeout(function () {
      alertRegister.classList.remove('alert')
      alertRegister.classList.add('hidden')
    }, 8000)
  })

  //PASSWORD VISUALIZATION

  document.querySelector('.password span').addEventListener('click', (e) => {
    const passwordInput = document.querySelector('#password')
    if (e.target.classList.contains('show')) {
      e.target.classList.remove('show')
      passwordInput.type = 'text'
    } else {
      e.target.classList.add('show')
      passwordInput.type = 'password'
    }
  })

  document
    .querySelector('.registerPass span')
    .addEventListener('click', (e) => {
      const passwordInput = document.querySelector('#registerpass')
      if (e.target.classList.contains('show')) {
        e.target.classList.remove('show')
        passwordInput.type = 'text'
      } else {
        e.target.classList.add('show')
        passwordInput.type = 'password'
      }
    })

  //MOBILE

  document.querySelector('#menuDisplay').addEventListener('click', (e) => {
    e.preventDefault()
    menuMob.classList.remove('menu-hidden')
    menuMob.classList.add('menuMob')
  })

  document.querySelector('#closeBtn').addEventListener('click', (e) => {
    e.preventDefault()
    menuMob.classList.add('menu-hidden')
    menuMob.classList.remove('menuMob')
  })
})
