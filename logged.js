let userLogged = JSON.parse(localStorage.getItem('userLogged'))

let loggedIn = document.querySelector('#loggedIn')
loggedIn.innerHTML = `Olá ${userLogged.nome}`

if (localStorage.getItem('token') == null) {
    alert('You are not logged in to access this page')
    window.location.href = 'index.html'
}



function logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogged')
    window.location.href = 'index.html'
}