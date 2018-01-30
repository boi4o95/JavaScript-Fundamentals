function secretData(input) {
    let str = input.join('\n');
    let regex = /(\*[A-Z]{1}[a-zA-Z]+(?=\s|$))|(\*[A-Z]{1}(?=\s|$))|(\+{1}[0-9-]{10}(?=\s|$))|(\!{1}[a-zA-Z0-9]+(?=\s|$))|(_{1}[a-zA-Z0-9]+(?=\s|$))/g
    let regExWord = /[*a-zA-Z+0-9-!_]/g
    let result = []
    let arr = []

    result = str.split(regex).filter(x => x!== undefined)

    for (let i = 0; i < result.length; i+=1){
        if (i % 2 === 0){
            arr.push(result[i])
        }
        else {
            arr.push(result[i].replace(regExWord, '|'))
        }
    }
    console.log(arr.join(''))
}

secretData(['Agent *Ivankov was in the room when it all happened.' +
    'The person in the room was heavily armed.' +
    'Agent *Ivankov had to act quick in order.' +
    'He picked up his phone and called some unknown number.' +
    'I think it was +555-49-796 ' +
    'I can\'t really remember...' +
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21' +
    'Then after that he disappeared from my sight.' +
    'As if he vanished in the shadows.' +
    'A moment, shorter than a second, later, I saw the person flying off the top floor.' +
    'I really don\'t know what happened there.This is all I saw, that night.'
])