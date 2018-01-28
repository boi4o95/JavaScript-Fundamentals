function printEvery(input) {
    let steps = Number(input[input.length - 1])

    for (let i = 0; i < input.length - 1; i+= steps) {
        console.log(input[i])
    }
}

printEvery(['5', '20', '31', '4', '20', '2'])