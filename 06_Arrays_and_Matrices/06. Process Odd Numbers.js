function processOddNumbers(arr) {
    console.log(arr.filter((e, i) => i % 2 !== 0).map(x => x * 2). reverse().join())
}

processOddNumbers([3, 0, 10, 4, 7, 3])