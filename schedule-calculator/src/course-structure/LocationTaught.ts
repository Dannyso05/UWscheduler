export enum LocationTaught {
    U,
    G,
    J,
    L,
    R,
    UTD,
    ONLINE,
    STRATFORD,
}

export function stringToLocationTaught(locationStr: string) {
    switch (locationStr) {
        case 'U':
            return LocationTaught.U
        case 'G':
            return LocationTaught.G
        case 'J':
            return LocationTaught.J
        case 'L':
            return LocationTaught.L
        case 'R':
            return LocationTaught.R
        case 'UTD':
            return LocationTaught.UTD
        case 'ONLINE':
            return LocationTaught.ONLINE
        case 'STRATFORD':
            return LocationTaught.STRATFORD
        default:
            null
    }
}
