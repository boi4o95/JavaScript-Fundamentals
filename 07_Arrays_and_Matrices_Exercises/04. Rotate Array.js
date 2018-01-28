function rotateArray(arr) {
    let result = []
    let rotate = Number(arr.pop())

    for (let i = 0; i < rotate % arr.length; i++) {
        arr.unshift(arr.pop())
    }

    console.log(arr.join(' '))
}

rotateArray([1, 2, 3, 4, 2])