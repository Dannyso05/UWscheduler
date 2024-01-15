import Course from '../src/course-structure/Course';
import Section from '../src/course-structure/Section';
import WeeklySection from '../src/course-structure/WeeklySection';
import { ComponentSection } from "../src/course-structure/ComponentSection";
import { Days } from "../src/course-structure/Days";
import Timeslot from '../src/course-structure/Timeslot'
import Time from '../src/course-structure/Time'
import SchedulePossibilities from '../src/course-structure/SchedulePossibilities';
import SectionPossibilities from '../src/course-structure/SectionPossibilities';
import TimeConstraint from '../src/constraints/WeeklyTimeConstraint';


let tc = new TimeConstraint();

tc.mustBeWithin = false;

console.log(tc.mustBeWithin);
