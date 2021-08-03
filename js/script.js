const changeString = function (text) {
    if (typeof text !== "string") {
        console.log("В качестве аргументы была передана не строка");
        return;
    }
    let tmpText = text.trim();
    if (text.length >= 30) {
        tmpText = tmpText.substring(0, 30);
        tmpText += "...";
    }
    return tmpText;
}

console.log(changeString("      loremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbb      "));
