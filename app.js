function setNumber(num) {
    var input = document.getElementById("number")
    input.value = input.value + num
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