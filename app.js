var input = document.getElementById("number");
function setNumber(num) {
    if (input.value.charCodeAt(0) >= 97 && input.value.charCodeAt(0) <= 122) {
        input.value = ""
    }
    input.value += num
}
function setNumber(num) {
    if (input.value.charCodeAt(0) >= 97 && input.value.charCodeAt(0) <= 122) {
        input.value = ""
    }
    input.value += num
    if (input.scrollWidth > input.clientWidth) {
        input.scrollLeft = input.scrollWidth - input.clientWidth;
    }
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
function theme() {
    var element = document.body;
    element.classList.toggle("lightTheme");
}
document.addEventListener("keydown", (event) => {
    var key = event.key;
    if (event.key >= 0 && event.key <= 9 || event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/" || event.key == "." || event.key == "%") {
        setNumber(key)
    } else if (event.key === "Enter") {
        ans();
    } else if (event.key === "Backspace") {
        del();
    } else if (event.key === "Escape") {
        delAll();
    }
});