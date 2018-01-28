function magicMatrices(input) {
    let firstRowSum = input[0].reduce((a, b) => a + b);

    for (let row = 0; row < input.length; row++) {
        let sumCol = 0;
        let sumRow = 0;
        for (let col = 0; col < input.length; col++) {
            sumRow += Number(input[row][col]);
            sumCol += Number(input[col][row]);
        }
        if (sumRow != sumCol || sumCol != firstRowSum) {
            return false;
        }
    }
    return true;
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));