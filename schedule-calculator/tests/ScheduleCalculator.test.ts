import { ConstraintApplied } from '../src/constraints/ConstraintApplied'
import IsOpenConstraint from '../src/constraints/IsOpenConstraint'
import WeeklyTimeConstraint from '../src/constraints/WeeklyTimeConstraint'
import { Component } from '../src/course-structure/Component'
import Course from '../src/course-structure/Course'
import { Days } from '../src/course-structure/Days'
import SchedulePossibilities from '../src/course-structure/SchedulePossibilities'
import SectionPossibilities from '../src/course-structure/SectionPossibilities'
import Time from '../src/course-structure/Time'
import Timeslot from '../src/course-structure/Timeslot'
import WeeklySection from '../src/course-structure/WeeklySection'
import ScheduleCalculator from '../src/ScheduleCalculator'
import ScheduleError from '../src/ScheduleError'
import {
    getCS136,
    getCS136L,
    getMATH136,
    getMATH138,
    getPHYS122,
    getPHYS124,
    getTestCourse1,
    getTestCourse2,
    getTestCourse3,
} from './CourseTestLibrary'

describe('ScheduleCalculator', () => {
    describe('createContraintMap', () => {
        it('should create constraint map', () => {
            const constraint1 = new IsOpenConstraint()
            const constraint2 = new WeeklyTimeConstraint()
            const constraint3 = new IsOpenConstraint()
            const constraints = [constraint1, constraint2, constraint3]

            ScheduleCalculator.calculateSchedules([], [], constraints)
            const constraintMap = ScheduleCalculator.getConstraintMap()

            expect(
                constraintMap.has(ConstraintApplied.beforeSectionGrouping)
            ).toBe(true)
            expect(
                constraintMap.has(ConstraintApplied.afterSectionGrouping)
            ).toBe(true)
            expect(constraintMap.has(ConstraintApplied.duringCalculation)).toBe(
                true
            )

            expect(
                constraintMap.get(ConstraintApplied.beforeSectionGrouping)
            ).toHaveLength(3)
            expect(
                constraintMap.get(ConstraintApplied.afterSectionGrouping)
            ).toHaveLength(0)
            expect(
                constraintMap.get(ConstraintApplied.duringCalculation)
            ).toHaveLength(0)
        })
    })

    it('throws an error when required sections overlap', () => {
        const section1 = new WeeklySection(
            'CS 136',
            1,
            Component.LEC,
            1,
            [Days.monday, Days.tuesday],
            new Timeslot(new Time(9, 0), new Time(10, 0)),
            50,
            20,
            'Dr. Smith'
        )
        const section2 = new WeeklySection(
            'CS 136',
            2,
            Component.LEC,
            1,
            [Days.monday, Days.tuesday],
            new Timeslot(new Time(10, 0), new Time(12, 0)),
            30,
            25,
            'Prof. Johnson'
        )
        const section3 = new WeeklySection(
            'CS 136',
            3,
            Component.TUT,
            1,
            [Days.monday, Days.tuesday],
            new Timeslot(new Time(10, 0), new Time(16, 0)),
            40,
            30,
            'Dr. Brown'
        )

        expect(() => {
            ScheduleCalculator.calculateSchedules(
                [section1, section2, section3],
                [],
                []
            )
        }).toThrow(ScheduleError)
    })

    describe('createSectionPossibilitiesArray', () => {
        it('creates a valid section possibilities array, in order', () => {
            const section1 = new WeeklySection(
                'CS 136',
                1,
                Component.LEC,
                1,
                [Days.monday, Days.tuesday],
                new Timeslot(new Time(9, 0), new Time(10, 0)),
                50,
                20,
                'Dr. Smith'
            )
            const section2 = new WeeklySection(
                'CS 136',
                2,
                Component.LEC,
                1,
                [Days.monday, Days.tuesday],
                new Timeslot(new Time(10, 0), new Time(12, 0)),
                30,
                25,
                'Prof. Johnson'
            )
            const section3 = new WeeklySection(
                'CS 136',
                3,
                Component.TUT,
                1,
                [Days.monday, Days.tuesday],
                new Timeslot(new Time(10, 0), new Time(16, 0)),
                40,
                30,
                'Dr. Brown'
            )
            const section4 = new WeeklySection(
                'CS 136',
                1,
                Component.LEC,
                1,
                [Days.monday, Days.wednesday, Days.friday],
                new Timeslot(new Time(10, 0), new Time(12, 0)),
                30,
                0,
                'Deniz'
            )

            const course1 = new Course('Math', 101, 3, 'Introduction to Math', [
                section1,
                section2,
                section3,
            ])
            const course2 = new Course('Physics', 202, 4, 'Advanced Physics', [
                section4,
            ])
            ScheduleCalculator.calculateSchedules([], [course1, course2], [])

            const spa = ScheduleCalculator.getSectionPossibilitiesArray()

            expect(spa).toHaveLength(3)
            expect(spa[0]).toHaveLength(1)
            expect(spa[1]).toHaveLength(1)
            expect(spa[2]).toHaveLength(2)
        })
    })

    describe('Real life data tests', () => {
        let cs136: Course
        let cs136L: Course
        let math136: Course
        let math138: Course
        let phys124: Course
        let phys122: Course

        beforeEach(() => {
            cs136 = getCS136()
            cs136L = getCS136L()
            math136 = getMATH136()
            math138 = getMATH138()
            phys124 = getPHYS124()
            phys122 = getPHYS122()
        })

        it('applies is open constraints', () => {
            const constaint = ScheduleCalculator.calculateSchedules(
                [],
                [cs136, cs136L, math136, math138, phys124, phys122],
                [new IsOpenConstraint()]
            )
            const nonconstaint = ScheduleCalculator.calculateSchedules(
                [],
                [cs136, cs136L, math136, math138, phys124, phys122],
                []
            )

            expect(constaint.length < nonconstaint.length).toBe(true)
        })

        it('applies weekly time constraints', () => {
            const constaint = ScheduleCalculator.calculateSchedules(
                [],
                [cs136, cs136L, math136, math138, phys124, phys122],
                [
                    new WeeklyTimeConstraint(
                        true,
                        new Timeslot(new Time(10, 20), new Time(17, 0))
                    ),
                ]
            )
            const constaint2 = ScheduleCalculator.calculateSchedules(
                [],
                [cs136, cs136L, math136, math138, phys124, phys122],
                [
                    new WeeklyTimeConstraint(
                        false,
                        new Timeslot(new Time(8, 30), new Time(12, 0))
                    ),
                ]
            )

            expect(constaint).toHaveLength(0)
            expect(constaint2).toHaveLength(0)
        })
    })

    describe('Created data set', () => {
        let tc1: Course
        let tc2: Course
        let tc3: Course

        beforeEach(() => {
            tc1 = getTestCourse1()
            tc2 = getTestCourse2()
            tc3 = getTestCourse3()
        })

        it('test no valid solution', () => {
            const ans = ScheduleCalculator.calculateSchedules(
                [],
                [tc1, tc2, tc3],
                [new IsOpenConstraint()]
            )
            expect(ans).toHaveLength(0)
        })

        it('test one valid solution', () => {
            const ans = ScheduleCalculator.calculateSchedules(
                [],
                [tc1, tc2],
                [new IsOpenConstraint()]
            )
            expect(ans).toHaveLength(1)
        })

        it('test multiple valid solutions (no IsOpenConstraint)', () => {
            const ans = ScheduleCalculator.calculateSchedules(
                [],
                [tc1, tc2, tc3],
                []
            )
            expect(ans.length > 1).toBe(true)
        })
    })

    it('creates all valid schedules', () => {
        const section1 = new WeeklySection(
            'MATH 136',
            1,
            Component.LEC,
            1,
            [Days.monday, Days.tuesday],
            new Timeslot(new Time(9, 0), new Time(10, 0)),
            50,
            20,
            'Dr. Smith'
        )
        const section2 = new WeeklySection(
            'MATH 136',
            2,
            Component.LEC,
            1,
            [Days.monday, Days.tuesday],
            new Timeslot(new Time(10, 0), new Time(12, 0)),
            30,
            25,
            'Prof. Johnson'
        )
        const section3 = new WeeklySection(
            'MATH 136',
            3,
            Component.TUT,
            1,
            [Days.monday, Days.tuesday],
            new Timeslot(new Time(10, 0), new Time(16, 0)),
            40,
            30,
            'Dr. Brown'
        )
        const section4 = new WeeklySection(
            'ECE 136',
            1,
            Component.LEC,
            1,
            [Days.monday, Days.wednesday, Days.friday],
            new Timeslot(new Time(17, 0), new Time(18, 0)),
            30,
            0,
            'Deniz'
        )

        const course1 = new Course('Math', 101, 3, 'Introduction to Math', [
            section1,
            section2,
            section3,
        ])
        const course2 = new Course('Physics', 202, 4, 'Advanced Physics', [
            section4,
        ])
        const ans = ScheduleCalculator.calculateSchedules(
            [],
            [course1, course2],
            []
        )

        expect(ans).toHaveLength(1)

        const expected = new SchedulePossibilities()
        const a = expected.addMultipleSectionPossibilities([
            new SectionPossibilities([section3]),
            new SectionPossibilities([section4]),
            new SectionPossibilities([section1]),
        ])
        expect(ans[0]).toBe(JSON.stringify(expected))
    })
})
