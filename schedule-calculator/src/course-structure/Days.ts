import { convertValueToEnum } from '../utils'

export enum Days {
    sunday = 'U',
    monday = 'M',
    tuesday = 'T',
    wednesday = 'W',
    thursday = 'Th',
    friday = 'F',
    saturday = 'S',
}

export function stringToDaysList(daysStr: string) {
    return (daysStr.match(/[A-Z][a-z]*/g) || []).map((dayStr: string) =>
        convertValueToEnum(dayStr, Days)
    )
}
