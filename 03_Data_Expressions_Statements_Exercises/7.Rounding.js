function roundingNumber(input) {
    let number = input[0]
    let rouding = input[1]

    if (rouding > 15) {
        rouding = 15
    }
    console.log(parseFloat(number.toFixed(rouding)))
}

roundingNumber([3.1, 2])