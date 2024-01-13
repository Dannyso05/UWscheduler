import Course from '../src/Course';
import Section from '../src/Section';
import WeeklySection from '../src/WeeklySection';
import { ComponentSection } from "../src/ComponentSection";
import { Days } from "../src/Days";
import Timeslot from '../src/Timeslot'
import Time from '../src/Time'


let days = [Days.monday, Days.wednesday, Days.friday, 4];
let days2 = [Days.monday, Days.wednesday, Days.friday];
let timeslot = new Timeslot(new Time(10, 0), new Time(12, 0));
let sec = new WeeklySection(1, ComponentSection.LEC, days, timeslot, 50, 20, 'Dr. Smith');

days.push(17);
console.log(days);
console.log(sec);
