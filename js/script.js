"use strict";
let contentWrapper = document.querySelector('.content__wrapper');
let title = document.querySelector(".title");

let tabRegistration = document.querySelector(".tab__registration");
let tabLogIn = document.querySelector(".tab__logIn");
let tabDataBase = document.querySelector(".tab__dataBase");

let logIn = contentWrapper.querySelector(".LogIn");
let registration = contentWrapper.querySelector(".registration");
let dataBase = contentWrapper.querySelector(".dataBase");

let registrationName = document.querySelector("#registration__name");
let registrationLogin = document.querySelector("#registration__login");
let registrationPassword = document.querySelector("#registration__password");
let LogInLogin = document.querySelector("#LogIn__login");
let LogInPassword = document.querySelector("#LogIn__password");

let registrationBnt = document.querySelector(".registration__bnt");
let LogInBnt = document.querySelector(".LogIn__bnt");

let adminCell = dataBase.querySelector(".admin");
let curUser = localStorage.getItem("curUser") || "anonymous";
let text = curUser === "anonymous" ? "Анонимный Боб" : JSON.parse(localStorage.getItem(curUser)).firstName;
title.textContent = "Добро пожаловать, " + text;

tabLogIn.addEventListener('click', function () {
    contentWrapper.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".tab").forEach(function (item) {
        item.classList.remove("active");
    });
    logIn.classList.add("active");
    this.classList.add("active");
});
tabDataBase.addEventListener('click', function () {
    if (curUser !== "admin") {
        alert("Посмотреть список зарегистрированных может только администратор!");
        return;
    }
    contentWrapper.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".tab").forEach(function (item) {
        item.classList.remove("active");
    });
    dataBase.classList.add("active");
    this.classList.add("active");
});
tabRegistration.addEventListener('click', function () {
    contentWrapper.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".tab").forEach(function (item) {
        item.classList.remove("active");
    });
    registration.classList.add("active");
    this.classList.add("active");
});

const createLog = function (login) {
    let newElem = document.createElement("div");
    newElem.className = "dataBase__table_node dataBase__table_cell";
    let fromLocal = JSON.parse(localStorage.getItem(login));
    let date = new Date(fromLocal.date);
    newElem.insertAdjacentHTML("afterbegin", `
        <span class="dataBase__table_firstName">${fromLocal.firstName}</span>
        <span class="dataBase__table_lastName">${fromLocal.lastName}</span>
        <span class="dataBase__table_login">${login}</span>
        <span class="dataBase__table_password">${fromLocal.password}</span>
        <span class="dataBase__table_date">${date.getDate()} ` + date.toLocaleDateString("ru-RU", { month: 'long' }) +
        ` ${date.getFullYear()}г., ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</span>
    `);

    let newBtn = document.createElement("button");
    newElem.insertAdjacentElement("beforeend", newBtn);
    dataBase.querySelector(".dataBase__table").insertAdjacentElement("beforeend", newElem);
    newBtn.className = "dataBase__table_delete btn__delete";
    newBtn.textContent = "удалить пользователя";
    function remove() {
        newElem.remove();
        newBtn.removeEventListener('click', null);
        localStorage.removeItem(login, remove);
    }
    newBtn.addEventListener('click', remove);
};

const start = function () {
    localStorage.setItem("admin", JSON.stringify({
        login: "admin",
        password: "admin",
        firstName: "Админ",
        secondName: "Админович"

    }));
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key === "admin" || key === "curUser")
            continue;
        createLog(JSON.parse(localStorage.getItem(key)).login);
    }
};

registrationBnt.addEventListener('click', function (e) {
    e.preventDefault();
    let nameValue = registrationName.value.trim().split(' ');
    if (nameValue.length !== 2) {
        alert("Неверно введено поле с именем и фамилией! Поле должно содержать два слова через пробел - имя и фамилия ");
        return;
    }
    let loginValue = registrationLogin.value;
    if (localStorage.getItem(loginValue)) {
        alert("Пользователь с таким логином уже существует!");
        return;
    }
    let passwordValue = registrationPassword.value;
    let _date = new Date();

    localStorage.setItem(loginValue, JSON.stringify({
        firstName: nameValue[0],
        lastName: nameValue[1],
        login: loginValue,
        password: passwordValue,
        date: _date.getTime()
    }));
    createLog(loginValue);
    registrationName.value = '';
    registrationLogin.value = '';
    registrationPassword.value = '';
});
LogInBnt.addEventListener('click', function (e) {
    e.preventDefault();
    let loginValue = LogInLogin.value || null;
    let passwordValue = LogInPassword.value || null;
    if (passwordValue === null || loginValue === null) {
        alert("Не введен логи или пароль!!");
        return;
    }
    if (localStorage.getItem(loginValue) === null) {
        alert("Пользователя с ником " + loginValue + " не существует!");
        return;
    }
    let user = JSON.parse(localStorage.getItem(loginValue));
    if (user.password !== passwordValue) {
        alert("Неверно введен пароль!");
        return;
    }
    title.textContent = "Добро пожаловать, " + user.firstName;
    curUser = loginValue;
    localStorage.curUser = curUser;
    LogInLogin.value = '';
    LogInPassword.value = '';
});

start();