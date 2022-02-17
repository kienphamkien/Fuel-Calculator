let btn = document.querySelector('#seePass')
let btnConfirm = document.querySelector('#seeConfirmPass')


// let nome = document.querySelector('#nome')
// let labelNome = document.querySelector('#labelNome')
//let validNome = false

let user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let pass = document.querySelector('#pass')
let labelPass = document.querySelector('#labelPass')
let validPass = false

let confirmPass = document.querySelector('#confirmPass')
let labelConfirmPass = document.querySelector('#labelConfirmPass')
let validConfirmPass = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

//nome.addEventListener('keyup', () => {
//  if (nome.value.length <= 2) {
//      labelNome.setAttribute('style', 'color: red')
//      labelNome.innerHTML = 'Nome *Insert at least 3 characters'
//     nome.setAttribute('style', 'border-color: red')
//     validNome = false
// } else {
//     labelNome.setAttribute('style', 'color: green')
//     labelNome.innerHTML = 'Nome'
//     nome.setAttribute('style', 'border-color: green')
//     validNome = true
//  }
//})

user.addEventListener('keyup', () => {
    if (user.value.length <= 4) {
        labelUser.setAttribute('style', 'color: red')
        labelUser.innerHTML = 'Username *Insert at least 5 characters'
        user.setAttribute('style', 'border-color: red')
        validUser = false
    } else {
        labelUser.setAttribute('style', 'color: green')
        labelUser.innerHTML = 'User'
        user.setAttribute('style', 'border-color: green')
        validUser = true
    }
})

pass.addEventListener('keyup', () => {
    if (pass.value.length <= 5) {
        labelPass.setAttribute('style', 'color: red')
        labelPass.innerHTML = 'Password *Insert at least 6 characters'
        pass.setAttribute('style', 'border-color: red')
        validPass = false
    } else {
        labelPass.setAttribute('style', 'color: green')
        labelPass.innerHTML = 'Pass'
        pass.setAttribute('style', 'border-color: green')
        validPass = true
    }
})

confirmPass.addEventListener('keyup', () => {
    if (pass.value != confirmPass.value) {
        labelConfirmPass.setAttribute('style', 'color: red')
        labelConfirmPass.innerHTML = 'Confirm Password *The Passwords do not match'
        confirmPass.setAttribute('style', 'border-color: red')
        validConfirmPass = false
    } else {
        labelConfirmPass.setAttribute('style', 'color: green')
        labelConfirmPass.innerHTML = 'Confirm Password'
        confirmPass.setAttribute('style', 'border-color: green')
        validConfirmPass = true
    }
})

function regis() {
    if ( /*validNome && */ validUser && validPass && validConfirmPass) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            //nomeCad: nome.value,
            userCad: user.value,
            passCad: pass.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Signing Up User...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = 'login.html'
        }, 3000)


    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Fill up all the forms before Signing up</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

btn.addEventListener('click', () => {
    let inputPass = document.querySelector('#pass')

    if (inputPass.getAttribute('type') == 'password') {
        inputPass.setAttribute('type', 'text')
    } else {
        inputPass.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', () => {
    let inputConfirmPass = document.querySelector('#confirmPass')

    if (inputConfirmPass.getAttribute('type') == 'password') {
        inputConfirmPass.setAttribute('type', 'text')
    } else {
        inputConfirmPass.setAttribute('type', 'password')
    }
})