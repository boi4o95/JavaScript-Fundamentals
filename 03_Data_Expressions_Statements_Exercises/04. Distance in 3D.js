function distance([x, y, z ,x2, y2, z2]) {
    let  result = Math.pow(x - x2, 2) + Math.pow(y - y2, 2) + Math.pow(z - z2, 2)
    console.log(Math.sqrt(result))
}

distance([1, 1, 0, 5, 4, 0])