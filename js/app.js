$(document).ready(function(){ /* espera a página carregar */

function typeWrite(e) {
    const textoArray = e.innerHTML.split('');
    e.innerHTML = ' ';
    textoArray.forEach(function (letter, i) {
        setTimeout(function () {
            e.innerHTML += letter;
        }, 80 * i);
    });
}

const phrase = document.querySelector('.intro');

typeWrite(phrase);
    
});
