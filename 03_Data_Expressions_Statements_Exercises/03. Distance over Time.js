function distanceTime([speedA, speedB, time]) {
    let delta = Math.abs(speedA - speedB)
    console.log(delta*time*1000/3600)
}

distanceTime([11, 10, 120])