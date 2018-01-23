function solution(arr) {
    aggregate(0, (a, b) => {return a + b})
    aggregate(0, (a, b) => {return a + 1 / b})
    aggregate('', (a, b) => {return a + b})
    function aggregate(initialVale, arrow) {
        for (let i = 0; i < arr.length ; i++) {
            initialVale = arrow(initialVale, arr[i])
        }
        console.log(initialVale)
    }
}
solution([1, 2, 3])