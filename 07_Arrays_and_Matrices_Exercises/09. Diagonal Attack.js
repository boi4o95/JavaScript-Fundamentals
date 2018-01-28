function diagonalAttack(input) {
    let arr = [];
    let mainDiagonal = 0;
    let secondDiagonal = 0;
    let main = [];
    let secondary = [];
    for (let i = 0; i < input.length; i ++){
        arr[i] = input[i].split(' ').map(Number);
        mainDiagonal += arr[i][i];
        main.push(arr[i][i]);
        secondDiagonal += arr[i][input.length - 1 - i];
        secondary.push(arr[i][input.length - 1 - i]);
    }
    if (mainDiagonal === secondDiagonal){
        for (let i = 0; i < input.length; i++){
            for (let j = 0; j < input.length; j++){
                arr[i][j] = mainDiagonal;
            }
        }
        for (let i = 0; i < input.length; i++){
            arr[i][i] = main[i];
            arr[i][input.length - 1 - i] = secondary[i];
        }
    }
    for (let i = 0; i < input.length; i ++){
        console.log(arr[i].join(" "));
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);