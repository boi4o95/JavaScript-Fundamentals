function firstAndLast(arr) {
    let n = arr.shift()
    console.log(arr.slice(0,n).join(' '))
    console.log(arr.slice(arr.length - n).join(' '))
}

firstAndLast([2, 7, 8, 9])