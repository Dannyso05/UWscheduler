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


const cs136 = getCS136();
const cs136L = getCS136L();
const math136 = getMATH136();
const math138 = getMATH138();
const phys124 = getPHYS124();
const phys122 = getPHYS122();

console.log(ScheduleCalculator.calculateSchedules([], [cs136, cs136L, math136, math138, phys124, phys122], [new IsOpenConstraint()]));


