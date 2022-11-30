const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    document.body.style.background = getRandomHexNumber();
    color.textContent = getRandomHexNumber();
});

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}

function getRandomHexNumber() {
    let hexNumber = "#";
    for (let i = 0; i < 6; i++) {
        hexNumber += hex[getRandomNumber()]
    }
    return hexNumber;
}