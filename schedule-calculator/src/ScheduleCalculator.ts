import Constraint from './constraints/Constraint'
import { ConstraintApplied } from './constraints/ConstraintApplied'
import Course from './course-structure/Course'
import SchedulePossibilities, {
    SchedulePossibilitiesDict,
} from './course-structure/SchedulePossibilities'
import Section from './course-structure/Section'
import SectionPossibilities from './course-structure/SectionPossibilities'
import ScheduleError from './ScheduleError'

export type ConstraintMap = Map<ConstraintApplied, Constraint[]>

export default function calculateSchedules(
    requiredSections: Section[],
    courses: Course[],
    constraints: Constraint[]
): SchedulePossibilitiesDict[] {
    const schedulePossibilities = new SchedulePossibilities()

    addRequiredSections(schedulePossibilities, requiredSections)
    const constraintMap = createContraintMap(constraints)
    const sectionPossibilitiesArray = createSectionPossibilitiesArray(
        constraintMap,
        courses
    )

    const schedulePossibilitiesList: SchedulePossibilitiesDict[] = []
    createAllPossibleSchedules(
        schedulePossibilities,
        schedulePossibilitiesList,
        sectionPossibilitiesArray,
        constraintMap,
        0
    )

    return schedulePossibilitiesList
}

function createAllPossibleSchedules(
    schedulePossibilities: SchedulePossibilities,
    schedulePossibilitiesList: SchedulePossibilitiesDict[],
    sectionPossibilitiesArray: SectionPossibilities[][],
    constraintMap: ConstraintMap,
    spaCurrentIndex: number
): void {
    if (spaCurrentIndex >= sectionPossibilitiesArray.length) {
        schedulePossibilitiesList.push(schedulePossibilities.toDict())
        return
    }

    for (const sectionPossibilities of sectionPossibilitiesArray[
        spaCurrentIndex
    ]) {
        if (
            satisfyConstraints(
                sectionPossibilities,
                constraintMap.get(ConstraintApplied.duringCalculation),
                schedulePossibilities
            ) &&
            schedulePossibilities.addSectionPossibilities(sectionPossibilities)
        ) {
            createAllPossibleSchedules(
                schedulePossibilities,
                schedulePossibilitiesList,
                sectionPossibilitiesArray,
                constraintMap,
                spaCurrentIndex + 1
            )
            schedulePossibilities.removeLastSectionPossibilities()
        }
    }
}

function createSectionPossibilitiesArray(
    constraintMap: ConstraintMap,
    courses: Course[]
) {
    let sectionPossibilitiesArray: SectionPossibilities[][] = []
    for (const course of courses) {
        sectionPossibilitiesArray = sectionPossibilitiesArray.concat(
            course.getSectionPossibilitiesArray(constraintMap)
        )
    }

    sectionPossibilitiesArray.sort((sp1, sp2) => sp1.length - sp2.length)

    return sectionPossibilitiesArray
}

export function satisfyConstraints(
    section: SectionPossibilities | Section,
    constraints: Constraint[],
    currentSchedule?: SchedulePossibilities
): boolean {
    for (const constraint of constraints) {
        if (!constraint.isValid(currentSchedule, section)) {
            return false
        }
    }

    return true
}

export function createContraintMap(constraints: Constraint[]): ConstraintMap {
    const constraintMap = new Map()
    for (const type in ConstraintApplied) {
        if (!isNaN(Number(type))) {
            constraintMap.set(Number(type), [])
        }
    }

    for (const constraint of constraints) {
        constraintMap.get(constraint.constraintApplied).push(constraint)
    }

    return constraintMap
}

function addRequiredSections(
    schedulePossibilities: SchedulePossibilities,
    requiredSections: Section[]
): void {
    for (const section of requiredSections) {
        if (
            !schedulePossibilities.addSectionPossibilities(
                new SectionPossibilities([section])
            )
        ) {
            throw new ScheduleError(
                'The required section: ' +
                    section.toString() +
                    ' has an overlap with another required section.'
            )
        }
    }
}
