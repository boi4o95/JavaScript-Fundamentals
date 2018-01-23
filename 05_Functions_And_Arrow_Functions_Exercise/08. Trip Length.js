function tripLength(input) {
    let distance = 0;
    function distanceBetweenTwoPoints(x1, y1, x2, y2) {
        let deltaX = x1-x2;
        let deltaY = y1-y2;
        distance = Math.sqrt(
            Math.pow(deltaX, 2)
            + Math.pow(deltaY, 2));
        return distance;
    }
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x3 = Number(input[4]);
    let y3 = Number(input[5]);

    let distance12 = distanceBetweenTwoPoints(x1, y1, x2, y2);
    let distance13 = distanceBetweenTwoPoints(x1, y1, x3, y3);
    let distance23 = distanceBetweenTwoPoints(x2, y2, x3, y3);

    function shortestDistance(distance1, distance2, distance3) {
        let s12 = distance1 + distance2;
        let s13 = distance1 + distance3;
        let s23 = distance2 + distance3;

        if(s12 < s13 && s12 < s23){
            console.log('2->1->3: ' + s12);
        }
        else if (s13 <= s12 && s13 <= s23){
            console.log('1->2->3: ' + s13);
        }
        else if (s23 <= s12 && s23 < s13){
            console.log('1->3->2: ' + s23);
        }
    }
    shortestDistance(distance12, distance13, distance23);
}
tripLength(['-1', '-2', '3.5', '0', '0', '2']);