import Constraint from "./constraints/Constraint";
import { ConstraintApplied } from "./constraints/ConstraintApplied";
import Course from "./course-structure/Course";
import SchedulePossibilities from "./course-structure/SchedulePossibilities";
import Section from "./course-structure/Section";
import SectionPossibilities from "./course-structure/SectionPossibilities";
import ScheduleError from "./ScheduleError";

export default class ScheduleCalculator {
    private static schedulePossibilitiesList: String[];
    private static schedulePossibilities: SchedulePossibilities;
    private static constraintMap: Map<ConstraintApplied, Constraint[]>;

    public static calculateSchedules(requiredSections: Section[], courses: Course[], constraints: Constraint[]): String | String[] {
        this.schedulePossibilitiesList = [];
        this.schedulePossibilities = new SchedulePossibilities();

        try {
            ScheduleCalculator.addRequiredSections(requiredSections);
        } catch (error) {
            return error.name + error.message;
        }

        ScheduleCalculator.createContraintMap(constraints);

        for (let course of courses) {
            
        }

        return this.schedulePossibilitiesList;
    }

    private static createContraintMap(constraints: Constraint[]): void {
        this.constraintMap = new Map();
        for (let type in ConstraintApplied) {
            if (!isNaN(Number(type))) {
                this.constraintMap.set(Number(type), []);
            }
        }

        for (let constraint of constraints) {
            this.constraintMap.get(constraint.constraintApplied).push(constraint);
        }
    }

    private static addRequiredSections(requiredSections: Section[]): void {
        for (let section of requiredSections) {
            if (!this.schedulePossibilities.addSectionPossibilities(new SectionPossibilities([section]))) {
                throw new ScheduleError("The required section: " + section.toString() + " has an overlap with another required section.");
            }
        }
    }

    static getSchedulePossibilitiesList(): String[] { return this.schedulePossibilitiesList; }
    static getSchedulePossibilities(): SchedulePossibilities { return this.schedulePossibilities; }
    static getConstraintMap(): Map<ConstraintApplied, Constraint[]> { return this.constraintMap; }
}