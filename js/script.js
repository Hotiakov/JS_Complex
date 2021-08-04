//Задание 1
console.log("Задание 1");
let arr = ["13644564", "13424", "23434", "46543", "663423", "34234", "2"];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "2" || arr[i][0] == "4")
        console.log(arr[i]);
}

console.log("");

//задание 2
console.log("Задание 2");
let arrayOfPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
for (let i = 0; i < arrayOfPrime.length; i++) {
    console.log("Простое число: " + arrayOfPrime[i] + " Его делители: " + "1, " + arrayOfPrime[i]);
}