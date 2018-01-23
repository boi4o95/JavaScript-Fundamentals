function tag([fileLocation, alternateText]) {
    console.log(`<img src="${fileLocation}" alt="${alternateText}">`)
}

tag(['smiley.gif', 'Smiley Face'])