function variableName(str) {
    let regex = /\b_([a-zA-Z0-9]+)\b/g
    let result = []
    let mach
    while (mach = regex.exec(str)){
        result.push(mach[1])
    }

    console.log(result.join(','))
}

variableName('The _id and _age variables are both integers.')