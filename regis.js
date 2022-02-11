//let btn = document.querySelector('#seePassword')
//let btnConfirm = document.querySelector('#seeConfirmPassword')


//let nome = document.querySelector('#nome')
//let labelNome = document.querySelector('#labelNome')
//let validNome = false

let userName = document.querySelector('#userName')
let labelUserName = document.querySelector('#labelUserName')
let validUserName = false

let uPassword = document.querySelector('#uPassword')
let labeluPassword = document.querySelector('#labeluPassword')
let validuPassword = false

//let confirmPassword = document.querySelector('#confirmPassword')
//let labelConfirmPassword = document.querySelector('#labelConfirmPassword')
//let validConfirmPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

/*nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insert at least 3 characters'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})
*/

userName.addEventListener('keyup', () => {
    if (userName.value.length <= 4) {
        labelUserName.setAttribute('style', 'color: red')
        labelUserName.innerHTML = 'Username *Insert at least 5 characters'
        userName.setAttribute('style', 'border-color: red')
        validUserName = false
    } else {
        labelUserName.setAttribute('style', 'color: green')
        labelUserName.innerHTML = 'UserName'
        userName.setAttribute('style', 'border-color: green')
        validUserName = true
    }
})

uPassword.addEventListener('keyup', () => {
    if (uPassword.value.length <= 5) {
        labeluPassword.setAttribute('style', 'color: red')
        labeluPassword.innerHTML = 'Password *Insert at least 6 characters'
        uPassword.setAttribute('style', 'border-color: red')
        validuPassword = false
    } else {
        labeluPassword.setAttribute('style', 'color: green')
        labeluPassword.innerHTML = 'Password'
        uPassword.setAttribute('style', 'border-color: green')
        validuPassword = true
    }
})

/*confirmPassword.addEventListener('keyup', () => {
    if (uPassword.value != confirmPassword.value) {
        labelConfirmPassword.setAttribute('style', 'color: red')
        labelConfirmPassword.innerHTML = 'Confirm Password *The Passwords do not match'
        confirmPassword.setAttribute('style', 'border-color: red')
        validConfirmPassword = false
    } else {
        labelConfirmPassword.setAttribute('style', 'color: green')
        labelConfirmPassword.innerHTML = 'Confirm Password'
        confirmPassword.setAttribute('style', 'border-color: green')
        validConfirmPassword = true
    }
})
*/
function signup() {
    if (validNome && validUserName && validuPassword /*&& validConfirmPassword*/ ) {
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

        listUser.push({
            nomeCad: nome.value,
            userNameCad: userName.value,
            uPasswordCad: uPassword.value
        })

        localStorage.setItem('listUser', JSON.stringify(listUser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Signing Up User...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = 'index.html'
        }, 3000)


    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Fill up everthing before signing</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

btn.addEventListener('click', () => {
    let inputuPassword = document.querySelector('#uPassword')

    if (inputuPassword.getAttribute('type') == 'password') {
        inputuPassword.setAttribute('type', 'text')
    } else {
        inputuPassword.setAttribute('type', 'password')
    }
})

/* btnConfirm.addEventListener('click', () => {
    let inputConfirmPassword = document.querySelector('#confirmPassword')

    if (inputConfirmPassword.getAttribute('type') == 'password') {
        inputConfirmPassword.setAttribute('type', 'text')
    } else {
        inputConfirmPassword.setAttribute('type', 'password')
    }
})
*/