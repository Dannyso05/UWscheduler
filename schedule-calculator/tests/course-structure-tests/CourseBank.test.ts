import Course from '../../src/course-structure/Course'
import CourseBank from '../../src/course-structure/CourseBank'

describe('CourseBank class tests', () => {
    const course1 = new Course('Math', 101, 3, 'Introduction to Math', [])
    const course2 = new Course('Physics', 202, 4, 'Advanced Physics', [])

    it('constructor should initialize the courseMap with provided courses', () => {
        const courses = [course1, course2]
        const courseBank = new CourseBank(courses)

        const courseMap = courseBank.courseMap
        expect(courseMap.size).toBe(2)
        expect(courseMap.get('Math 101')).toBe(course1)
        expect(courseMap.get('Physics 202')).toBe(course2)
    })

    it('getCourseMap should return the courseMap', () => {
        const courseBank = new CourseBank([])
        const courseMap = courseBank.courseMap

        expect(courseMap).toBeInstanceOf(Map)
        expect(courseMap.size).toBe(0)
    })

    it('getCourse should return the correct course or undefined', () => {
        const courseBank = new CourseBank([course1])

        const retrievedCourse = courseBank.getCourse('Math 101')
        expect(retrievedCourse).toBe(course1)

        const nonExistentCourse = courseBank.getCourse('NonExistentCourse')
        expect(nonExistentCourse).toBeUndefined()
    })

    it('hasCourse should return true if the course exists, false otherwise', () => {
        const courseBank = new CourseBank([course1])

        expect(courseBank.hasCourse('Math 101')).toBe(true)
        expect(courseBank.hasCourse('NonExistentCourse')).toBe(false)
    })

    it('addCourse should add a new course to the courseMap', () => {
        const courseBank = new CourseBank([])

        courseBank.addCourse(course1)

        const courseMap = courseBank.courseMap
        expect(courseMap.size).toBe(1)
        expect(courseMap.get('Math 101')).toBe(course1)
    })

    it('clear should remove all courses from the courseMap', () => {
        const courseBank = new CourseBank([course1, course2])

        courseBank.clear()

        const courseMap = courseBank.courseMap
        expect(courseMap.size).toBe(0)
    })
})
