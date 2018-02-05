function userNames(input) {
    let userName = new Set();
    for (let name of input) {
        userName.add(name);
    }

    function sortUserName(nameA, nameB) {
        if (nameA.length < nameB.length) {
            return -1;
        }
        if (nameA.length > nameB.length) {
            return 1;
        }

        return nameA.localeCompare(nameB);
    }

    console.log([...userName].sort(sortUserName).join('\n'));
}

userNames(["Denise","Ignatius","Iris","Isacc","Indie","Dean","Donatello","Enfuego","Benjamin","Biser","Bounty","Renard","Rot"])