function smallestTwoNumbers(arr) {
    arr.sort((a, b) => a - b)
    let result = arr.slice(0, 2)
    return result.join(' ')
}

console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));