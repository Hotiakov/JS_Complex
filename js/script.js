function debounce(f, t) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && ((this.lastCall - previousCall) <= t)) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => f(args), t);
    }
}

const input = document.querySelector("#input");
const inputText = document.querySelector(".inputText");
function setInput() {
    let inputValue = input.value;
    inputText.textContent = inputValue;
}

input.addEventListener("input", debounce(setInput, 300));