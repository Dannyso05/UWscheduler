import { Days } from '../../src/course-structure/Days'
import DayOfWeekConstraint from '../../src/constraints/DayOfWeekConstraint'
import WeeklySection from '../../src/course-structure/WeeklySection'
import OneTimeSection from '../../src/course-structure/OneTimeSection'

describe('DayOfWeekConstraint', () => {
    it('should be valid when section is not a WeeklySection', () => {
        const constraint = new DayOfWeekConstraint(true, [
            Days.monday,
            Days.tuesday,
        ])
        const section = new OneTimeSection()

        const isValid = constraint.isValid(undefined, section)

        expect(isValid).toBe(true)
    })

    it('should be valid when mustBeOn is true and days match', () => {
        const constraint = new DayOfWeekConstraint(true, [
            Days.monday,
            Days.tuesday,
            Days.friday,
        ])
        const section = new WeeklySection()
        section.days = [Days.monday, Days.tuesday]

        const isValid = constraint.isValid(undefined, section)

        expect(isValid).toBe(true)
    })

    it('should be valid when mustBeOn is false and days do not match', () => {
        const constraint = new DayOfWeekConstraint(false, [
            Days.monday,
            Days.tuesday,
        ])
        const section = new WeeklySection()
        section.days = [Days.wednesday, Days.friday]

        const isValid = constraint.isValid(undefined, section)

        expect(isValid).toBe(true)
    })

    it('should be invalid when mustBeOn is true and days do not match', () => {
        const constraint = new DayOfWeekConstraint(true, [
            Days.monday,
            Days.tuesday,
        ])
        const section = new WeeklySection()
        section.days = [Days.monday, Days.tuesday, Days.friday]

        const isValid = constraint.isValid(undefined, section)

        expect(isValid).toBe(false)
    })

    it('should be invalid when mustBeOn is false and days match', () => {
        const constraint = new DayOfWeekConstraint(false, [
            Days.monday,
            Days.tuesday,
        ])
        const section = new WeeklySection()
        section.days = [Days.monday, Days.tuesday, Days.friday]

        const isValid = constraint.isValid(undefined, section)

        expect(isValid).toBe(false)
    })
})
