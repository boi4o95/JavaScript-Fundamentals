function compoundInterest(input) {
    let sum = input[0]
    let interestRate = input[1] / 100
    let compoundingPeriod = 12 / input[2]
    let totalTimespan = input[3]

    let f = sum * Math.pow((1 + interestRate / compoundingPeriod), totalTimespan * compoundingPeriod)

    console.log(f.toFixed(2))
}

compoundInterest([1500, 4.3, 3, 6])