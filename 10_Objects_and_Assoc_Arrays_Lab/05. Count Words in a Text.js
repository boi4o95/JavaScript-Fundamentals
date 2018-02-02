function countWords(input) {
    let text = input.join('\n')
    let word = text.split(/[^A-Za-z0-9_]+/).filter(w => w !== '')
    let wordCount = {}
    for (let w of word) {
        wordCount[w] ? wordCount[w]++ : wordCount[w] = 1
    }
    console.log(JSON.stringify(wordCount))
}

countWords([ 'Far too slow, you\'re far too slow.' ])