function biggestElement(matrix) {
    let  biggestNumbers = Number.NEGATIVE_INFINITY
    matrix.forEach(r => r.forEach(
        c => biggestNumbers = Math.max(biggestNumbers, c)
    ))

    return biggestNumbers
}

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));