import getCourseHTML from '../../src/get-course/get_course_html'
import { getCourses } from '../../src/get-course/get_courses'
import * as mocks from './course_html_mocks'
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
        const result = await getCourses(mockValidCourses)

        const expectedResult = [
            // Add expected result based on the structure of htmlMock1
        ]

        expect(result).toEqual(expectedResult)
    })

    it('should return courses for HTML mock 2', async () => {
        // Mock the getCourseHTML function to return the second HTML mock
        ;(getCourseHTML as jest.Mock).mockResolvedValue(mocks.htmlMock2)

        const result = await getCourses()

        // Expected result based on htmlMock2
        const expectedResult = [
            // Add expected result based on the structure of htmlMock2
        ]

        expect(result).toEqual(expectedResult)
    })

    // Add more tests for additional mocks as needed
})
