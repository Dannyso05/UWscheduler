import Timeslot from '../src/Timeslot'
import Time from '../src/Time'
import { ComponentSection } from "../src/ComponentSection";
import { Days } from "../src/Days";
import WeeklySection from '../src/WeeklySection';
import OneTimeSection from '../src/OneTimeSection';

describe('All Sections', () => {
    const days: Days[] = [Days.monday, Days.wednesday, Days.friday];
    const timeslot: Timeslot = new Timeslot(new Time(10, 0), new Time(12, 0));
    const weeklySection = new WeeklySection(1, ComponentSection.LEC, days, timeslot, 30, 0, 'Deniz');
    const date = new Date('2024-01-15');

    describe('constructor', () => {
        it('should create a WeeklySection instance with correct properties', () => {
            expect(weeklySection).toBeInstanceOf(WeeklySection);
            expect(weeklySection.getDays()).toEqual(days);
            expect(weeklySection.getTimeslot()).toEqual(timeslot);
        });
    });

    describe('doesOverlap', () => {
        it('should return true if two WeeklySections overlap', () => {
            const overlappingDays = [Days.monday, Days.thursday];
            const overlappingTimeslot: Timeslot = new Timeslot(new Time(11, 0), new Time(11, 30));
            const overlappingSection = new WeeklySection(2, ComponentSection.LEC, overlappingDays, overlappingTimeslot, 30, 0, 'Instructor');

            expect(weeklySection.doesOverlap(overlappingSection)).toBe(true);
        });

        it('should return false if two WeeklySections do not overlap', () => {
            const nonOverlappingDays = [Days.tuesday, Days.thursday];
            const nonOverlappingTimeslot: Timeslot = new Timeslot(new Time(14, 0), new Time(16, 0));
            const nonOverlappingSection = new WeeklySection(3, ComponentSection.LEC, nonOverlappingDays, nonOverlappingTimeslot, 30, 0, 'Instructor');

            expect(weeklySection.doesOverlap(nonOverlappingSection)).toBe(false);
        });
    });

    describe('doDaysOverlap', () => {
        it('should return true if two WeeklySections have overlapping days', () => {
            const overlappingDays = [Days.tuesday, Days.thursday, Days.friday];
            const overlappingSection = new WeeklySection(2, ComponentSection.TUT, overlappingDays, timeslot, 30, 0, 'Instructor');

            expect(weeklySection.doDaysOverlap(overlappingSection)).toBe(true);
        });

        it('should return false if two WeeklySections do not have overlapping days', () => {
            const nonOverlappingDays = [Days.tuesday, Days.thursday];
            const nonOverlappingSection = new WeeklySection(3, ComponentSection.TUT, nonOverlappingDays, timeslot, 30, 0, 'Instructor');

            expect(weeklySection.doDaysOverlap(nonOverlappingSection)).toBe(false);
        });
    });

    describe('isOpen', () => {
        it('should return true if enrolTotal is less than enrolCap', () => {
            const section = new WeeklySection(3, ComponentSection.TUT, [Days.tuesday, Days.thursday], timeslot, 30, 29, 'Instructor');
            expect(section.isOpen()).toBe(true);
        });

        it('should return false if enrolTotal is equal to enrolCap', () => {
            const section = new WeeklySection(3, ComponentSection.TUT, [Days.tuesday, Days.thursday], timeslot, 30, 30, 'Instructor');
            expect(section.isOpen()).toBe(false);
        });
    });

    describe('constructor: OneTimeSection', () => {
        it('should create a OneTimeSection instance with correct properties', () => {
            const oneTimeSection = new OneTimeSection(1, ComponentSection.TST, date, timeslot, 30, 0, 'Instructor');

            expect(oneTimeSection).toBeInstanceOf(OneTimeSection);
            expect(oneTimeSection.getDate()).toEqual(date);
            expect(oneTimeSection.getTimeslot()).toEqual(timeslot);
        });
    });

    describe('doesOverlap: OneTimeSection', () => {
        it('should return false if comparing with a WeeklySection', () => {
          const weeklySection = new WeeklySection(2, ComponentSection.LEC, [Days.monday], timeslot, 30, 0, 'Instructor');
          const oneTimeSection = new OneTimeSection(1, ComponentSection.LEC, new Date(), timeslot, 30, 0, 'Instructor');
    
          expect(oneTimeSection.doesOverlap(weeklySection)).toBe(false);
        });
    
        it('should return true if comparing with another OneTimeSection with the same date and overlapping timeslot', () => {
          const overlappingTimeslot: Timeslot = new Timeslot(new Time(11, 0), new Time(13, 0));
          const overlappingOneTimeSection = new OneTimeSection(2, ComponentSection.LEC, date, overlappingTimeslot, 30, 0, 'Instructor');
          const oneTimeSection = new OneTimeSection(1, ComponentSection.LEC, date, timeslot, 30, 0, 'Instructor');
    
          expect(oneTimeSection.doesOverlap(overlappingOneTimeSection)).toBe(true);
        });
    
        it('should return false if comparing with another OneTimeSection with a different date', () => {
          const differentDate = new Date('2024-01-20');
          const differentDateOneTimeSection = new OneTimeSection(2, ComponentSection.LEC, differentDate, timeslot, 30, 0, 'Instructor');
          const oneTimeSection = new OneTimeSection(1, ComponentSection.LEC, date, timeslot, 30, 0, 'Instructor');
    
          expect(oneTimeSection.doesOverlap(differentDateOneTimeSection)).toBe(false);
        });
    
        it('should return false if comparing with another OneTimeSection with a non-overlapping timeslot', () => {
          const nonOverlappingTimeslot: Timeslot = new Timeslot(new Time(14, 0), new Time(16, 0));
          const nonOverlappingOneTimeSection = new OneTimeSection(2, ComponentSection.LEC, date, nonOverlappingTimeslot, 30, 0, 'Instructor');
          const oneTimeSection = new OneTimeSection(1, ComponentSection.LEC, date, timeslot, 30, 0, 'Instructor');
    
          expect(oneTimeSection.doesOverlap(nonOverlappingOneTimeSection)).toBe(false);
        });
      });
});