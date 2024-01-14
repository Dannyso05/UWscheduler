import Section from "./Section";
import { ComponentSection } from "./ComponentSection";

/**
 * Represents a full class, with all it's sections.
 */
export default class Course {
    private subject: String;
    private catalogNumber: number;
    private units: number;
    private courseTitle: String;
    private sections: Section[];
    private components: Map<ComponentSection, Section[]>;
    private instructors: String[];

    constructor(subject: string, catalogNumber: number, units: number, courseTitle: string, sections: Section[]) {
        this.subject = subject;
        this.catalogNumber = catalogNumber;
        this.units = units;
        this.courseTitle = courseTitle;
        this.sections = sections;
        this.components = new Map();
        this.makeComponents();
        this.instructors = [];
    }

    getComponents(): Map<ComponentSection, Section[]> { return this.components; }
    makeComponents(): void {
        this.components = new Map();
        for (var section of this.sections) {
            this.pushToComponents(section);
        }
    }

    private pushToComponents(section: Section) {
        if (!this.components.has(section.getComponentSection())) {
            this.components.set(section.getComponentSection(), []);
        }
        this.components.get(section.getComponentSection())?.push(section);
    }

    getName(): String {
        return this.subject + " " + this.catalogNumber.toString();
    }

    getSubject(): String { return this.subject; }
    setSubject(subject: String): void { this.subject = subject; }

    getCatalogNumber(): number { return this.catalogNumber; }
    setCatalogNumber(catalogNumber: number): void { this.catalogNumber = catalogNumber; }

    getUnits(): number { return this.units; }
    setUnits(units: number): void { this.units = units; }

    getCourseTitle(): String { return this.courseTitle; }
    setCourseTitle(courseTitle: String): void { this.courseTitle = courseTitle; }

    getSections(): Section[] { return this.sections; }
    setSections(sections: Section[]): void {
        this.sections = sections;
        this.makeComponents();
    }

    getInstructors(): String[] { return this.instructors; }
    setInstructors(instructors: String[]) { this.instructors = instructors; }
}