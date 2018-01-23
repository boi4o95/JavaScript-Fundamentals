function cookingNumbers(arr) {
    let numbers = arr[0]

    let operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => ++num,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    }
    for (let i = 1; i < arr.length; i++) {
        const currentOperation = arr[i];
        numbers = operations[currentOperation](numbers)
        console.log(numbers)

    }
}

cookingNumbers([32,'chop', 'chop', 'chop', 'chop', 'chop'])