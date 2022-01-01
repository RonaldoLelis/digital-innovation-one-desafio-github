let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}