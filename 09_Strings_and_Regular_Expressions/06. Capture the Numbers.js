function captureTheNumbers(arr) {
    let str = arr.toString()
    let regex = /[0-9]+/g
    let  mach = str.match(regex)
    console.log(mach.join(' '))
}

captureTheNumbers( ['The300',
    'What is that?',
    'I think its the 3rd movie.',
    'Lets watch it at 22:45' ]
)