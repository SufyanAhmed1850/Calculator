var input = document.getElementById("number");

function setNumber(num) {
    if (input.value == "undefined") {
        input.value = ""
    }
    input.value += num
}
function ans() {
    var output = eval(input.value)
    input.value = output
}
function del() {
    input.value = input.value.slice(0, -1)
}
function delAll() {
    input.value = ""
}
function rotate() {
    var btnTheme = document.querySelector(".btnTheme")
    btnTheme.classList.add('rot');
}
function theme() {
    var element = document.body;
    element.classList.toggle("lightTheme");
}
document.addEventListener("keydown", (event) => {
    var key = event.key;

    if (event.key >= 0 && event.key <= 9) {
        setNumber(key)
    } else if (event.key === ".") {
        setNumber(".");
    } else if (event.key === "+") {
        setNumber("+");
    } else if (event.key === "-") {
        setNumber("-");
    } else if (event.key === "*") {
        setNumber("*");
    } else if (event.key === "/") {
        setNumber("/");
    } else if (event.key === "Enter") {
        ans();
    } else if (event.key === "Backspace") {
        del();
    } else if (event.key === "Escape") {
        delAll();
    }
});