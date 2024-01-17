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
    private static sectionPossibilitiesArray: SectionPossibilities[][];

    public static calculateSchedules(requiredSections: Section[], courses: Course[], constraints: Constraint[]): String | String[] | never {
        this.schedulePossibilitiesList = [];
        this.schedulePossibilities = new SchedulePossibilities();

        ScheduleCalculator.addRequiredSections(requiredSections);
        ScheduleCalculator.createContraintMap(constraints);
        ScheduleCalculator.createSectionPossibilitiesArray(courses);

        ScheduleCalculator.createAllPossibleSchedules(0);

        return this.schedulePossibilitiesList;
    }

    private static createAllPossibleSchedules(spaCurrentIndex: number): void {
        if (spaCurrentIndex >= this.sectionPossibilitiesArray.length) {
            this.schedulePossibilitiesList.push(this.schedulePossibilities.convertToJSON());
            return;
        }

        for (const sectionPossibilities of this.sectionPossibilitiesArray[spaCurrentIndex]) {
            if (this.satisfyConstraints(this.schedulePossibilities, sectionPossibilities, this.constraintMap.get(ConstraintApplied.duringCalculation))) {
                if (this.schedulePossibilities.addSectionPossibilities(sectionPossibilities)) {
                    this.createAllPossibleSchedules(spaCurrentIndex + 1);
                    this.schedulePossibilities.removeLastSectionPossibilities();
                }
            }
        }
    }

    private static createSectionPossibilitiesArray(courses: Course[]) {
        let possibilitiesAdded: SectionPossibilities[];
        this.sectionPossibilitiesArray = [];
        for (let course of courses) {
            for (let [componentSection, sections] of Array.from(course.components.entries())) {
                possibilitiesAdded = [];
                for (let section of sections) {
                    if (this.satisfyConstraints(undefined, section, this.constraintMap.get(ConstraintApplied.beforeSectionGrouping))) {
                        this.addSectionToPossibilitiesAdded(section, possibilitiesAdded);
                    }
                }
                this.sectionPossibilitiesArray.push(possibilitiesAdded);
            }
        }
        this.sectionPossibilitiesArray.sort((sp1, sp2) => sp1.length - sp2.length);
    }

    private static addSectionToPossibilitiesAdded(section: Section, possibilitiesAdded: SectionPossibilities[]): void {
        let added = false;
        for (let possibilities of possibilitiesAdded) {
            if (possibilities.addSection(section)) {
                added = true;
                break;
            }
        }

        if (!added) {
            possibilitiesAdded.push(new SectionPossibilities([section]))
        }
    }

    private static satisfyConstraints(currentSchedule: SchedulePossibilities | undefined,
        section: SectionPossibilities | Section, constraints: Constraint[]): boolean {
        for (let constraint of constraints) {
            if (!constraint.isValid(currentSchedule, section)) {
                return false;
            }
        }

        return true;
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

    static getSectionPossibilitiesArray(): SectionPossibilities[][] { return this.sectionPossibilitiesArray; }
    static getSchedulePossibilitiesList(): String[] { return this.schedulePossibilitiesList; }
    static getSchedulePossibilities(): SchedulePossibilities { return this.schedulePossibilities; }
    static getConstraintMap(): Map<ConstraintApplied, Constraint[]> { return this.constraintMap; }
}