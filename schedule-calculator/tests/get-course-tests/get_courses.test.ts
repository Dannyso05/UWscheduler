import Course from '../../src/course-structure/Course'
import getCourseHTML from '../../src/get-course/get_course_html'
import { getCourses } from '../../src/get-course/get_courses'
import { getCourseHTMLMock } from './course_html_mocks'

// Mock the getCourseHTML function
jest.mock('../../src/get-course/get_course_html')

const term = 1249
const mockValidCourses = [
    { courseName: 'CS 136L', term: term },
    { courseName: 'CS 135', term: term },
    { courseName: 'MATH 135', term: term },
    { courseName: 'MATH 136', term: term },
]

const mockNonExistentCourses = [
    { courseName: 'CS 136L', term: term },
    { courseName: 'DOESNT EXIST', term: term },
    { courseName: 'MATH 135', term: term },
    { courseName: 'MATH 136', term: term },
]

describe('getCourses', () => {
    beforeEach(() => {
        ;(getCourseHTML as jest.Mock).mockImplementation(getCourseHTMLMock)
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('should return courses', async () => {
        const result: Course[] = await getCourses(mockValidCourses)

        expect(result).toHaveLength(4)
        expect(result).toMatchSnapshot()
    })

    it('should fail if a course does not exist', async () => {
        expect(async () => await getCourses(mockNonExistentCourses)).toThrow()
    })

    // Add more tests for additional mocks as needed
})
