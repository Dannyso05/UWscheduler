import WeeklySection from '../../src/course-structure/WeeklySection'
import SectionPossibilities from '../../src/course-structure/SectionPossibilities'
import { Component } from '../../src/course-structure/Component'
import Timeslot from '../../src/course-structure/Timeslot'
import Time from '../../src/course-structure/Time'

describe('SectionPossibilities class tests', () => {
    const timeslot = new Timeslot(new Time(10, 0), new Time(12, 0))
    const section1 = new WeeklySection(
        'CS 136',
        1,
        Component.LEC,
        1,
        [],
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
        [],
        timeslot,
        30,
        25,
        'Prof. Johnson'
    )
    const section3 = new WeeklySection(
        'CS 136',
        3,
        Component.TUT,
        1,
        [],
        timeslot,
        40,
        30,
        'Dr. Brown'
    )

    it('constructor should initialize sections with provided sections', () => {
        const sections = [section1, section2]
        const sectionPossibilities = new SectionPossibilities(sections)

        expect(sectionPossibilities.length).toBe(2)
        expect(sectionPossibilities.getSection(0)).toBe(section1)
        expect(sectionPossibilities.getSection(1)).toBe(section2)
    })

    it('canAddSection should return true if no sections exist', () => {
        const sectionPossibilities = new SectionPossibilities([])
        const canAdd = sectionPossibilities.canAddSection(section1)

        expect(canAdd).toBe(true)
    })

    it('canAddSection should return true if section can be added', () => {
        const sectionPossibilities = new SectionPossibilities([section1])

        const newSection = new WeeklySection(
            'CS 136',
            4,
            Component.LEC,
            1,
            [],
            timeslot,
            30,
            25,
            'Prof. Johnson'
        )
        const canAdd = sectionPossibilities.canAddSection(newSection)

        expect(canAdd).toBe(true)
    })

    it('canAddSection should return false if section cannot be added', () => {
        const sectionPossibilities = new SectionPossibilities([section1])

        let newSection = new WeeklySection(
            'CS 136',
            3,
            Component.TUT,
            1,
            [],
            timeslot,
            40,
            30,
            'Dr. Brown'
        )
        let canAdd = sectionPossibilities.canAddSection(newSection)

        expect(canAdd).toBe(false)

        newSection = new WeeklySection(
            'CS 136',
            3,
            Component.LEC,
            1,
            [],
            new Timeslot(new Time(10, 0), new Time(12, 10)),
            40,
            30,
            'Dr. Brown'
        )
        canAdd = sectionPossibilities.canAddSection(newSection)

        expect(canAdd).toBe(false)
    })

    it('addSection should add a new section if canAddSection is true', () => {
        const sectionPossibilities = new SectionPossibilities([section1])

        sectionPossibilities.addSection(section2)

        expect(sectionPossibilities.length).toBe(2)
        expect(sectionPossibilities.getSection(1)).toBe(section2)
    })

    it('addSection should not add a new section if canAddSection is false', () => {
        const sectionPossibilities = new SectionPossibilities([section1])

        sectionPossibilities.addSection(section3)

        expect(sectionPossibilities.length).toBe(1)
        expect(sectionPossibilities.getSection(1)).toBeUndefined()
    })
})
