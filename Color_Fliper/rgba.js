const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    let rgba = "RGBA("+getRandomNumber()+","+anotherRandom()+","+lastRandomNumber()+")";
    document.body.style.backgroundColor = rgba;
    color.textContent = rgba
});

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}

function anotherRandom() {
    return Math.floor(Math.random() * 255);
}

function lastRandomNumber() {
    return Math.floor(Math.random() * 255);
}

