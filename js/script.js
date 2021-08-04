//Задание 1
console.log("Задание 1");
let arr = ["13644564", "13424", "23434", "46543", "663423", "34234", "2"];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "2" || arr[i][0] == "4")
        console.log(arr[i]);
}

console.log("");


//задание 2
const isPrime = function (n) {
    if (n === 2)
        return true;
    if (n === 1 || n % 2 === 0)
        return false;
    for (let i = 3; i < n; i += 2) {
        if (n % i === 0)
            return false;
    }
    return true;
};

console.log("Задание 2");

for (let i = 1; i <= 100; i++) {
    if (isPrime(i))
        console.log("Простое число: " + i + " Его делители: " + "1, " + i);
}