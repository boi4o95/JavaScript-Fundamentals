function multiplicationTable(n) {
    console.log("<table border=\"1\">");

    for (let row = 1; row < n + 1; row++) {
        if (row === 1) {
            let tableHeader = "  <tr><th>x</th>";
            for (let i = 1; i <= n; i++) {
                tableHeader += `<th>${i}</th>`;
            }
            console.log(tableHeader + "</tr>");
        }
        let tableLine = '  '+`<tr><th>${row}</th>`;
        for (let j = 1; j <= n; j++) {
            tableLine += `<td>${j * row}</td>`;
        }
        console.log(tableLine + "</tr>");
    }
    console.log("</table>");
}
 