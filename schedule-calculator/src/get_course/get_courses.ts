import { JSDOM } from 'jsdom'

import Section from '../course-structure/Section'
import WeeklySection from '../course-structure/WeeklySection'
import {
    Component,
    isOneTimeComponent,
    stringToComponent,
} from '../course-structure/Component'
import { Campus, stringToCampus } from '../course-structure/Campus'
import {
    LocationTaught,
    stringToLocationTaught,
} from '../course-structure/LocationTaught'
import Timeslot from '../course-structure/Timeslot'
import { Days, stringToDaysList } from '../course-structure/Days'
import OneTimeSection from '../course-structure/OneTimeSection'
import Course from '../course-structure/Course'
import puppeteer from 'puppeteer'
import getCourseHTML from './get_course_html'

export default class GetCourseError extends Error {}

const NUM_OF_ITEMS = 12

function classNumberParser(
    sectionDict: { [key: string]: unknown },
    node: HTMLTableCellElement
) {
    sectionDict.classNumber = +node.textContent
}

function componentParser(
    sectionDict: { [key: string]: unknown },
    node: HTMLTableCellElement
) {
    const [componentString, componentNumberString] = node.textContent.split(' ')

    sectionDict.componentNumber = +componentNumberString
    sectionDict.component = stringToComponent(componentString)
}

function campusAndLocationParser(
    sectionDict: { [key: string]: unknown },
    node: HTMLTableCellElement
) {
    const [campusStr, loactionTaughtStr] = node.textContent.split(/\s+/)

    sectionDict.campus = stringToCampus(campusStr)
    sectionDict.locationTaught = stringToLocationTaught(loactionTaughtStr)
}

function associateClassNumberParser(
    sectionDict: { [key: string]: unknown },
    node: HTMLTableCellElement
) {
    sectionDict.associateClassNumber = +node.textContent
}

function enrolCapParser(
    sectionDict: { [key: string]: unknown },
    node: HTMLTableCellElement
) {
    sectionDict.enrolCap = +node.textContent
}

function enrolTotalParser(
    sectionDict: { [key: string]: unknown },
    node: HTMLTableCellElement
) {
    sectionDict.enrolTotal = +node.textContent
}

function timeAndDateParser(
    sectionDict: { [key: string]: unknown },
    node: HTMLTableCellElement
) {
    const [timeAndWeekDays, date] = node.innerHTML.split('<br>')

    if (date) {
        sectionDict.date = new Date('2024/' + date.split('-')[0])
    }

    if (timeAndWeekDays) {
        const timeStr = timeAndWeekDays.replace(/[a-zA-Z]/g, '')
        sectionDict.timeslot = Timeslot.fromString(timeStr)

        const daysStr = timeAndWeekDays.replace(/[\d:-]/g, '')
        sectionDict.days = stringToDaysList(daysStr)
    } else {
        sectionDict.cancel = true
    }
}

const IDX_ITEM_FUNC: (
    | ((
          sectionDict: { [key: string]: unknown },
          node: HTMLTableCellElement
      ) => void)
    | undefined
)[] = [
    classNumberParser,
    componentParser,
    campusAndLocationParser,
    associateClassNumberParser,
    undefined,
    undefined,
    enrolCapParser,
    enrolTotalParser,
    undefined,
    undefined,
    timeAndDateParser,
    undefined,
]

function dictToSection(dict: { [key: string]: unknown }) {
    if (dict.cancel) {
        return undefined
    }

    if (isOneTimeComponent(dict.component as Component)) {
        return new OneTimeSection(
            dict.courseName as string,
            dict.classNumber as number,
            dict.component as Component,
            dict.componentNumber as number,
            dict.date as Date,
            dict.timeslot as Timeslot,
            dict.enrolCap as number,
            dict.enrolTotal as number,
            '',
            dict.campus as Campus,
            dict.locationTaught as LocationTaught
        )
    } else {
        return new WeeklySection(
            dict.courseName as string,
            dict.classNumber as number,
            dict.component as Component,
            dict.componentNumber as number,
            dict.days as Days[],
            dict.timeslot as Timeslot,
            dict.enrolCap as number,
            dict.enrolTotal as number,
            '',
            dict.campus as Campus,
            dict.locationTaught as LocationTaught
        )
    }
}

function getSectionFromHTML(node: HTMLTableRowElement): Section | undefined {
    const items = Array.from(node.querySelectorAll('td'))

    if (!(items.length === NUM_OF_ITEMS && items[0] && +items[0].textContent)) {
        return undefined
    }

    const sectionDict = {}

    for (let i = 0; i < items.length; i++) {
        if (IDX_ITEM_FUNC[i]) {
            IDX_ITEM_FUNC[i](sectionDict, items[i])
        }
    }

    // console.log('\nnode: ', node.textContent)
    // console.log('sectionDict: ', sectionDict)
    // console.log('section: ', dictToSection(sectionDict))

    return dictToSection(sectionDict)
}

async function getCourse(
    subject: string,
    catalogNumber: number,
    catalogNumberSurfix: string,
    term: number,
    html: string
): Promise<Course> {
    const dom = new JSDOM(html)
    const doc = dom.window.document

    try {
        const infoNode = doc
            .querySelector('table')
            .querySelector('tbody')
            .querySelectorAll('tr')[1]
            .querySelectorAll('td')
        const units = +infoNode[2].textContent
        const courseTitle = infoNode[3].textContent.trimEnd()

        const rows = doc
            .querySelector('table')
            .querySelector('table')
            .querySelector('tbody')

        const sections = []
        const courseName = `${subject} ${catalogNumber}`
        rows.querySelectorAll('tr').forEach((node) => {
            const section = getSectionFromHTML(node)
            if (section) {
                section.courseName = courseName
                sections.push(section)
            }
        })

        const course = new Course(
            subject,
            catalogNumber,
            units,
            courseTitle,
            sections,
            catalogNumberSurfix,
            term
        )

        return course
    } catch (e) {
        throw new GetCourseError(
            `Error getting course ${subject} ${catalogNumber}${catalogNumberSurfix} in term ${term}. Check if this course exists.\nMessage: ${e.message}`
        )
    }
}

function courseNameToDetails(courseName: string) {
    const [subject, numAndSurfix] = courseName.split(' ')

    return {
        subject: subject,
        catalogNumber: +numAndSurfix.replace(/[a-zA-Z]/g, ''),
        catalogNumberSurfix: numAndSurfix.replace(/[\d:-]/g, ''),
    }
}

export async function getCourses(courseInfos: { courseName: string; term: number }[]) {
    const browser = await puppeteer.launch({headless: false})

    const courses: Course[] = []
    const promises: Promise<void>[] = []

    for (const courseInfo of courseInfos) {
        console.log('courseInfo: ', courseInfo)
        const { subject, catalogNumber, catalogNumberSurfix } =
            courseNameToDetails(courseInfo.courseName)

        const promise = getCourseHTML(
            subject,
            catalogNumber,
            catalogNumberSurfix,
            courseInfo.term,
            browser
        ).then((html: string) => {
            getCourse(
                subject,
                catalogNumber,
                catalogNumberSurfix,
                courseInfo.term,
                html
            ).then((course: Course) => {
                courses.push(course)
            })
        })

        promises.push(promise)
    }

    console.log('Waiting...')
    await Promise.all(promises)

    await browser.close()
    console.log('CONFIRM BROWSER CLOSE')

    return courses
}

function run() {
    getCourses([
        { courseName: 'CS 136L', term: 1249 },
        { courseName: 'CS 135', term: 1249 },
        { courseName: 'MATH 135', term: 1249 },
        { courseName: 'MATH 136', term: 1249 },
    ]).then((courses) => console.log('courses:', courses))
}

if (require.main === module) run()
