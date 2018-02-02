function score(input) {
    let html = '<table>\n'
    html += '   <tr><th>name</th><th>score</th></tr>\n'
    let arr = JSON.parse(input)

    for (let obj of arr) {
        html +=`   <tr><td>${escapingChars(obj['name'])}</td><td>${Number(obj['score'])}</td></tr>\n`
    }

   return html +'</table>'

    function escapingChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

console.log(score('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));