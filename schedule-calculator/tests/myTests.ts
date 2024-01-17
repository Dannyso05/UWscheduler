import Course from '../src/course-structure/Course';
import Section from '../src/course-structure/Section';
import WeeklySection from '../src/course-structure/WeeklySection';
import { Component } from "../src/course-structure/Component";
import { Days } from "../src/course-structure/Days";
import Timeslot from '../src/course-structure/Timeslot'
import Time from '../src/course-structure/Time'
import SchedulePossibilities from '../src/course-structure/SchedulePossibilities';
import SectionPossibilities from '../src/course-structure/SectionPossibilities';
import TimeConstraint from '../src/constraints/WeeklyTimeConstraint';
import ScheduleCalculator from '../src/ScheduleCalculator';
import ScheduleError from '../src/ScheduleError';


// const section1 = new WeeklySection("CS 136", 1, Component.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(9, 0), new Time(10, 0)), 50, 20, 'Dr. Smith');
// const section2 = new WeeklySection("CS 136", 2, Component.LEC, [Days.monday, Days.tuesday], new Timeslot(new Time(10, 0), new Time(12, 0)), 30, 25, 'Prof. Johnson');
// const section3 = new WeeklySection("CS 136", 3, Component.TUT, [Days.monday, Days.tuesday], new Timeslot(new Time(10, 0), new Time(16, 0)), 40, 30, 'Dr. Brown');
// const section4 = new WeeklySection("CS 136", 1, Component.LEC, [Days.monday, Days.wednesday, Days.friday], new Timeslot(new Time(17, 0), new Time(18, 0)), 30, 0, 'Deniz');

// const course1 = new Course('Math', 101, 3, 'Introduction to Math', [section1, section2, section3]);
// const course2 = new Course('Physics', 202, 4, 'Advanced Physics', [section4]);
// console.log(JSON.stringify(course1));
// let ans = ScheduleCalculator.calculateSchedules([], [course1, course2], []);

// console.log(ans);
// console.log(ans[0]);

// const a = new SchedulePossibilities();
// a.addSectionPossibilities(new SectionPossibilities([section1]));
// a.addSectionPossibilities(new SectionPossibilities([section3]));
// a.addSectionPossibilities(new SectionPossibilities([section4]));
// console.log("\n")
// console.log(JSON.stringify([a, a]))

var d = new SectionPossibilities();