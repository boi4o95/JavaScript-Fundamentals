function increasing(arr) {
    arr  = arr.map(Number)

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            arr.splice(i, 1)
            i -= 1
        }
    }
    console.log(arr.join('\n'))
}

increasing([20,
    3,
    2,
    15,
    6,
    1])