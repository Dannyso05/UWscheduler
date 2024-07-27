import puppeteer from 'puppeteer'

const URL = 'https://classes.uwaterloo.ca/under.html'

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function getCourseHTML(
    subject: string,
    courseNumber: number,
    catalogNumberSurfix: string = '',
    term: number,
    headless: boolean = true
) {
    const browser = await puppeteer.launch({ headless: headless })
    const page = await browser.newPage()

    await page.goto(URL)

    await page.setViewport({ width: 1080, height: 1024 })

    if (term) {
        await page.select('select#term', `${term}`)
    }

    await page.select('select#ssubject', subject)
    await page.type('input#icournum', `${courseNumber}${catalogNumberSurfix}`)

    await page.click('input[value="Search"]')

    await delay(500)

    const html = await page.content()

    if (!headless) {
        await delay(5000)
    }

    await browser.close()
    return html
}

async function run() {
    const html = await getCourseHTML('CS', 136, 'L', 1251, false)
    console.log('HTML:\n', html)
}

if (require.main === module) run()
