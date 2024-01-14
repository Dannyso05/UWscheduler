import Course from "./Course";

export default class CourseBank {
    private courseMap: Map<String, Course>;

    constructor(courses: Course[]) {
        this.courseMap = new Map();
        for (var course of courses) {
            this.courseMap.set(course.getName(), course);
        }
    }

    getCourseMap(): Map<String, Course> { return this.courseMap; }
    getCourse(courseName: String): Course | undefined {
        return this.courseMap.get(courseName);
    }
    hasCourse(courseName: String): boolean {
        return this.courseMap.has(courseName);
    }
    addCourse(course: Course): void {
        this.courseMap.set(course.getName(), course);
    }
    clear(): void {
        this.courseMap.clear();
    }
}