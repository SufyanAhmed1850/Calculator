function setNumber(num) {
    var input = document.getElementById("number")
    if (input.value == "undefined") {
        input.value = "" + num
    } else {
        input.value += num
    }
}
function ans() {
    var inputValue = document.getElementById("number")
    var output = eval(inputValue.value)
    inputValue.value = output
}
function del() {
    var input = document.getElementById("number")
    input.value = input.value.slice(0, -1)
}
function delAll() {
    var input = document.getElementById("number")
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