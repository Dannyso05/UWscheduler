import SchedulePossibilities from "../course-structure/SchedulePossibilities";
import SectionPossibilities from "../course-structure/SectionPossibilities";
import Timeslot from "../course-structure/Timeslot";
import WeeklySection from "../course-structure/WeeklySection";
import Constraint from "./Constraint";
import { ConstraintApplied } from "./ConstraintApplied";

export default class WeeklyTimeConstraint extends Constraint {
    private _mustBeWithin: boolean;
    private _timeslot: Timeslot;

    constructor() {
        super();
        this._constraintApplied = ConstraintApplied.afterSectionGrouping;
    }

    isValid(currentSchedule: SchedulePossibilities, section: SectionPossibilities): boolean {
        if (section.length == 0) {
            return true;
        }

        let firstSection = section.getSection(0);

        if (firstSection instanceof WeeklySection) {
            if (this.mustBeWithin) {
                return firstSection.timeslot.isWithin(this.timeslot);
            }

            return !firstSection.timeslot.doesOverlap(this.timeslot);
        }

        return true;
    }

    get mustBeWithin(): boolean { return this._mustBeWithin; }
    set mustBeWithin(mustBeWithin: boolean) { this._mustBeWithin = mustBeWithin; }

    get timeslot(): Timeslot { return this._timeslot; }
    set timeslot(timeslot: Timeslot) { this._timeslot = timeslot; }
}