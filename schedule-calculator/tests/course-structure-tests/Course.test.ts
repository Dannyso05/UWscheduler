import Course from '../../src/course-structure/Course';
import Section from '../../src/course-structure/Section';
import WeeklySection from '../../src/course-structure/WeeklySection';
import { ComponentSection } from "../../src/course-structure/ComponentSection";
import { Days } from "../../src/course-structure/Days";
import Timeslot from '../../src/course-structure/Timeslot'
import Time from '../../src/course-structure/Time'

describe('Course class tests', () => {
    let course: Course;
    let days: Days[];
    let timeslot: Timeslot;

    beforeEach(() => {
        days = [Days.monday, Days.wednesday, Days.friday];
        timeslot = new Timeslot(new Time(10, 0), new Time(12, 0));
        const sections = [
            new WeeklySection(1, ComponentSection.LEC, days, timeslot, 50, 20, 'Dr. Smith'),
            new WeeklySection(2, ComponentSection.LEC, days, timeslot, 30, 25, 'Prof. Johnson'),
            new WeeklySection(3, ComponentSection.TUT, days, timeslot, 40, 30, 'Dr. Brown'),
        ];

        course = new Course('Math', 101, 3, 'Introduction to Math', sections);
    });

    it('getSections should return the correct sections', () => {
        const sections = course.sections;
        expect(sections).toHaveLength(3);
        expect(sections[0]).toBeInstanceOf(Section);
        expect(sections).toBe(sections);
    });

    it('getName', () => {
        expect(course.name).toBe("Math 101");
    });

    it('setSections should update the sections and components', () => {
        const newSections = [
            new WeeklySection(4, ComponentSection.LEC, days, timeslot, 30, 25, 'Prof. Johnson'),
            new WeeklySection(5, ComponentSection.TUT, days, timeslot, 40, 30, 'Dr. Brown'),
        ];

        course.sections = newSections;

        const sections = course.sections;
        expect(sections).toHaveLength(2);
        expect(sections[0]).toBeInstanceOf(Section);

        const components = course.components;
        expect(components.size).toBe(2);
        expect(components.get(ComponentSection.LEC)).toHaveLength(1);
        expect(components.get(ComponentSection.TUT)).toHaveLength(1);
        expect(components.has(ComponentSection.TST)).toBe(false);
    });

    it('doesOverlap should return true for overlapping sections', () => {
        const section1 = new WeeklySection(1, ComponentSection.LEC, days, timeslot, 50, 20, 'Dr. Smith');
        const section2 = new WeeklySection(2, ComponentSection.LEC, days, timeslot, 30, 25, 'Prof. Johnson');
        expect(section1.doesOverlap(section2)).toBe(true);
    });

    it('doesOverlap should return false for non-overlapping sections', () => {
        const section1 = new WeeklySection(1, ComponentSection.LEC, days, timeslot, 50, 20, 'Dr. Smith');
        const section2 = new WeeklySection(2, ComponentSection.LEC, days, new Timeslot(new Time(12, 0), new Time(14, 0)), 30, 25, 'Prof. Johnson');
        expect(section1.doesOverlap(section2)).toBe(false);
    });
});