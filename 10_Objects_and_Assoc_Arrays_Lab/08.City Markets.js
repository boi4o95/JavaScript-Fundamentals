function cityMarkets(input) {
    let townsWithProduct = new Map();

    for (let sale of input) {
        let [town, product , quantityPrice] = sale.split(/\s->\s/);
        let [quantity, price] = quantityPrice.split(/\s:\s/);

        if (!townsWithProduct.has(town)) {
            townsWithProduct.set(town, new Map());
        }

        let income = quantity * price;
        let  oldIncome = townsWithProduct.get(town).get(product);

        if (oldIncome) {
            income += oldIncome;
        }
        townsWithProduct.get(town).set(product, income);
    }
    
    let print = '';

    for (let [index, value] of townsWithProduct) {
        print += `Town - ${index}\n`
        for (let [product, price] of townsWithProduct.get(index)) {
            print += `$$$${product} : ${price}\n`
        }
    }

    return print
}

console.log(cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']));;