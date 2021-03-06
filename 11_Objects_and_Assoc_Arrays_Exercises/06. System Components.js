function systemComponents(input) {
    let catalogue = new Map;
    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(/\s\|\s/);
        let system = current[0];
        let component = current[1];
        let subComponent = current[2];

        if (!catalogue.has(system)) {
            catalogue.set(system, new Map);
        }

        if (!catalogue.get(system).has(component)) {
            catalogue.get(system).set(component, [])
        }
        catalogue.get(system).get(component).push(subComponent);
    }
    function sortSystemComparator(a, b, catalogue) {
        let aComponents = catalogue.get(a).size;
        let bComponents = catalogue.get(b).size;
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return a.toLowerCase().localeCompare(b.toLocaleLowerCase());
    }

    let systems = [...catalogue.keys()].sort((a, b) => sortSystemComparator(a, b, catalogue));
    for (let system of systems) {
        console.log(system);
        let components = [...catalogue.get(system).keys()].sort((s1, s2) => catalogue.get(system).get(s2).length - catalogue.get(system).get(s1).length);
        for (let component of components) {
            console.log(`|||${component}`);
            for (let subComponent of catalogue.get(system).get(component)) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}

systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);