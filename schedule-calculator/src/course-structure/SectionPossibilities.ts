import Section from "./Section";

/**
 * A list of sections that are all of the same class, component section, date, and timeslot.
 * Used to categorize options that students have to pick from.
 */
export default class SectionPossibilities {
    private _sections: Section[];

    constructor();
    constructor(sections: Section[]);
    constructor(sections?: Section[]) {
        this._sections = [];
        if (sections != undefined) {
            this.addSections(sections);
        }
    }

    private getSections(): Section[] {
        return this._sections;
    }

    getSection(index: number): Section {
        return this._sections[index];
    }

    canAddSection(section: Section): boolean {
        if (this._sections.length == 0) {
            return true;
        }

        return this._sections[0].courseName == section.courseName && this._sections[0].component == section.component
            && this._sections[0].isTimeEqual(section);
    }

    addSection(section: Section): boolean {
        if (this.canAddSection(section)) {
            this._sections.push(section);
            return true;
        }

        return false;
    }

    addSections(sections: Section[]): boolean[] {
        const result: boolean[] = []
        for (const section of sections) {
            result.push(this.addSection(section));
        }
        return result;
    }

    get length(): number {
        return this._sections.length;
    }
}