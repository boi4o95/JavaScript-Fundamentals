function heroicInventory(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let currentHeroArguments = input[i].split(" / ");

        let currentHeroName = currentHeroArguments[0];
        let currentHeroLevel = Number(currentHeroArguments[1]);
        //let currentHeroItem = currentHeroArguments[2].split(', ');
        let currentHeroItem = [];
        if (currentHeroArguments.length > 2) {
            currentHeroItem = currentHeroArguments[2].split(', ');
        }

        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItem
        };

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);