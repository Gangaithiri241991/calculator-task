
let result = document.getElementById('result');

function insertValue(val) {
    result.value += val;
}

function clearResult() {
    result.value = '';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    let expression = result.value;
    if (expression) {
        result.value = eval(expression);
    }
}

