let nameinp = document.querySelector("#name");
let nikinp = document.querySelector("#nik");
let passinp = document.querySelector("#password");
let tableplus = document.querySelector("#tableplus");
let tableminus = document.querySelector("#tableminus");
let tbody = document.querySelector("#tbody");
tableplus.addEventListener('click', function(){
    let name = nameinp.value; 
    let nik = nikinp.value; 
    let pass = password.value; 

    tbody.innerHTML +=
    `
    <tr>
        <th>${name}</th>
        <th>${nik}</th>
        <th>${pass}</th>
    </tr>
    `;
    nameinp.value = '';
    nikinp.value = '';
    password.value = '';
});
tableminus.addEventListener('click', function(){
    tbody.innerHTML = '';
    nameinp.value = '';
    nikinp.value = '';
    password.value = '';
});