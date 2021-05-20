$(document).ready(function(){ /* espera a página carregar */

function typeWrite(e) {
    const textArray = e.innerHTML.split('');
    e.innerHTML = ' ';
    textArray.forEach(function (letter, i) {
        setTimeout(function () {
            e.innerHTML += letter;
        }, 80 * i);
    });
}

const phrase = document.querySelector('.intro');

typeWrite(phrase);
    
});
