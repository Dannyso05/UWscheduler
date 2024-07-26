export enum Component {
    LEC, OLN, ORL, PRA, PRJ, RDG, SEM, STU, TST, TUT, WRK, WSP, LAB
}

export function stringToComponent(componentStr: string): Component {
    switch (componentStr) {
        case 'LEC':
            return Component.LEC;
        case 'OLN':
            return Component.OLN;
        case 'ORL':
            return Component.ORL;
        case 'PRA':
            return Component.PRA;
        case 'PRJ':
            return Component.PRJ;
        case 'RDG':
            return Component.RDG;
        case 'SEM':
            return Component.SEM;
        case 'STU':
            return Component.STU;
        case 'TST':
            return Component.TST;
        case 'TUT':
            return Component.TUT;
        case 'WRK':
            return Component.WRK;
        case 'WSP':
            return Component.WSP;
        case 'LAB':
            return Component.LAB;
        default:
            return null;
    }
}

export function isOneTimeComponent(component: Component) {
    return component === Component.TST || component === Component.WSP
}