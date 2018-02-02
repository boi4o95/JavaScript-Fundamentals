function townsToJSON(towns) {
    let townsStr = []

    for (let town of towns.slice(1)) {
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/)
        let townObj = {Town: townName ,Latitude: Number(lat), Longitude: Number(lng)}
        townsStr.push(townObj)
    }

    console.log(JSON.stringify(townsStr))
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)