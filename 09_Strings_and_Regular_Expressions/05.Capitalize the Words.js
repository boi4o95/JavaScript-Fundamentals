function capitalizeTheWords(input) {
    let string = input.toString().toLowerCase().split(' ')
    let result = []
    for (let str of string) {
        str = str.charAt(0).toUpperCase() + str.slice(1)
        result.push(str)
    }
    console.log(result.join(' '))
}

capitalizeTheWords('Capitalize these words')