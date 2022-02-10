let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
    let inputuPassword = document.querySelector('#uPassword')

    if (inputuPassword.getAttribute('type') == 'password') {
        inputuPassword.setAttribute('type', 'text')
    } else {
        inputuPassword.setAttribute('type', 'password')
    }
})

function login() {
    let userName = document.querySelector('#userName')
    let userLabel = document.querySelector('#userLabel')

    let uPassword = document.querySelector('#uPassword')
    let uPasswordLabel = document.querySelector('#uPasswordLabel')

    let msgError = document.querySelector('#msgError')
    let listUser = []

    let userValid = {
        nome: '',
        userName: '',
        uPassword: ''
    }

    listUser = JSON.parse(localStorage.getItem('listUser'))

    listUser.forEach((item) => {
        if (userName.value == item.userCad && uPassword.value == item.uPasswordCad) {

            userValid = {
                nome: item.nomeCad,
                userName: item.userNameCad,
                uPassword: item.uPasswordCad
            }

        }
    })

    if (userName.value == userValid.userName && uPassword.value == userValid.uPassword) {
        window.location.href = 'loggedin.html'

        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom

        localStorage.setItem('token', token)
        localStorage.setItem('userLogged', JSON.stringify(userValid))
    } else {
        userLabel.setAttribute('style', 'color: red')
        userName.setAttribute('style', 'border-color: red')
        uPasswordLabel.setAttribute('style', 'color: red')
        uPassword.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Username or Passwords invalid'
        userName.focus()
    }

}