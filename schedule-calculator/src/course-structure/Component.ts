export enum Component {
    LEC = 'LEC',
    OLN = 'OLN',
    ORL = 'ORL',
    PRA = 'PRA',
    PRJ = 'PRJ',
    RDG = 'RDG',
    SEM = 'SEM',
    STU = 'STU',
    TST = 'TST',
    TUT = 'TUT',
    WRK = 'WRK',
    WSP = 'WSP',
    LAB = 'LAB',
}

export function isOneTimeComponent(component: Component) {
    return component === Component.TST || component === Component.WSP
}
