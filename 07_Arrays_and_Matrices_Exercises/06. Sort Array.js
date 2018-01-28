function sortArray(arr) {
    return arr.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length -b.length).join('\n')
}

console.log(sortArray(['test', 'Deny', 'omen', 'Default']));