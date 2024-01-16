import Section from "../course-structure/Section";
import Constraint from "./Constraint";
import { ConstraintApplied } from "./ConstraintApplied";

export default class IsOpenConstraint extends Constraint {
    constructor() { 
        super();
        this._constraintApplied = ConstraintApplied.beforeSectionGrouping;
    }

    isValid(currentSchedule: undefined, section: Section): boolean | boolean[] {
        return section.isOpen();
    }
}