let num = 266219;

let tmpString = num + "";
let result = 1;

for (let i = 0; i < tmpString.length; i++) {
    result *= Number(tmpString[i]);
}

console.log("Произведение цифр числа равно: " + result);

result **= 3;

console.log(result.toString().substr(0, 2));
