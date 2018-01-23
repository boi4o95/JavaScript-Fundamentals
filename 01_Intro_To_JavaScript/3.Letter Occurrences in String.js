function Letter(str, n) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === n) {
            count++;
        }
    }
    return count;
}

Letter('hello', 'l');