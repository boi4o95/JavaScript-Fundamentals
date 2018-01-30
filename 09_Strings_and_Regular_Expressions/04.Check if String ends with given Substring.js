function string(str1, str2) {
    let splitString1 = str1.split(' ')
    let splitString2 = str2.split(' ')
    if (splitString1.pop() === splitString2.pop()) {
        console.log('true')
    } else {
        console.log('false')
    }
}