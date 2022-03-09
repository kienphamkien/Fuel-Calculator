let userLogg = JSON.parse(localStorage.getItem('userLogg'))

let logg = document.querySelector('#logg')
logg.innerHTML = `Hello ${userLogg.user}`

if (localStorage.getItem('token') == null) {
    alert('you need to be signed in to access this page')
    window.location.href = 'login.html'
}

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
validNome = false


let addre = document.querySelector('#addre')
let labelAddre = document.querySelector('#labelAddre')
let validAddre = false

let addre2 = document.querySelector('#addre2')
let labelAddre2 = document.querySelector('#labelAddre2')
let validAddre2 = false

let city = document.querySelector('#city')
let labelCity = document.querySelector('#labelCity')
let validCity = false

let zipcode = document.querySelector('#zipcode')
let labelZipcode = document.querySelector('#labelZipcode')
let validZipcode = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 50) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insert at least 50 characters'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

addre.addEventListener('keyup', () => {
    if (addre.value.length <= 100) {
        labelAddre.setAttribute('style', 'color: red')
        labelAddre.innerHTML = 'Username *Insert at least 5 characters'
        addre.setAttribute('style', 'border-color: red')
        validAddre = false
    } else {
        labelAddre.setAttribute('style', 'color: green')
        labelAddre.innerHTML = 'User'
        Addre.setAttribute('style', 'border-color: green')
        validAddre = true
    }
})

addre2.addEventListener('keyup', () => {
    if (addre2.value.length <= 5) {
        labelAddre2.setAttribute('style', 'color: red')
        labelAddre2.innerHTML = 'Password *Insert at least 6 characters'
        addre2.setAttribute('style', 'border-color: red')
        validAddre2 = false
    } else {
        labelAddre2.setAttribute('style', 'color: green')
        labelAddre2.innerHTML = 'Pass'
        addre2.setAttribute('style', 'border-color: green')
        validAddre2 = true
    }
})

city.addEventListener('keyup', () => {
    if (city.value.length <= 100) {
        labelCity.setAttribute('style', 'color: red')
        labelCity.innerHTML = 'Password *Insert at least 6 characters'
        city.setAttribute('style', 'border-color: red')
        validCity = false
    } else {
        labelCity.setAttribute('style', 'color: green')
        labelCity.innerHTML = 'Pass'
        city.setAttribute('style', 'border-color: green')
        validCity = true
    }
})

zipcode.addEventListener('keyup', () => {
    if (zipcode.value.length <= 5) {
        labelZipcode.setAttribute('style', 'color: red')
        labelZipcode.innerHTML = 'Nome *Insert at least 50 characters'
        zipcode.setAttribute('style', 'border-color: red')
        validZipcode = false
    } else {
        labelZipcode.setAttribute('style', 'color: green')
        labelZipcode.innerHTML = 'Nome'
        zipcode.setAttribute('style', 'border-color: green')
        validZipcode = true
    }
})

function regis() {
    if (validNome && validAddre && validAddre2 && validCity && validZipcode) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            nomeCad: nome.value,
            addreCad: addre.value,
            addre2Cad: addre2.value,
            cityCad: city.value,
            zipcodeCad: zipcode.value,

        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Finishing Signing Up User...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = 'login.html'
        }, 3000)


    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Fill up all the forms before finishing Signing Up </strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogg')
    window.location.href = 'login.html'
}

function save() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogg')
    window.location.href = 'login.html'
}