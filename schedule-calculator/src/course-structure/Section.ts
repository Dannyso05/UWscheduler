import { Component } from './Component'
import { Campus } from './Campus'
import { LocationTaught } from './LocationTaught'

/**
 * Represents a specific section of a class.
 */
export default abstract class Section {
    private _courseName: string
    private _classNumber: number
    private _component: Component
    private _componentNumber: number
    private _enrolCap: number
    private _enrolTotal: number
    private _instructor: string
    private _campus: Campus
    private _locationTaught: LocationTaught

    constructor(
        courseName?: string,
        classNumber?: number,
        component?: Component,
        componentNumber?: number,
        enrolCap?: number,
        enrolTotal?: number,
        instructor?: string,
        campus?: Campus,
        locationTaught?: LocationTaught
    ) {
        this.courseName = courseName
        this.classNumber = classNumber
        this.component = component
        this.enrolCap = enrolCap
        this.enrolTotal = enrolTotal
        this.instructor = instructor
        this.componentNumber = componentNumber
        this.campus = campus
        this.locationTaught = locationTaught
    }

    abstract doesOverlap(otherSection: Section): boolean
    abstract isTimeEqual(otherSection: Section): boolean

    isOpen(): boolean {
        return this.enrolTotal < this.enrolCap
    }

    toString(): string {
        return this.classNumber.toString()
    }

    get courseName(): string {
        return this._courseName
    }
    set courseName(courseName: string) {
        this._courseName = courseName
    }

    get classNumber(): number {
        return this._classNumber
    }
    set classNumber(classNumber: number) {
        this._classNumber = classNumber
    }

    get component(): Component {
        return this._component
    }
    set component(component: Component) {
        this._component = component
    }

    get componentNumber(): number {
        return this._componentNumber
    }
    set componentNumber(componentNumber: number) {
        this._componentNumber = componentNumber
    }

    get enrolCap(): number {
        return this._enrolCap
    }
    set enrolCap(enrolCap: number) {
        this._enrolCap = enrolCap
    }

    get enrolTotal(): number {
        return this._enrolTotal
    }
    set enrolTotal(enrolTotal: number) {
        this._enrolTotal = enrolTotal
    }

    get instructor(): string {
        return this._instructor
    }
    set instructor(instructor: string) {
        this._instructor = instructor
    }

    get campus(): Campus {
        return this._campus
    }
    set campus(campus: Campus) {
        this._campus = campus
    }

    get locationTaught(): LocationTaught {
        return this._locationTaught
    }
    set locationTaught(locationTaught: LocationTaught) {
        this._locationTaught = locationTaught
    }

    toDict() {
        return {
            courseName: this.courseName,
            classNumber: this.classNumber,
            component: this.component,
            componentNumber: this.componentNumber,
            enrolCap: this.enrolCap,
            enrolTotal: this.enrolTotal,
            instructor: this.instructor,
            campus: this.campus,
            locationTaught: this.locationTaught,
        }
    }
}

export enum SectionTypes { Weekly = 'weekly', OneTime = 'one-time' }
