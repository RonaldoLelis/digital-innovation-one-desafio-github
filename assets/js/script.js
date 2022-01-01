// iniciar o contador com zero
let count = 0;

// selecionar o valor e o botão clicado
const VALUE = document.querySelector('#currentNumber');
const BTNS = document.querySelectorAll('.btn');

// loop para mudar o valor e setar as classes
BTNS.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const STYLES = e.currentTarget.classList;
        if(STYLES.contains('decrement')) {
            count--;
        }
        else if(STYLES.contains('increment')) {
            count++;
        } else {
            count = 0;
        }
        if(count > 0) {
            VALUE.style.color = 'green';
        }
        if(count < 0) {
            VALUE.style.color = 'red';            
        }
        if(count === 0) {
            VALUE.style.color = '#222'
        }
        VALUE.textContent = count;
    });
});



