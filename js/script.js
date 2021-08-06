"use strict";

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let date = new Date();

for (let i = 0; i < week.length; i++) {
    if ((week[i] === "Суббота" || week[i] === "Воскресенье") && (i + 1) % 7 === date.getDay()) {
        document.write("<em><strong>" + week[i] + "</strong></em><br>");
    }
    else if (week[i] === "Суббота" || week[i] === "Воскресенье") {
        document.write("<em>" + week[i] + "</em><br>");
    }
    else if ((i + 1) % 7 === date.getDay())
        document.write("<strong>" + week[i] + "</strong><br>");
    else
        document.write(week[i] + "<br>");
}