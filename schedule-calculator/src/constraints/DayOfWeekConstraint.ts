import { Days } from "../course-structure/Days";
import SchedulePossibilities from "../course-structure/SchedulePossibilities";
import Section from "../course-structure/Section";
import SectionPossibilities from "../course-structure/SectionPossibilities";
import WeeklySection from "../course-structure/WeeklySection";
import Constraint from "./Constraint";
import { ConstraintApplied } from "./ConstraintApplied";

export default class DayOfWeekConstraint extends Constraint {
    private _mustBeOn: boolean;
    private _days: Days[];

    constructor();
    constructor(mustBeOn: boolean, days: Days[]);
    constructor(mustBeOn?: boolean, days?: Days[]) {
        super();
        this._mustBeOn = mustBeOn;
        this._days = days;
        this._constraintApplied = ConstraintApplied.beforeSectionGrouping;
    }

    isValid(currentSchedule: undefined, section: Section): boolean {
        if (section instanceof WeeklySection) {
            if (this.mustBeOn) {
                for (const day of section.days) {
                    if (!this.days.includes(day)) {
                        return false;
                    }
                }
            } else {
                for (const day of this.days) {
                    if (section.days.includes(day)) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    get mustBeOn(): boolean { return this._mustBeOn; }
    set mustBeOn(mustBeOn: boolean) { this._mustBeOn = mustBeOn; }

    get days(): Days[] { return this._days; }
    set days(days: Days[]) { this._days = days; }
}