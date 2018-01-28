function matchAllWords(text) {
    console.log(text.toString().match(/\w+/g).join('|'))
}

matchAllWords('Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !')