function matchTheDates(str) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2,2})-(\b[0-9]{4,4})/gm
    let mach = regex.exec(str)
    while (mach){
        console.log(`${mach[0]} (Day: ${mach[1]}, Month: ${mach[2]}, Year: ${mach[3]})`)
        mach = regex.exec(str)
    }
}

matchTheDates('I am born on 30-Dec-1994.\n' +
    'This is not date: 512-Jan-1996.\n' +
    'My father is born on the 29-Jul-1955.\n')