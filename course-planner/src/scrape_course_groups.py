import asyncio
from pyppeteer.launcher import launch
from bs4 import BeautifulSoup

async def scrape(browser):
    page = await browser.newPage()
    await page.goto('https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog#/courses')
    await page.waitFor(4000)
    await page.click('#popup-buttons > button')
    await page.waitFor(1000)
    html = await page.content()
    return html

def parseHTML(html):
    parser = BeautifulSoup(html)
    lst = parser.body.findAll('h2', attrs={'class': 'style__title___3KgQi'})

    lst = list(map(lambda element: element.text, lst))
    print("\n\n<<COPY THE FOLLOWING INTO course_groups.py>>")
    print(lst)
    print("<<END OF COPYING>>\n\n")
    print("Number of course groups:", len(lst))

async def scrape_course_groups():
    browser = await launch({"headless": False})
    html = False
    try:
        html = await scrape(browser)
    finally:
        await browser.close()
    
    if html:
        parseHTML(html)


if __name__ == "__main__":
    asyncio.run(scrape_course_groups())