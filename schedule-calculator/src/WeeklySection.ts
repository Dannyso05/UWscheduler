import Timeslot from "./Timeslot";
import Section from "./Section";
import OneTimeSection from "./OneTimeSection";
import { Days } from "./Days";
import { ComponentSection } from "./ComponentSection";

/**
 * Represents a specific section of a class. This section happens weekly.
 */
export default class WeeklySection extends Section {
    // days must be in order from sunday to saturday, as listed in ./Days.ts
    private days: Days[];
    private timeslot: Timeslot;

    constructor(classNumber: number, componentSection: ComponentSection, days: Days[], timeslot: Timeslot,
        enrolCap: number, enrolTotal: number, instructor: String) {
        super(classNumber, componentSection, enrolCap, enrolTotal, instructor);
        this.days = days;
        this.timeslot = timeslot;
    }

    isTimeEqual(otherSection: Section): boolean {
        if (otherSection instanceof WeeklySection) {
            return this.areDaysEqual(otherSection) && this.getTimeslot().equals(otherSection.getTimeslot());
        } else if (otherSection instanceof OneTimeSection) {
            return false;
        }

        return false;
    }

    areDaysEqual(otherSection: WeeklySection): boolean {
        if (this.days.length != otherSection.getDays().length) {
            return false;
        }

        for (let i = 0; i < this.days.length; i++) {
            if (this.days[i] != otherSection.getDays()[i]) {
                return false;
            }
        }

        return true;
    }

    doesOverlap(otherSection: Section): boolean {
        if (otherSection instanceof WeeklySection) {
            return this.getTimeslot().doesOverlap(otherSection.getTimeslot()) && this.doDaysOverlap(otherSection);
        } else if (otherSection instanceof OneTimeSection) {
            return otherSection.doesOverlap(this);
        }

        return false;
    }

    doDaysOverlap(otherSection: WeeklySection): boolean {
        for (var day of this.getDays()) {
            if (otherSection.getDays().includes(day)) {
                return true;
            }
        }
        return false;
    }

    getDays(): Days[] { return this.days; }
    setDays(days: Days[]): void { this.days = days; }

    getTimeslot(): Timeslot { return this.timeslot; }
    setTimeslot(timeslot: Timeslot): void { this.timeslot = timeslot; }
}