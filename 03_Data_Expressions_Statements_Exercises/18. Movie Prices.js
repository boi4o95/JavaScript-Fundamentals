function moviePrices([title, day]) {
    let Title = title.toLowerCase()
    let Day = day.toLowerCase()
    if (Title === "the godfather") {
        switch (Day) {
            case "monday": return 12
            case "tuesday": return 10
            case "wednesday": return 15
            case "thursday": return 12.50
            case "friday": return 15
            case "saturday": return 25
            case "sunday": return 30
            default: return 'error'
        }
    } else if (Title === "schindler's list") {
        switch (Day) {
            case "monday": return 8.50
            case "tuesday": return 8.50
            case "wednesday": return 8.50
            case "thursday": return 8.50
            case "friday": return 8.50
            case "saturday": return 15
            case "sunday": return 15
            default: return 'error'
        }
    } else if (Title === "casablanca") {
        switch (Day) {
            case "monday": return 8
            case "tuesday": return 8
            case "wednesday": return 8
            case "thursday": return 18
            case "friday": return 8
            case "saturday": return 10
            case "sunday": return 10
            default: return 'error'
        }
    } else if (Title === "the wizard of oz") {
        switch (Day) {
            case "monday": return 10
            case "tuesday": return 10
            case "wednesday": return 10
            case "thursday": return 10
            case "friday": return 10
            case "saturday": return 15
            case "sunday": return 15
            default: return 'error'
        }
    } else {
        return 'error'
    }
}

console.log(moviePrices(["THE GODFATHER", "SUNDAY"]));