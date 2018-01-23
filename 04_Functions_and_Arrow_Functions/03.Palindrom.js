function palindrom(a) {
    return a.split('').reverse().join("") === a
}

console.log(palindrom("racecar"))