import Timeslot from "./Timeslot";
import { Days } from "./Days";
import { ComponentSection } from "./ComponentSection";

/**
 * Represents a specific section of a class.
 */
export default abstract class Section {
    private _classNumber: number;
    private _componentSection: ComponentSection;
    private _enrolCap: number;
    private _enrolTotal: number;
    private _instructor: String;

    constructor(classNumber: number, componentSection: ComponentSection,
        enrolCap: number, enrolTotal: number, instructor: String) {
        this.classNumber = classNumber;
        this.componentSection = componentSection;
        this.enrolCap = enrolCap;
        this.enrolTotal = enrolTotal;
        this.instructor = instructor;
    }

    abstract doesOverlap(otherSection: Section): boolean;
    abstract isTimeEqual(otherSection: Section): boolean;

    isOpen(): boolean {
        return this.enrolTotal < this.enrolCap;
    }

    get classNumber(): number { return this._classNumber; }
    set classNumber(classNumber: number) { this._classNumber = classNumber; }

    get componentSection(): ComponentSection { return this._componentSection; }
    set componentSection(componentSection: ComponentSection) { this._componentSection = componentSection; }

    get enrolCap(): number { return this._enrolCap; }
    set enrolCap(enrolCap: number) { this._enrolCap = enrolCap; }

    get enrolTotal(): number { return this._enrolTotal; }
    set enrolTotal(enrolTotal: number) { this._enrolTotal = enrolTotal; }

    get instructor(): String { return this._instructor; }
    set instructor(instructor: String) { this._instructor = instructor; }
}
