function word(string, r) {
    let regex = new RegExp('\\b' + r + '\\b', 'ig')
    string = string.toLowerCase()
    let count = 0
    let mach
    while (mach = regex.exec(string)){
       count++
    }

    console.log(count)
}
 word('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there')