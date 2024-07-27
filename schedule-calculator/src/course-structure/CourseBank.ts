import Course from './Course'

export default class CourseBank {
    private _courseMap: Map<string, Course>

    constructor(courses: Course[]) {
        this._courseMap = new Map()
        for (const course of courses) {
            this._courseMap.set(course.name, course)
        }
    }

    get courseMap(): Map<string, Course> {
        return this._courseMap
    }
    getCourse(courseName: string): Course | undefined {
        return this.courseMap.get(courseName)
    }
    hasCourse(courseName: string): boolean {
        return this.courseMap.has(courseName)
    }
    addCourse(course: Course): void {
        this.courseMap.set(course.name, course)
    }
    clear(): void {
        this.courseMap.clear()
    }
}
