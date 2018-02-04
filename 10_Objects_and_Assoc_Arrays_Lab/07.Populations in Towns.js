function populationsTowns(dataRows) {
    let total = new Map()

    for (let dataRow of dataRows) {
        let [town, populations] = dataRow.split(/\s*<->\s*/)
        populations = Number(populations)
        if (total.has(town)) {
            total.set(town, total.get(town) + populations)
        } else {
            total.set(town, populations)
        }
    }

    for (let [town, sum] of total) {
        console.log(town + " : " + sum)
    }
}

populationsTowns(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000 '
])