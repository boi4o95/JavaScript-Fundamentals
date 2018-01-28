function concatenateReversed(input) {
    let str = input.join('')
    let chars = Array.from(str)
    let revChars = chars.reverse()
    let revStr = revChars.join('')
    console.log(revStr)
}

concatenateReversed(['I', 'am', 'student'])