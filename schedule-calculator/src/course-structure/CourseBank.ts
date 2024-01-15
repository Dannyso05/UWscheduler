import Course from "./Course";

export default class CourseBank {
    private _courseMap: Map<String, Course>;

    constructor(courses: Course[]) {
        this._courseMap = new Map();
        for (var course of courses) {
            this._courseMap.set(course.name, course);
        }
    }

    get courseMap(): Map<String, Course> { return this._courseMap; }
    getCourse(courseName: String): Course | undefined {
        return this.courseMap.get(courseName);
    }
    hasCourse(courseName: String): boolean {
        return this.courseMap.has(courseName);
    }
    addCourse(course: Course): void {
        this.courseMap.set(course.name, course);
    }
    clear(): void {
        this.courseMap.clear();
    }
}