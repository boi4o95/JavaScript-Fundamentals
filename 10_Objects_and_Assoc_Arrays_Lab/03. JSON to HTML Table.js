function htmlTable(input) {
    let html = '<table>\n'
    html += '   <tr>'
    let arr = JSON.parse(input)

    for (let key of Object.keys(arr[0])) {
        html += `<th>${key}</th>`
    }

    html += '</tr>\n'
    for (let obj of arr) {
        html += '   <tr>';
        for (let value of Object.keys(obj)) {
            html += '<td>' + escapingChars(obj[value])+'</td>'
        }
        html+='</tr>\n';
    }

    return html +'</table>'

    function escapingChars(str) {
        return str.toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

console.log(htmlTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'))