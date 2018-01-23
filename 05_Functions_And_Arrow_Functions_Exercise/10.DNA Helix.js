function dnaHelix(input) {
    let lengthDNA = input
    let sequence = 'ATCGTTAGGG'
    let count = 0

    for (let i = 0; i < lengthDNA; i++) {
        if (i % 4 === 0) {
            console.log('**' + sequence[count] + sequence[count + 1] + '**')
        } else if (i % 2 === 1) {
            console.log('*' + sequence[count]+ '--' + sequence[count + 1] + '*')
        } else {
            console.log(sequence[count]+ '----' + sequence[count + 1]);
        }
        if (count + 1 === 9) {
            count = 0
        } else {
            count += 2
        }
    }
}

dnaHelix(4)
