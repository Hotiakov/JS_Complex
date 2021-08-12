function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

let btn = document.querySelector("#change-color");

btn.style.color = document.body.style.backgroundColor = document.querySelector("p").textContent = localStorage.color;



btn.addEventListener('click', function () {
    let randomValue = getRandomInt(0, 16 ** 6 + 1).toString(16);
    let color = "#" + ("000000" + randomValue).slice(-6);
    let p = document.querySelector("p");
    p.textContent = color;
    localStorage.color = color;
    btn.style.color = color;
    document.body.style.backgroundColor = color;
});