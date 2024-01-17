import SchedulePossibilities from "../course-structure/SchedulePossibilities";
import Section from "../course-structure/Section";
import Timeslot from "../course-structure/Timeslot";
import WeeklySection from "../course-structure/WeeklySection";
import Constraint from "./Constraint";
import { ConstraintApplied } from "./ConstraintApplied";

export default class WeeklyTimeConstraint extends Constraint {
    private _mustBeWithin: boolean;
    private _timeslot: Timeslot;

    constructor() {
        super();
        this._constraintApplied = ConstraintApplied.beforeSectionGrouping;
    }

    isValid(currentSchedule: SchedulePossibilities, section: Section): boolean {
        if (section instanceof WeeklySection) {
            if (this.mustBeWithin) {
                return section.timeslot.isWithin(this.timeslot);
            }

            return !section.timeslot.doesOverlap(this.timeslot);
        }

        return true;
    }

    get mustBeWithin(): boolean { return this._mustBeWithin; }
    set mustBeWithin(mustBeWithin: boolean) { this._mustBeWithin = mustBeWithin; }

    get timeslot(): Timeslot { return this._timeslot; }
    set timeslot(timeslot: Timeslot) { this._timeslot = timeslot; }
}