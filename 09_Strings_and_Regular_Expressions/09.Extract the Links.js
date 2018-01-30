function extractTheLinks(str) {
    let regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g
    let result = []
    let mach
    while (mach = regex.exec(str)){
        result.push(mach[0])
    }

    console.log(result.join('\n'))
}


extractTheLinks('Join WebStars now for free, at www.web-stars.com\n' +
    'You can also support our partners:\n' +
    'Internet - www.internet.com\n' +
    'WebSpiders - www.webspiders101.com\n' +
    'Sentinel - www.sentinel.-ko \n')