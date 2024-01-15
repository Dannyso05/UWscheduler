import SchedulePossibilities from "../course-structure/SchedulePossibilities";
import SectionPossibilities from "../course-structure/SectionPossibilities";
import Timeslot from "../course-structure/Timeslot";
import Constraint from "./Constraint";

export default class TimeConstraint extends Constraint {
    private _mustBeWithin: boolean;
    private _timeslot: Timeslot;

    constructor() {
        super();
        this.duringCalculation = false;
    }

    isValid(currentSchedule: SchedulePossibilities, section: SectionPossibilities): boolean {
        throw new Error("Method not implemented.");
    }

    get mustBeWithin(): boolean { return this._mustBeWithin; }
    set mustBeWithin(mustBeWithin: boolean) { this._mustBeWithin = mustBeWithin; }

    get timeslot(): Timeslot { return this._timeslot; }
    set timeslot(timeslot: Timeslot) { this._timeslot = timeslot; }
}