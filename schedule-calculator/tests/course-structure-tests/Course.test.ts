import Course from '../../src/course-structure/Course'
import Section from '../../src/course-structure/Section'
import WeeklySection from '../../src/course-structure/WeeklySection'
import { Component } from '../../src/course-structure/Component'
import { Days } from '../../src/course-structure/Days'
import Timeslot from '../../src/course-structure/Timeslot'
import Time from '../../src/course-structure/Time'

describe('Course class tests', () => {
    let course: Course
    let days: Days[]
    let timeslot: Timeslot

    beforeEach(() => {
        days = [Days.monday, Days.wednesday, Days.friday]
        timeslot = new Timeslot(new Time(10, 0), new Time(12, 0))
        const sections = [
            new WeeklySection(
                'CS 136',
                1,
                Component.LEC,
                1,
                days,
                timeslot,
                50,
                20,
                'Dr. Smith'
            ),
            new WeeklySection(
                'CS 136',
                2,
                Component.LEC,
                1,
                days,
                timeslot,
                30,
                25,
                'Prof. Johnson'
            ),
            new WeeklySection(
                'CS 136',
                3,
                Component.TUT,
                1,
                days,
                timeslot,
                40,
                30,
                'Dr. Brown'
            ),
        ]

        course = new Course('Math', 101, 3, 'Introduction to Math', sections)
    })

    it('getSections should return the correct sections', () => {
        const sections = course.sections
        expect(sections).toHaveLength(3)
        expect(sections[0]).toBeInstanceOf(Section)
        expect(sections).toBe(sections)
    })

    it('getName', () => {
        expect(course.name).toBe('Math 101')
    })

    it('setSections should update the sections and components', () => {
        const newSections = [
            new WeeklySection(
                'CS 136',
                4,
                Component.LEC,
                1,
                days,
                timeslot,
                30,
                25,
                'Prof. Johnson'
            ),
            new WeeklySection(
                'CS 136',
                5,
                Component.TUT,
                1,
                days,
                timeslot,
                40,
                30,
                'Dr. Brown'
            ),
        ]

        course.sections = newSections

        const sections = course.sections
        expect(sections).toHaveLength(2)
        expect(sections[0]).toBeInstanceOf(Section)

        const components = course.components
        expect(components.size).toBe(2)
        expect(components.get(Component.LEC)).toHaveLength(1)
        expect(components.get(Component.TUT)).toHaveLength(1)
        expect(components.has(Component.TST)).toBe(false)
    })

    it('doesOverlap should return true for overlapping sections', () => {
        const section1 = new WeeklySection(
            'CS 136',
            1,
            Component.LEC,
            1,
            days,
            timeslot,
            50,
            20,
            'Dr. Smith'
        )
        const section2 = new WeeklySection(
            'CS 136',
            2,
            Component.LEC,
            1,
            days,
            timeslot,
            30,
            25,
            'Prof. Johnson'
        )
        expect(section1.doesOverlap(section2)).toBe(true)
    })

    it('doesOverlap should return false for non-overlapping sections', () => {
        const section1 = new WeeklySection(
            'CS 136',
            1,
            Component.LEC,
            1,
            days,
            timeslot,
            50,
            20,
            'Dr. Smith'
        )
        const section2 = new WeeklySection(
            'CS 136',
            2,
            Component.LEC,
            1,
            days,
            new Timeslot(new Time(12, 0), new Time(14, 0)),
            30,
            25,
            'Prof. Johnson'
        )
        expect(section1.doesOverlap(section2)).toBe(false)
    })
})
