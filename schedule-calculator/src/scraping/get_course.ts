import getCourseHTML from "./get_course_html"
import { JSDOM } from "jsdom"

import { math135winter } from './mockHTML'
import Course from "../course-structure/Course"
import Section from "../course-structure/Section"
import WeeklySection from "../course-structure/WeeklySection"

const NUM_OF_ITEMS = 12

const IDX_ITEM_FUNC: (((dict, node) => void) | undefined)[] = [
    undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined,
]

function getSectionFromHTML(node: HTMLTableRowElement): Section | undefined {
    console.log('\ntext: ', node.textContent)

    const items = Array.from(node.querySelectorAll("td"))

    console.log(items)
    console.log(items.length)
    console.log(items[0] && items[0].textContent)

    if (!(items.length === NUM_OF_ITEMS && items[0] && +items[0].textContent)) {
        return undefined
    }

    const dict = {}

    for (let i = 0; i < items.length; i++) {
        console.log(IDX_ITEM_FUNC[i])
        if (IDX_ITEM_FUNC[i]) {
            IDX_ITEM_FUNC[i](dict, items[i])
        }
    }

    console.log("HERE")

    return new WeeklySection()
}

async function getCourseDetails(subject: string, catalogNumber: number, term: number, html=null) {
    if (!html) {
        html = await getCourseHTML(subject, catalogNumber, term)
    }

    console.log('html:\n', html)

    const dom = new JSDOM(html)
    const doc = dom.window.document

    const rows = doc.querySelector("table").querySelector("table").querySelector("tbody")
    console.log("rows.textContent: ", rows.textContent)

    const sections = []
    rows.querySelectorAll('tr').forEach((node) => { 
        const section = getSectionFromHTML(node)
        if (section) {
            sections.push(section)
        }
    })
}

getCourseDetails('CS', 135, 1249)
