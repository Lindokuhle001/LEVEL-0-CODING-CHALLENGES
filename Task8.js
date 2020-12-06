function getHoursAndMinutes (number) {
    let hoursCounter = 0;
    while (number >= 60 ) {
        number -= 60;
        hoursCounter += 1;
    }
    return `${hoursCounter} hours, ${number} minutes`
}