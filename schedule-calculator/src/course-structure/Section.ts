import Timeslot from "./Timeslot";
import { Days } from "./Days";
import { ComponentSection } from "./ComponentSection";

/**
 * Represents a specific section of a class.
 */
export default abstract class Section {
    private classNumber: number;
    private componentSection: ComponentSection;
    private enrolCap: number;
    private enrolTotal: number;
    private instructor: String;

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

    getClassNumber(): number { return this.classNumber; }
    setClassNumber(classNumber: number): void { this.classNumber = classNumber; }

    getComponentSection(): ComponentSection { return this.componentSection; }
    setComponentSection(componentSection: ComponentSection): void { this.componentSection = componentSection; }

    getEnrolCap(): number { return this.enrolCap; }
    setEnrolCap(enrolCap: number): void { this.enrolCap = enrolCap; }

    getEnrolTotal(): number { return this.enrolTotal; }
    setEnrolTotal(enrolTotal: number): void { this.enrolTotal = enrolTotal; }

    getInstructor(): String { return this.instructor; }
    setInstructor(instructor: String): void { this.instructor = instructor; }
}
