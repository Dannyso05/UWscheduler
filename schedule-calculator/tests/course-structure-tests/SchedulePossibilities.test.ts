import SectionPossibilities from '../../src/course-structure/SectionPossibilities';
import SchedulePossibilities from '../../src/course-structure/SchedulePossibilities';
import { ComponentSection } from '../../src/course-structure/ComponentSection';
import WeeklySection from '../../src/course-structure/WeeklySection';
import Time from '../../src/course-structure/Time';
import Timeslot from '../../src/course-structure/Timeslot';
import { Days } from "../../src/course-structure/Days";

describe('SchedulePossibilities class tests', () => {
    const section1 = new SectionPossibilities([]);
    const section2 = new SectionPossibilities([]);
    const section3 = new SectionPossibilities([]);

    it('constructor should initialize sectionPossibilitiesList as an empty array', () => {
        const schedulePossibilities = new SchedulePossibilities();

        expect(schedulePossibilities.length).toEqual(0);
    });

    it('canAddSectionPossibilities should return false if sectionPossibilities has no sections', () => {
        const schedulePossibilities = new SchedulePossibilities();

        const emptySectionPossibilities = new SectionPossibilities([]);
        const canAdd = schedulePossibilities.canAddSectionPossibilities(emptySectionPossibilities);

        expect(canAdd).toBe(false);
    });

    it('canAddSectionPossibilities should return true if no overlaps exist with existing possibilities', () => {
        const schedulePossibilities = new SchedulePossibilities();

        const section1 = new SectionPossibilities([new WeeklySection(1, ComponentSection.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(9, 0), new Time(10, 0)), 50, 20, 'Dr. Smith')]);
        const section2 = new SectionPossibilities([new WeeklySection(2, ComponentSection.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(10, 0), new Time(12, 0)), 30, 25, 'Prof. Johnson')]);
        const section3 = new SectionPossibilities([new WeeklySection(3, ComponentSection.TUT, [Days.monday, Days.tuesday], new Timeslot(new Time(14, 0), new Time(16, 0)), 40, 30, 'Dr. Brown')]);

        schedulePossibilities.addSectionPossibilities(section1);
        schedulePossibilities.addSectionPossibilities(section2);
        schedulePossibilities.addSectionPossibilities(section3);

        const newSectionPossibilities = new SectionPossibilities([new WeeklySection(3, ComponentSection.TUT, [Days.monday, Days.tuesday], new Timeslot(new Time(12, 0), new Time(14, 0)), 40, 30, 'Dr. Brown')]);
        const canAdd = schedulePossibilities.canAddSectionPossibilities(newSectionPossibilities);

        expect(canAdd).toBe(true);
        schedulePossibilities.addSectionPossibilities(newSectionPossibilities);
        expect(schedulePossibilities.length).toBe(4);
        expect(schedulePossibilities.getSectionPossibilities(3)).toBe(newSectionPossibilities);
    });

    it('canAddSectionPossibilities should return true if no overlaps exist with existing possibilities, with days', () => {
        const schedulePossibilities = new SchedulePossibilities();

        const section1 = new SectionPossibilities([new WeeklySection(1, ComponentSection.LEC, [Days.monday, Days.wednesday, Days.friday], new Timeslot(new Time(9, 0), new Time(10, 0)), 50, 20, 'Dr. Smith')]);
        const section2 = new SectionPossibilities([new WeeklySection(2, ComponentSection.LEC, [Days.tuesday, Days.thursday], new Timeslot(new Time(10, 0), new Time(12, 0)), 30, 25, 'Prof. Johnson')]);
        const section3 = new SectionPossibilities([new WeeklySection(3, ComponentSection.TUT, [Days.monday, Days.tuesday], new Timeslot(new Time(12, 0), new Time(16, 0)), 40, 30, 'Dr. Brown')]);

        schedulePossibilities.addSectionPossibilities(section1);
        schedulePossibilities.addSectionPossibilities(section2);
        schedulePossibilities.addSectionPossibilities(section3);

        const newSectionPossibilities = new SectionPossibilities([new WeeklySection(3, ComponentSection.TUT, [Days.wednesday, Days.thursday], new Timeslot(new Time(12, 0), new Time(18, 0)), 40, 30, 'Dr. Brown')]);
        const canAdd = schedulePossibilities.canAddSectionPossibilities(newSectionPossibilities);

        expect(canAdd).toBe(true);
        schedulePossibilities.addSectionPossibilities(newSectionPossibilities);
        expect(schedulePossibilities.length).toBe(4);
        expect(schedulePossibilities.getSectionPossibilities(3)).toBe(newSectionPossibilities);
    });

    it('canAddSectionPossibilities should return true if no overlaps exist with existing possibilities, with days 2', () => {
        const schedulePossibilities = new SchedulePossibilities();

        const section1 = new SectionPossibilities([new WeeklySection(1, ComponentSection.LEC, [Days.monday, Days.tuesday, Days.wednesday, Days.thursday], new Timeslot(new Time(9, 0), new Time(10, 0)), 50, 20, 'Dr. Smith')]);
        const section2 = new SectionPossibilities([new WeeklySection(2, ComponentSection.LEC, [Days.monday, Days.tuesday, Days.wednesday, Days.thursday], new Timeslot(new Time(10, 0), new Time(12, 0)), 30, 25, 'Prof. Johnson')]);
        const section3 = new SectionPossibilities([new WeeklySection(3, ComponentSection.TUT, [Days.monday, Days.tuesday, Days.wednesday, Days.thursday], new Timeslot(new Time(12, 0), new Time(16, 0)), 40, 30, 'Dr. Brown')]);

        schedulePossibilities.addSectionPossibilities(section1);
        schedulePossibilities.addSectionPossibilities(section2);
        schedulePossibilities.addSectionPossibilities(section3);

        const newSectionPossibilities = new SectionPossibilities([new WeeklySection(3, ComponentSection.TUT, [Days.friday], new Timeslot(new Time(8, 0), new Time(21, 0)), 40, 30, 'Dr. Brown')]);
        const canAdd = schedulePossibilities.canAddSectionPossibilities(newSectionPossibilities);

        expect(canAdd).toBe(true);
        schedulePossibilities.addSectionPossibilities(newSectionPossibilities);
        expect(schedulePossibilities.length).toBe(4);
        expect(schedulePossibilities.getSectionPossibilities(3)).toBe(newSectionPossibilities);
    });

    it('canAddSectionPossibilities should return false if overlaps exist with existing possibilities', () => {
        const schedulePossibilities = new SchedulePossibilities();

        const section1 = new SectionPossibilities([new WeeklySection(1, ComponentSection.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(9, 0), new Time(10, 0)), 50, 20, 'Dr. Smith')]);
        const section2 = new SectionPossibilities([new WeeklySection(2, ComponentSection.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(10, 0), new Time(12, 0)), 30, 25, 'Prof. Johnson')]);
        const section3 = new SectionPossibilities([new WeeklySection(3, ComponentSection.TUT, [Days.monday, Days.tuesday], new Timeslot(new Time(14, 0), new Time(16, 0)), 40, 30, 'Dr. Brown')]);

        schedulePossibilities.addSectionPossibilities(section1);
        schedulePossibilities.addSectionPossibilities(section2);
        schedulePossibilities.addSectionPossibilities(section3);

        const newSectionPossibilities = new SectionPossibilities([new WeeklySection(3, ComponentSection.TUT, [Days.monday], new Timeslot(new Time(12, 0), new Time(14, 30)), 40, 30, 'Dr. Brown')]);
        const canAdd = schedulePossibilities.canAddSectionPossibilities(newSectionPossibilities);

        expect(schedulePossibilities.length).toBe(3);
        expect(canAdd).toBe(false);
        schedulePossibilities.addSectionPossibilities(newSectionPossibilities);
        expect(schedulePossibilities.length).toBe(3);
    });

    it('getSectionPossibilities should return the sectionPossibilities at the specified index', () => {
        const schedulePossibilities = new SchedulePossibilities();

        const section1 = new SectionPossibilities([new WeeklySection(1, ComponentSection.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(9, 0), new Time(10, 0)), 50, 20, 'Dr. Smith')]);
        const section2 = new SectionPossibilities([new WeeklySection(2, ComponentSection.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(10, 0), new Time(12, 0)), 30, 25, 'Prof. Johnson')]);
        const section3 = new SectionPossibilities([new WeeklySection(3, ComponentSection.TUT, [Days.monday, Days.tuesday], new Timeslot(new Time(14, 0), new Time(16, 0)), 40, 30, 'Dr. Brown')]);

        schedulePossibilities.addSectionPossibilities(section1);
        schedulePossibilities.addSectionPossibilities(section2);
        schedulePossibilities.addSectionPossibilities(section3);

        const retrievedSectionPossibilities = schedulePossibilities.getSectionPossibilities(1);

        expect(retrievedSectionPossibilities).toBe(section2);
    });
});