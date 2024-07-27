export enum Campus {
    UW,
    CGC,
    REN,
    STJ,
    UTD,
    WLU,
    BLND,
    BLNDG,
    BLNDJ,
    BLNDR,
    BLNDT,
    ONLN,
    ONLNG,
    ONLNJ,
    ONLNR,
    ONLNT,
    OFF,
}

export function stringToCampus(campusStr: string): Campus {
    switch (campusStr) {
        case 'UW':
            return Campus.UW
        case 'CGC':
            return Campus.CGC
        case 'REN':
            return Campus.REN
        case 'STJ':
            return Campus.STJ
        case 'UTD':
            return Campus.UTD
        case 'WLU':
            return Campus.WLU
        case 'BLND':
            return Campus.BLND
        case 'BLNDG':
            return Campus.BLNDG
        case 'BLNDJ':
            return Campus.BLNDJ
        case 'BLNDR':
            return Campus.BLNDR
        case 'BLNDT':
            return Campus.BLNDT
        case 'ONLN':
            return Campus.ONLN
        case 'ONLNG':
            return Campus.ONLNG
        case 'ONLNJ':
            return Campus.ONLNJ
        case 'ONLNR':
            return Campus.ONLNR
        case 'ONLNT':
            return Campus.ONLNT
        case 'OFF':
            return Campus.OFF
        default:
            return null
    }
}
