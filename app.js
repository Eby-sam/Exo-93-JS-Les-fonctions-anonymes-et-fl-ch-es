let alerte = document.getElementById('alert');
let somme = document.getElementById('somme');

alerte.addEventListener('click', () => alert('hello world'));

function ecouteur() {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = 5 + 6;
}

somme.addEventListener('click', () => ecouteur());