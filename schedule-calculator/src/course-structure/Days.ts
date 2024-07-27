export enum Days {
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
}

export function stringToDaysList(daysStr: string) {
    return (daysStr.match(/[A-Z][a-z]*/g) || []).map((dayStr) =>
        stringToDay(dayStr)
    )
}

function stringToDay(dayStr) {
    switch (dayStr) {
        case 'U':
            return Days.sunday
        case 'M':
            return Days.monday
        case 'T':
            return Days.tuesday
        case 'W':
            return Days.wednesday
        case 'Th':
            return Days.thursday
        case 'F':
            return Days.friday
        case 'S':
            return Days.saturday
        default:
            return null
    }
}
