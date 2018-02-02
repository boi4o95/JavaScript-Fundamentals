function countWords(inputLines) {
    let words = inputLines.join('\n').toLowerCase().split(/[^A-Za-z0-9_]+/).filter(w => w !== '');
    let wordsCount = new Map();
    for (let something of words) {
        if (wordsCount.has(something)) {
            wordsCount.set(something, wordsCount.get(something) + 1)
        }
        else {
            wordsCount.set(something, 1)
        }
    }
    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach(w=>console.log("\'" + w + "\'" + " -> " + wordsCount.get(w) + ' times'))
}

countWords(['Far too slow, you\'re far too slow.'])