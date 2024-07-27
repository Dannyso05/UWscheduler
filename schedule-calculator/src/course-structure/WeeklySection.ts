import Timeslot from './Timeslot'
import Section from './Section'
import OneTimeSection from './OneTimeSection'
import { Days } from './Days'
import { Component } from './Component'
import { Campus } from './Campus'
import { LocationTaught } from './LocationTaught'

/**
 * Represents a specific section of a class. This section happens weekly.
 */
export default class WeeklySection extends Section {
    // days must be in order from sunday to saturday, as listed in ./Days.ts
    private _days: Days[]
    private _timeslot: Timeslot

    constructor(
        courseName?: string,
        classNumber?: number,
        component?: Component,
        componentNumber?: number,
        days?: Days[],
        timeslot?: Timeslot,
        enrolCap?: number,
        enrolTotal?: number,
        instructor?: string,
        campus?: Campus,
        locationTaught?: LocationTaught
    ) {
        super(
            courseName,
            classNumber,
            component,
            componentNumber,
            enrolCap,
            enrolTotal,
            instructor,
            campus,
            locationTaught
        )
        this.days = days
        this.timeslot = timeslot
    }

    isTimeEqual(otherSection: Section): boolean {
        if (otherSection instanceof WeeklySection) {
            return (
                this.areDaysEqual(otherSection) &&
                this.timeslot.equals(otherSection.timeslot)
            )
        } else if (otherSection instanceof OneTimeSection) {
            return false
        }

        return false
    }

    areDaysEqual(otherSection: WeeklySection): boolean {
        if (this.days.length != otherSection.days.length) {
            return false
        }

        for (let i = 0; i < this.days.length; i++) {
            if (this.days[i] != otherSection.days[i]) {
                return false
            }
        }

        return true
    }

    doesOverlap(otherSection: Section): boolean {
        if (otherSection instanceof WeeklySection) {
            return (
                this.timeslot.doesOverlap(otherSection.timeslot) &&
                this.doDaysOverlap(otherSection)
            )
        } else if (otherSection instanceof OneTimeSection) {
            return otherSection.doesOverlap(this)
        }

        return false
    }

    doDaysOverlap(otherSection: WeeklySection): boolean {
        for (const day of this.days) {
            if (otherSection.days.includes(day)) {
                return true
            }
        }
        return false
    }

    get days(): Days[] {
        return this._days
    }
    set days(days: Days[]) {
        this._days = days
    }

    get timeslot(): Timeslot {
        return this._timeslot
    }
    set timeslot(timeslot: Timeslot) {
        this._timeslot = timeslot
    }
}
