let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
    let inputpass = document.querySelector('#pass')

    if (inputPass.getAttribute('type') == 'password') {
        inputPass.setAttribute('type', 'text')
    } else {
        inputPass.setAttribute('type', 'password')
    }
})

function logi() {
    let user = document.querySelector('#user')
    let userLabel = document.querySelector('#userLabel')

    let pass = document.querySelector('#pass')
    let passLabel = document.querySelector('#passLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        pass: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (user.value == item.userCad && pass.value == item.passCad) {

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                pass: item.passCad
            }

        }
    })

    if (user.value == userValid.user && pass.value == userValid.pass) {
        window.location.href = 'ini.html'

        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom

        localStorage.setItem('token', token)
        localStorage.setItem('userLogg', JSON.stringify(userValid))
    } else {
        userLabel.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        passLabel.setAttribute('style', 'color: red')
        pass.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Username or Password Incorrect'
        user.focus()
    }

}