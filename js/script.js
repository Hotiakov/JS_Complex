"use strict";

let date;

const changeHourWriting = function (num) {
    if (num === 1 || num === 21)
        return "час";
    if ((num > 1 && num < 5) || (num > 21 && num < 24))
        return "часа";
    return "часов";
}

const addZero = function (num) {
    if (num < 10)
        return "0" + num;
    return num;
}

const dayOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

const a = document.querySelector('.a');
const b = document.querySelector('.b');
let timer = setInterval(function () {
    date = new Date();
    a.innerHTML = `Сегодня ${dayOfWeek[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года, ${date.getHours()} ${changeHourWriting(date.getHours())} ${date.getMinutes()} минут ${date.getSeconds()} секунды`;
    b.innerHTML = `${addZero(date.getDate())}.${addZero(date.getMonth())}.${addZero(date.getFullYear())} - ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
}, 1000);
