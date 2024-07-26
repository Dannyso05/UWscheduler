import SectionPossibilities from "./SectionPossibilities";


export default class SchedulePossibilities {
    // All SectionPossibilities have a length of at least 1.
    private _sectionPossibilitiesList: SectionPossibilities[];

    constructor();
    constructor(sectionPossibilitiesList: SectionPossibilities[]);
    constructor(sectionPossibilitiesList?: SectionPossibilities[]) {
        this._sectionPossibilitiesList = [];
        if (sectionPossibilitiesList != undefined) {
            this.addMultipleSectionPossibilities(sectionPossibilitiesList);
        }
    }

    private getSectionPossibilitiesList(): SectionPossibilities[] { return this._sectionPossibilitiesList; }

    canAddSectionPossibilities(sectionPossibilities: SectionPossibilities): boolean {
        if (sectionPossibilities.length == 0) {
            return false;
        }

        for (const sps of this._sectionPossibilitiesList) {
            if (sps.getSection(0).doesOverlap(sectionPossibilities.getSection(0))) {
                return false;
            }
        }

        return true;
    }

    addSectionPossibilities(sectionPossibilities: SectionPossibilities): boolean {
        if (this.canAddSectionPossibilities(sectionPossibilities)) {
            this._sectionPossibilitiesList.push(sectionPossibilities);
            return true;
        }

        return false;
    }

    addMultipleSectionPossibilities(sections: SectionPossibilities[]): boolean[] {
        const result: boolean[] = []
        for (const section of sections) {
            result.push(this.addSectionPossibilities(section));
        }
        return result;
    }

    getSectionPossibilities(index: number): SectionPossibilities {
        return this._sectionPossibilitiesList[index];
    }

    removeSectionPossibilities(index: number): void {
        this._sectionPossibilitiesList.splice(index, 1);
    }

    removeLastSectionPossibilities(): void {
        this._sectionPossibilitiesList.splice(this._sectionPossibilitiesList.length-1, 1);
    }

    get length(): number {
        return this._sectionPossibilitiesList.length;
    }

    convertToJSON(): string {
        return JSON.stringify(this);
    }
}