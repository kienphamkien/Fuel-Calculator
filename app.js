document.addEventListener('DOMContentLoaded', () => {

    const selectDrop = document.querySelector('#states');
    // const selectDrop = document.getElementById('countries');


    fetch("states.json").then(res => {
        return res.json();
    }).then(data => {
        let output = "";
        data.forEach(country => {
            output += `
        
        <option value="${country.name}">${country.name}</option>`;
        })

        selectDrop.innerHTML = output;
    }).catch(err => {
        console.log(err);
    })


});