import Section from './Section'
import { Component } from './Component'
import { ConstraintMap, satisfyConstraints } from '../ScheduleCalculator'
import { ConstraintApplied } from '../constraints/ConstraintApplied'
import SectionPossibilities from './SectionPossibilities'

/**
 * Represents a full class, with all it's sections.
 */
export default class Course {
    private _subject: string
    private _catalogNumber: number
    private _units: number
    private _courseTitle: string
    private _sections: Section[]
    private _components: Map<Component, Section[]>
    private _instructors: string[]
    private _catalogNumberSurfix: string
    private _term: number

    constructor(
        subject: string,
        catalogNumber: number,
        units?: number,
        courseTitle?: string,
        sections?: Section[],
        catalogNumberSurfix?: string,
        term?: number
    ) {
        this._subject = subject
        this._catalogNumber = catalogNumber
        this._units = units
        this._courseTitle = courseTitle
        this._sections = sections
        this._components = new Map()
        this.makeComponents()
        this._instructors = []
        this._catalogNumberSurfix = catalogNumberSurfix || ''
        this._term = term
    }

    get components(): Map<Component, Section[]> {
        return this._components
    }
    makeComponents(): void {
        this._components = new Map()
        for (const section of this._sections) {
            this.pushToComponents(section)
        }
    }

    private pushToComponents(section: Section) {
        if (!this.components.has(section.component)) {
            this.components.set(section.component, [])
        }
        this.components.get(section.component).push(section)
    }

    get name(): string {
        return (
            this._subject +
            ' ' +
            this._catalogNumber.toString() +
            this._catalogNumberSurfix
        )
    }

    get subject(): string {
        return this._subject
    }
    set subject(subject: string) {
        this._subject = subject
    }

    get catalogNumber(): number {
        return this._catalogNumber
    }
    set catalogNumber(catalogNumber: number) {
        this._catalogNumber = catalogNumber
    }

    get units(): number {
        return this._units
    }
    set units(units: number) {
        this._units = units
    }

    get courseTitle(): string {
        return this._courseTitle
    }
    set courseTitle(courseTitle: string) {
        this._courseTitle = courseTitle
    }

    get sections(): Section[] {
        return this._sections
    }
    set sections(sections: Section[]) {
        this._sections = sections
        this.makeComponents()
    }

    get instructors(): string[] {
        return this._instructors
    }
    set instructors(instructors: string[]) {
        this._instructors = instructors
    }

    get catalogNumberSurfix(): string {
        return this._catalogNumberSurfix
    }
    set catalogNumberSurfix(catalogNumberSurfix: string) {
        this._catalogNumberSurfix = catalogNumberSurfix
    }

    get term(): number {
        return this._term
    }
    set term(term: number) {
        this._term = term
    }

    getSectionPossibilitiesArray(
        constraintMap: ConstraintMap
    ): SectionPossibilities[][] {
        const sectionPossibilitiesArray: SectionPossibilities[][] = []
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [component, sections] of Array.from(
            this.components.entries()
        )) {
            const possibilitiesAdded: SectionPossibilities[] = []
            for (const section of sections) {
                if (
                    satisfyConstraints(
                        section,
                        constraintMap.get(
                            ConstraintApplied.beforeSectionGrouping
                        )
                    )
                ) {
                    let added = false
                    for (const possibilities of possibilitiesAdded) {
                        if (possibilities.addSection(section)) {
                            added = true
                            break
                        }
                    }

                    if (!added) {
                        possibilitiesAdded.push(
                            new SectionPossibilities([section])
                        )
                    }
                }
            }
            sectionPossibilitiesArray.push(possibilitiesAdded)
        }

        return sectionPossibilitiesArray
    }
}
