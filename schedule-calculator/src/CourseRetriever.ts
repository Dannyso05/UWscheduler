import Course from "./Course";
import CourseBank from "./CourseBank";
import Section from "./Section";

/**
 * Will be fully implemented once data collection and storing is finished.
 * For now, it just holds a CourseBank and returns courses and sections from it.
 */
 export default class CourseRetriever {
    courseBank: CourseBank;

    constructor() { }

    getCourse(courseName: String): Course | undefined {
        return this.courseBank.getCourse(courseName);
    }

    getSection(courseName: String, classNumber: number): Section | undefined {
        let sections = this.courseBank.getCourse(courseName)?.getSections();
        if (sections == undefined) {
            return undefined;
        }

        for (var section of sections) {
            if (section.getClassNumber() == classNumber) {
                return section;
            }
        }

        return undefined;
    }

    getCourseBank(): CourseBank { return this.courseBank; }
    setCourseBank(courseBank: CourseBank): void { this.courseBank = courseBank; }
 }