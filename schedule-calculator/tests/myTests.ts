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
import StringToSections from './StringToSections';
import { getCS136, getCS136L, getMATH136, getMATH138, getPHYS122, getPHYS124 } from './CourseTestLibrary';
import * as fs from 'fs';
import IsOpenConstraint from '../src/constraints/IsOpenConstraint';
import WeeklyTimeConstraint from '../src/constraints/WeeklyTimeConstraint';


// let cs136: Course;
// let cs136L: Course;
// let math136: Course;
// let math138: Course;
// let phys124: Course;
// let phys122: Course;

// cs136 = getCS136();
// cs136L = getCS136L();
// math136 = getMATH136();
// math138 = getMATH138();
// phys124 = getPHYS124();
// phys122 = getPHYS122();

// const constaint = ScheduleCalculator.calculateSchedules([], [cs136, cs136L, math136, math138, phys124, phys122], [new IsOpenConstraint()]);
            

// console.log(constaint);


const a = '12jhv3.3'
const b = +a
console.log(b)

