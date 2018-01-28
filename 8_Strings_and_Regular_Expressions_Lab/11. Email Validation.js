function emailValidation(str) {
    let regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/
    if (regex.test(str)) {
        console.log('Valid')
    } else {
        console.log('Invalid')
    }
}

emailValidation('invalid@emai1.bg')