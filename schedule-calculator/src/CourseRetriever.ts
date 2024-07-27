import Course from './course-structure/Course'
import CourseBank from './course-structure/CourseBank'
import Section from './course-structure/Section'

/**
 * Will be fully implemented once data collection and storing is finished.
 * For now, it just holds a CourseBank and returns courses and sections from it.
 */
export default class CourseRetriever {
    courseBank: CourseBank

    constructor() {}

    getCourse(courseName: string): Course | undefined {
        return this.courseBank.getCourse(courseName)
    }

    getSection(courseName: string, classNumber: number): Section | undefined {
        const sections = this.courseBank.getCourse(courseName)?.sections
        if (sections == undefined) {
            return undefined
        }

        for (const section of sections) {
            if (section.classNumber == classNumber) {
                return section
            }
        }

        return undefined
    }

    getCourseBank(): CourseBank {
        return this.courseBank
    }
    setCourseBank(courseBank: CourseBank): void {
        this.courseBank = courseBank
    }
}
