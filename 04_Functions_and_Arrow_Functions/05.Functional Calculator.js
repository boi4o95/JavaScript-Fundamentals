function calculator(numA, numB, operator) {
    let  add = function (a, b) { return a + b}
    let  subtract = function (a, b) { return a - b}
    let  multiply = function (a, b) { return a * b}
    let  divide = function (a, b) { return a / b}

    switch (operator){
        case "+" : return add(numA, numB)
        case "-" : return subtract(numA, numB)
        case "*" : return multiply(numA, numB)
        case "/" : return divide(numA, numB)
    }
}

console.log(calculator(3, 3, '+'))