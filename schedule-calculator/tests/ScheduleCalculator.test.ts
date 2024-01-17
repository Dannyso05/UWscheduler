import { ConstraintApplied } from "../src/constraints/ConstraintApplied";
import IsOpenConstraint from "../src/constraints/IsOpenConstraint";
import WeeklyTimeConstraint from "../src/constraints/WeeklyTimeConstraint";
import { ComponentSection } from "../src/course-structure/ComponentSection";
import Course from "../src/course-structure/Course";
import { Days } from "../src/course-structure/Days";
import SectionPossibilities from "../src/course-structure/SectionPossibilities";
import Time from "../src/course-structure/Time";
import Timeslot from "../src/course-structure/Timeslot";
import WeeklySection from "../src/course-structure/WeeklySection";
import ScheduleCalculator from "../src/ScheduleCalculator";
import ScheduleError from "../src/ScheduleError";

describe('ScheduleCalculator', () => {
    describe('createContraintMap', () => {
        it('should create constraint map', () => {
            let constraint1 = new IsOpenConstraint();
            let constraint2 = new WeeklyTimeConstraint();
            let constraint3 = new IsOpenConstraint();
            const constraints = [constraint1, constraint2, constraint3];

            ScheduleCalculator.calculateSchedules([], [], constraints);
            let constraintMap = ScheduleCalculator.getConstraintMap();

            expect(constraintMap.has(ConstraintApplied.beforeSectionGrouping)).toBe(true);
            expect(constraintMap.has(ConstraintApplied.afterSectionGrouping)).toBe(true);
            expect(constraintMap.has(ConstraintApplied.duringCalculation)).toBe(true);

            expect(constraintMap.get(ConstraintApplied.beforeSectionGrouping)).toHaveLength(3);
            expect(constraintMap.get(ConstraintApplied.afterSectionGrouping)).toHaveLength(0);
            expect(constraintMap.get(ConstraintApplied.duringCalculation)).toHaveLength(0);
        });
    });

    it('throws an error when required sections overlap', () => {
        const section1 = new WeeklySection("CS 136", 1, ComponentSection.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(9, 0), new Time(10, 0)), 50, 20, 'Dr. Smith');
        const section2 = new WeeklySection("CS 136", 2, ComponentSection.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(10, 0), new Time(12, 0)), 30, 25, 'Prof. Johnson');
        const section3 = new WeeklySection("CS 136", 3, ComponentSection.TUT, [Days.monday, Days.tuesday], new Timeslot(new Time(10, 0), new Time(16, 0)), 40, 30, 'Dr. Brown');

        expect(() => { ScheduleCalculator.calculateSchedules([section1, section2, section3], [], []) }).toThrow(ScheduleError);
    });

    describe('createSectionPossibilitiesArray', () => {
        it('creates a valid section possibilities array, in order', () => {
            const section1 = new WeeklySection("CS 136", 1, ComponentSection.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(9, 0), new Time(10, 0)), 50, 20, 'Dr. Smith');
            const section2 = new WeeklySection("CS 136", 2, ComponentSection.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(10, 0), new Time(12, 0)), 30, 25, 'Prof. Johnson');
            const section3 = new WeeklySection("CS 136", 3, ComponentSection.TUT, [Days.monday, Days.tuesday], new Timeslot(new Time(10, 0), new Time(16, 0)), 40, 30, 'Dr. Brown');
            const section4 = new WeeklySection("CS 136", 1, ComponentSection.LEC, [Days.monday, Days.wednesday, Days.friday], new Timeslot(new Time(10, 0), new Time(12, 0)), 30, 0, 'Deniz');

            const course1 = new Course('Math', 101, 3, 'Introduction to Math', [section1, section2, section3]);
            const course2 = new Course('Physics', 202, 4, 'Advanced Physics', [section4]);
            ScheduleCalculator.calculateSchedules([], [course1, course2], []);

            const spa = ScheduleCalculator.getSectionPossibilitiesArray();

            expect(spa).toHaveLength(3);
            expect(spa[0]).toHaveLength(1);
            expect(spa[1]).toHaveLength(1);
            expect(spa[2]).toHaveLength(2);
        });
    });
});