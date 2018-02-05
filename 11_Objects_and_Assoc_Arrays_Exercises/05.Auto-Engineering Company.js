function autoEngineering(input) {
    let cars = new Map();

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(/\s+\|\s+/g);

        let carBrand = current[0];
        let carModel = current[1];
        let producedCar = Number(current[2]);

        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map())
        }
        if (!cars.get(carBrand).has(carModel)) {
            cars.get(carBrand).set(carModel, 0)
        }
        cars.get(carBrand).set(carModel, cars.get(carBrand).get(carModel) + producedCar)
    }

    for (let [carsName, carModel] of cars) {
        console.log(carsName)

        for (let [carModels, producedCar] of carModel) {
            console.log(`###${carModels} -> ${producedCar}`)
        }
    }
}

autoEngineering(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);