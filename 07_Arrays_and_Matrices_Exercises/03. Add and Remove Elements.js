function addAndRemove(input) {
    let result = []
    let val = 0
    for (let i = 0; i < input.length; i++) {
        val++
        if (input[i] == "add") {
            result.push(val)
        } else {
            result.pop(input[i])
        }
    }
    {   if (result.length === 0) {
        console.log('Empty')
    } else
        console.log(result.join('\n'))
    }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])

