import Section from "./Section";
import { ComponentSection } from "./ComponentSection";

/**
 * Represents a full class, with all it's sections.
 */
export default class Course {
    private _subject: String;
    private _catalogNumber: number;
    private _units: number;
    private _courseTitle: String;
    private _sections: Section[];
    private _components: Map<ComponentSection, Section[]>;
    private _instructors: String[];

    constructor(subject: string, catalogNumber: number, units: number, courseTitle: string, sections: Section[]) {
        this._subject = subject;
        this._catalogNumber = catalogNumber;
        this._units = units;
        this._courseTitle = courseTitle;
        this._sections = sections;
        this._components = new Map();
        this.makeComponents();
        this._instructors = [];
    }

    get components(): Map<ComponentSection, Section[]> { return this._components; }
    makeComponents(): void {
        this._components = new Map();
        for (var section of this._sections) {
            this.pushToComponents(section);
        }
    }

    private pushToComponents(section: Section) {
        if (!this.components.has(section.componentSection)) {
            this.components.set(section.componentSection, []);
        }
        this.components.get(section.componentSection)?.push(section);
    }

    get name(): String {
        return this._subject + " " + this._catalogNumber.toString();
    }

    get subject(): String { return this._subject; }
    set subject(subject: String) { this._subject = subject; }

    get catalogNumber(): number { return this._catalogNumber; }
    set catalogNumber(catalogNumber: number) { this._catalogNumber = catalogNumber; }

    get units(): number { return this._units; }
    set units(units: number) { this._units = units; }

    get courseTitle(): String { return this._courseTitle; }
    set courseTitle(courseTitle: String) { this._courseTitle = courseTitle; }

    get sections(): Section[] { return this._sections; }
    set sections(sections: Section[]) {
        this._sections = sections;
        this.makeComponents();
    }

    get instructors(): String[] { return this._instructors; }
    set instructors(instructors: String[]) { this._instructors = instructors; }
}