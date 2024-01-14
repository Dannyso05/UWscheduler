import Timeslot from "./Timeslot";
import Section from "./Section";
import WeeklySection from "./WeeklySection";
import { ComponentSection } from "./ComponentSection";

/**
 * Represents a specific section of a class. This section happens once.
 */
export default class OneTimeSection extends Section {
    // date must only store month, date, year (not seconds, minutes, etc.).
    private date: Date;
    private timeslot: Timeslot;

    constructor(classNumber: number, componentSection: ComponentSection, date: Date, timeslot: Timeslot,
        enrolCap: number, enrolTotal: number, instructor: String) {
        super(classNumber, componentSection, enrolCap, enrolTotal, instructor);
        this.date = date;
        this.timeslot = timeslot;
    }

    doesOverlap(otherSection: Section): boolean {
        if (otherSection instanceof WeeklySection) {
            return false;
        } else if (otherSection instanceof OneTimeSection) {
            return this.getDate().getTime() == otherSection.getDate().getTime() && this.getTimeslot().doesOverlap(otherSection.getTimeslot());
        }

        return false;
    }

    isTimeEqual(otherSection: Section): boolean {
        if (otherSection instanceof WeeklySection) {
            return false;
        } else if (otherSection instanceof OneTimeSection) {
            return (this.date.getTime() == otherSection.getDate().getTime()) && this.timeslot.equals(otherSection.getTimeslot());
        }

        return false;
    }

    getDate(): Date { return this.date; }
    setDate(date: Date) { this.date = date; }

    getTimeslot(): Timeslot { return this.timeslot; }
    setTimeslot(timeslot: Timeslot) { this.timeslot = timeslot; }
}