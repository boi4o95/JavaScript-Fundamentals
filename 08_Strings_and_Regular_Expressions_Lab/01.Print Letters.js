function printLetters(input) {
    let arr = input.split('')
    for (let i = 0; i < arr.length; i++) {
        console.log(`str[${i}] -> ${arr[i]}`)
    }
}

printLetters('Hello, World!')