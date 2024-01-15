import SectionPossibilities from "./SectionPossibilities";


export default class SchedulePossibilities {
    // All SectionPossibilities have a length of at least 1.
    private sectionPossibilitiesList: SectionPossibilities[];

    constructor() {
        this.sectionPossibilitiesList = [];
    }

    private getSectionPossibilitiesList(): SectionPossibilities[] { return this.sectionPossibilitiesList; }

    canAddSectionPossibilities(sectionPossibilities: SectionPossibilities): boolean {
        if (sectionPossibilities.getLength() == 0) {
            return false;
        }

        for (var sps of this.sectionPossibilitiesList) {
            if (sps.getSection(0).doesOverlap(sectionPossibilities.getSection(0))) {
                return false;
            }
        }

        return true;
    }

    addSectionPossibilities(sectionPossibilities: SectionPossibilities): boolean {
        if (this.canAddSectionPossibilities(sectionPossibilities)) {
            this.sectionPossibilitiesList.push(sectionPossibilities);
            return true;
        }

        return false;
    }

    getSectionPossibilities(index: number): SectionPossibilities {
        return this.sectionPossibilitiesList[index];
    }

    getLength(): number {
        return this.sectionPossibilitiesList.length;
    }
}