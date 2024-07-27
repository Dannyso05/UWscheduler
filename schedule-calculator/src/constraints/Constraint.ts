import SchedulePossibilities from '../course-structure/SchedulePossibilities'
import Section from '../course-structure/Section'
import SectionPossibilities from '../course-structure/SectionPossibilities'
import { ConstraintApplied } from './ConstraintApplied'

export default abstract class Constraint {
    protected _constraintApplied: ConstraintApplied

    constructor() {
        this._constraintApplied = ConstraintApplied.beforeSectionGrouping
    }

    abstract isValid(
        currentSchedule: SchedulePossibilities | undefined,
        section: SectionPossibilities | Section
    ): boolean | boolean[]

    get constraintApplied(): ConstraintApplied {
        return this._constraintApplied
    }
    set constraintApplied(constraintApplied: ConstraintApplied) {
        this._constraintApplied = constraintApplied
    }
}
