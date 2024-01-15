import SchedulePossibilities from "../course-structure/SchedulePossibilities";
import SectionPossibilities from "../course-structure/SectionPossibilities";

export default abstract class Constraint {
    protected _duringCalculation: boolean;

    constructor() {
        this._duringCalculation = false;
    }

    abstract isValid(currentSchedule: SchedulePossibilities, section: SectionPossibilities): boolean | boolean[];

    get duringCalculation(): boolean { return this._duringCalculation; }
    set duringCalculation(duringCalculation: boolean) { this._duringCalculation = duringCalculation; }
}