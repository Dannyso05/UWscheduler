import Course from '../src/course-structure/Course';
import Section from '../src/course-structure/Section';
import WeeklySection from '../src/course-structure/WeeklySection';
import { ComponentSection } from "../src/course-structure/ComponentSection";
import { Days } from "../src/course-structure/Days";
import Timeslot from '../src/course-structure/Timeslot'
import Time from '../src/course-structure/Time'


let days = [Days.monday, Days.wednesday, Days.friday, 4];
let days2 = [Days.monday, Days.wednesday, Days.friday];
let timeslot = new Timeslot(new Time(10, 0), new Time(12, 0));
let sec = new WeeklySection(1, ComponentSection.LEC, days, timeslot, 50, 20, 'Dr. Smith');

days.push(17);
console.log(days);
console.log(sec);
