function biggestOfNumber(num) {
    let num1 = num[0]
    let num2 = num[1]
    let num3 = num[2]

    return Math.max(num1, num2, num3)
}

console.log(biggestOfNumber([-3, -5, -7]));
