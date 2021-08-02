let lang = prompt("Введите язык (en или ru)");

//через if
if (lang === "en")
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
else if (lang === "ru")
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
else
    console.log("Неподдерживаемый язык");

//через switch
switch (lang) {
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
    case "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break;
    default:
        console.log("Неподдерживаемый язык");
}

//через многомерный массив?
let arr = [
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
];
console.log(arr[Number(lang === "ru")]);


//Задание 2:

let namePerson = prompt("Введите имя");

console.log(namePerson == "Артем" ? "директор" : namePerson == "Максим" ? "преподаватель" : "студент");
