import Section from "./Section";

/**
 * A list of sections that are all of the same class, component section, date, and timeslot.
 * Used to categorize options that students have to pick from.
 */
export default class SectionPossibilities {
    private sections: Section[];
    
    constructor(sections: Section[]) {
        this.sections = [];

        for (var section of sections) {
            this.addSection(section);
        }
    }

    private getSections(): Section[] {
        return this.sections;
    }

    getSection(index: number): Section {
        return this.sections[index];
    }

    canAddSection(section: Section): boolean {
        if (this.sections.length == 0) {
            return true;
        }

        return this.sections[0].getComponentSection() == section.getComponentSection() && this.sections[0].isTimeEqual(section);
    }

    addSection(section: Section): boolean {
        if (this.canAddSection(section)) {
            this.sections.push(section);
            return true;
        }

        return false;
    }

    getLength(): number {
        return this.sections.length;
    }
}