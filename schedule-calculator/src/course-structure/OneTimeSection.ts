import Timeslot from "./Timeslot";
import Section from "./Section";
import WeeklySection from "./WeeklySection";
import { Component } from "./Component";

/**
 * Represents a specific section of a class. This section happens once.
 */
export default class OneTimeSection extends Section {
    // date must only store month, date, year (not seconds, minutes, etc.).
    private _date: Date;
    private _timeslot: Timeslot;

    constructor();
    constructor(courseName: String, classNumber: number, component: Component, componentNumber: number, date: Date, timeslot: Timeslot,
        enrolCap: number, enrolTotal: number, instructor: String);
    constructor(courseName?: String, classNumber?: number, component?: Component, componentNumber?: number, date?: Date,
        timeslot?: Timeslot, enrolCap?: number, enrolTotal?: number, instructor?: String) {
        super(courseName, classNumber, component, componentNumber, enrolCap, enrolTotal, instructor);
        this.date = date;
        this.timeslot = timeslot;
    }

    doesOverlap(otherSection: Section): boolean {
        if (otherSection instanceof WeeklySection) {
            return false;
        } else if (otherSection instanceof OneTimeSection) {
            return this.date.getTime() == otherSection.date.getTime() && this.timeslot.doesOverlap(otherSection.timeslot);
        }

        return false;
    }

    isTimeEqual(otherSection: Section): boolean {
        if (otherSection instanceof WeeklySection) {
            return false;
        } else if (otherSection instanceof OneTimeSection) {
            return (this.date.getTime() == otherSection.date.getTime()) && this.timeslot.equals(otherSection.timeslot);
        }

        return false;
    }

    get date(): Date { return this._date; }
    set date(date: Date) { this._date = date; }

    get timeslot(): Timeslot { return this._timeslot; }
    set timeslot(timeslot: Timeslot) { this._timeslot = timeslot; }
}