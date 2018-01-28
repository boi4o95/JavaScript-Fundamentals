function aggregateTable(input) {
    let sum = 0
    let list = []

    for (let inputs of input) {
        let townData = inputs.split("|")
        let townName = townData[1].trim()
        let income = Number(townData[2].trim())
        sum += income
        list.push(townName)
    }
    
    console.log(list.join(', ') + "\n" + sum)
}


aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)