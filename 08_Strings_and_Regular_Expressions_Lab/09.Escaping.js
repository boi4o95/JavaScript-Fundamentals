function escape(input) {
    let result = '<ul>\n'

    for (let str of input) {
        result += '  <li>' + escapingChars(str) + '</li>\n'
    }
    result += '</ul>'

    console.log(result)

    function escapingChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
    }
}


escape(['<b>unescaped text</b>', 'normal text'])