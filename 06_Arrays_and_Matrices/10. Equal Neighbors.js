function equalNeighbors(matrix) {
    let neighbors = 0
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row + 1 < matrix.length) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    neighbors++
                }
            }
            if (col + 1 < matrix[row].length) {
                if (matrix[row][col] === matrix[row][col + 1]) {
                    neighbors++
                }
            }
        }
    }
    console.log(neighbors)
}

equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
)