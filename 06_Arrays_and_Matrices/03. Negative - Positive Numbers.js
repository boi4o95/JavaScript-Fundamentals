function negativePositiveNum(arr) {
    let result = []
    for (let num of arr) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }

    return result.join(' ')
}

console.log(negativePositiveNum([3, -2, 0, -1]));