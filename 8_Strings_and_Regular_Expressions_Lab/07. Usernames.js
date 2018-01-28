function username(input) {
    let result = []
    for (let i = 0; i < input.length; i++) {
        let [name, domain] = input[i].split('@')
        let username = name + "."
        let domainParts = domain.split('.')
        domainParts.forEach(p => username += p[0])
        result.push(username)
    }
    console.log(result.join(', '))
}

username(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])